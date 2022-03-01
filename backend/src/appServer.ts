import { PLAYERS_RESOURCE } from "./resources";
import { makeCrudApis } from "./crud/crud";
import { requestHandler } from "./ipc";
import { listPlayers } from "./playerctl";

const playersCrudApis = makeCrudApis(PLAYERS_RESOURCE);

export function initializeIPC() {
    requestHandler(playersCrudApis.list, async () => {
        return listPlayers()
    })
}