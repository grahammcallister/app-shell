"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
function createShellWindow() {
    let win = new electron_1.BrowserWindow({
        minWidth: 1024,
        minHeight: 768,
        width: 1024,
        height: 768,
        icon: __dirname + "../../application.ico",
        title: `${electron_1.app.getName()} ${electron_1.app.getVersion()}`,
        frame: false
    });
    win.loadFile(path.join(__dirname, "../../angular-shell/index.html"));
    win.on("closed", () => {
        win.destroy();
    });
    return win;
}
exports.createShellWindow = createShellWindow;
//# sourceMappingURL=window.js.map