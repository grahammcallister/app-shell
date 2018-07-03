"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const environment_setup_1 = require("../environments/environment.setup");
const State = require("./state/state");
const StateActions = require("./state/state.actions");
const Queries = require("./state/queries");
const window_1 = require("./window/window");
environment_setup_1.setupDevelopmentEnvironment();
State.initialiseState();
electron_1.app.on("ready", () => {
    window_1.createShellWindow();
    State.dispatch(StateActions.NewWindowAction);
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        unsubscribe();
        electron_1.app.quit();
    }
});
electron_1.ipcMain.addListener(StateActions.NewWindow, () => {
    window_1.createShellWindow();
    State.dispatch(StateActions.NewWindowAction);
});
electron_1.ipcMain.addListener(StateActions.CloseWindow, () => {
    State.dispatch(StateActions.CloseWindowAction);
});
electron_1.ipcMain.addListener(Queries.WindowCount, (event) => {
    event.sender.send(Queries.WindowCount, State.getState().window_count);
});
let unsubscribe = State.subscribe(() => {
    sendToAllWindows(Queries.WindowCount, State.getState().window_count);
});
function sendToAllWindows(channel, message) {
    let windows = electron_1.BrowserWindow.getAllWindows();
    if (windows && windows.length > 0) {
        windows.forEach((element) => {
            element.webContents.send(channel, message);
        });
    }
}
//# sourceMappingURL=electron-main.js.map