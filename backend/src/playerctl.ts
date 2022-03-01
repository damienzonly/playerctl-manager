import { spawn } from "child_process";

const PLAYERCTL_COMMAND = "playerctl"

export function _spawnCommand(command: string, args: string | string[]) {
    args = Array.isArray(args) ? args : [args]
    const exec = spawn(command, args)
    let stdout = ""
    let stderr = ""
    return new Promise<string>((resolve, reject) => {
        exec.stdout.on("data", chunk => {
            stdout+=chunk
        })
    
        exec.stderr.on("data", chunk => {
            stderr+=chunk
        })

        exec.on("exit", exitCode => {
            if (exitCode !== 0 || stderr) return reject(stderr)
            resolve(stdout)
        })
    })
}

/**
 * returns the array of lines splitted, removing empty strings and trimming every line
 * @param text the output to split
 */
export function splitLines(text: string) {
    return text.trim().split("\n").map(item => item.trim()).filter(Boolean)
}



export async function listPlayers() {
    return splitLines(await _spawnCommand(PLAYERCTL_COMMAND, "-l"))
}