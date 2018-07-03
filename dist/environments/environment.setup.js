"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electronCompile = require("electron-compile");
const environment_1 = require("../environments/environment");
const path = require("path");
/*
 * Sets up development environment state
 */
function setupDevelopmentEnvironment() {
    if (environment_1.environment && !environment_1.environment.production) {
        let appRoot = path.resolve(".");
        console.log(`appRoot: ${appRoot}`);
        electronCompile.init(appRoot, `${appRoot}/dist/electron-main/electron-main.js`);
        electronCompile.enableLiveReload();
        electron_1.app.on("ready", () => {
            if (!environment_1.environment.production) {
                let appRoot = path.resolve(".");
                console.log(`${appRoot}`);
                electron_1.BrowserWindow.addDevToolsExtension(`${appRoot}/node_modules/devtron`);
            }
        });
    }
}
exports.setupDevelopmentEnvironment = setupDevelopmentEnvironment;
//# sourceMappingURL=environment.setup.js.map