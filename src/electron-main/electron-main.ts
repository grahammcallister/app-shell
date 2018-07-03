import { app, ipcMain, BrowserWindow } from "electron";
import { setupDevelopmentEnvironment } from "../environments/environment.setup";
import * as State from "./state/state";
import * as StateActions from "./state/state.actions";
import * as Queries from "./state/queries";
import { createShellWindow } from "./window/window";

setupDevelopmentEnvironment();
State.initialiseState();

app.on("ready", () => {
  createShellWindow();
  State.dispatch(StateActions.NewWindowAction);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    unsubscribe();
    app.quit();
  }
});

ipcMain.addListener(StateActions.NewWindow, () => {
  createShellWindow();
  State.dispatch(StateActions.NewWindowAction);
});

ipcMain.addListener(StateActions.CloseWindow, () => {
  State.dispatch(StateActions.CloseWindowAction);
});

ipcMain.addListener(Queries.WindowCount, (event: any) => {
  event.sender.send(Queries.WindowCount, State.getState().window_count);
});

let unsubscribe: any = State.subscribe((): void => {
  sendToAllWindows(Queries.WindowCount, State.getState().window_count);
});

function sendToAllWindows(channel: string, message: any): void {
  let windows: BrowserWindow[] = BrowserWindow.getAllWindows();
  if(windows && windows.length > 0) {
    windows.forEach(
      (element) => {
        element.webContents.send(channel, message);
      }
    );
  }
}