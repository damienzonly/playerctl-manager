const {ipcRenderer} = window.require("electron");

export function sendIPC<R>(channel: string, ...args: any[]): Promise<R>{
    return ipcRenderer.invoke(channel, ...args)
}