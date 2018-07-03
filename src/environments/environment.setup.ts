import { app, BrowserWindow } from "electron";
import * as electronCompile from "electron-compile";
import { environment } from "../environments/environment";
import * as path from "path";

/*
 * Sets up development environment state
 */
export function setupDevelopmentEnvironment(): void {
    if (environment && !environment.production) {
        let appRoot: string = path.resolve(".");
        console.log(`appRoot: ${appRoot}`);
        electronCompile.init(appRoot, `${appRoot}/dist/electron-main/electron-main.js`);
        electronCompile.enableLiveReload();

        app.on("ready", () => {
            if(!environment.production) {
                let appRoot: string = path.resolve(".");
                console.log(`${appRoot}`);
                BrowserWindow.addDevToolsExtension(`${appRoot}/node_modules/devtron`);
            }
        });
    }
}