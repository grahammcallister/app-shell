import { BrowserWindow } from "electron";

export function sendToAllWindows(channel: string, message: any): void {
    let windows: BrowserWindow[] = BrowserWindow.getAllWindows();
    if(windows && windows.length > 0) {
      windows.forEach(
        (element) => {
          element.webContents.send(channel, message);
        }
      );
    }
  }