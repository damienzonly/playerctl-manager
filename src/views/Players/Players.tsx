import { Card, List } from "antd";
import React, { useEffect, useState } from "react";
import { sendIPC } from "../../lib/ipc";

export function Players() {
    const [data, setData] = useState<string[]>([]);

    useEffect(() => {
        sendIPC<string[]>("list_players").then(data => {
            console.log("data", data)
            setData(data)
        })
    }, [])

    return <>
        <Card>
            <List
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </Card>
    </>
}