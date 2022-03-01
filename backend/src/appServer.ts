import { PLAYERS_CHANNEL } from "./channels";
import { requestHandler } from "./ipc";

export function initializeIPC() {
    requestHandler(PLAYERS_CHANNEL, () => {
        return "giovanni"
    })
}