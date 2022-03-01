const {ipcRenderer} = window.require("electron");

export function sendIPC (channel: string, ...args: any[]) {
    return ipcRenderer.invoke(channel, ...args)
}