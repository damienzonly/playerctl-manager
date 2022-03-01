import React, { useEffect, useState } from "react";
import { PLAYERS_CHANNEL } from "../../channels";
import { sendIPC } from "../../lib/ipc";

export function Players() {
    const [data, setData] = useState("default");

    useEffect(() => {
        sendIPC(PLAYERS_CHANNEL).then(setData)
    })

    return <div>ciao {data}</div>
}