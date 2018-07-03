import { app, BrowserWindow } from "electron";
import * as path from "path";

export function createShellWindow(): Electron.BrowserWindow {

    let win: Electron.BrowserWindow = new BrowserWindow({
      minWidth: 1024,
      minHeight: 768,
      width: 1024,
      height: 768,
      icon: __dirname + "../../application.ico",
      title: `${app.getName()} ${app.getVersion()}`,
      frame: false
    });

    win.loadFile(path.join(__dirname, "../../angular-shell/index.html"));

    win.on("closed", () => {
      win.destroy();
    });

    return win;
}