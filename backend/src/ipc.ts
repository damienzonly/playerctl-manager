import {ipcMain} from "electron";

export function requestHandler<T=any, R=any>(channel: string, handlerFn: (body: T) => R | Promise<R>) {
    ipcMain.handle(channel, (_, _body) => {
        return handlerFn(_body)
    })
}