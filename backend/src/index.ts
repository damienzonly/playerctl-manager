import { app, BrowserWindow } from "electron";
import path from "path";
import { initializeIPC } from "./appServer";

const isDev = process.env.ENV !== "production";

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    /**
     * Controllo di versione
     */
    mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "./build/index.html")}`);
    mainWindow.on("closed", () => (mainWindow = null));
};

app.on("ready", createWindow)
    .on("window-all-closed", () => process.platform !== "darwin" && app.quit())
    .on("activate", () => {
        mainWindow === null && createWindow();
    });

initializeIPC()