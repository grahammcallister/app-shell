import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = this.getAppTitle();

  constructor(private _electronService: ElectronService) { }

  public getAppTitle() {
    if (this._electronService.isElectronApp) {
      return `${this._electronService.remote.app.getName()} ${this._electronService.remote.app.getVersion()}`;
    }
    return 'app';
  }

  public closeWindow() {
      if (this._electronService.isElectronApp) {
          this._electronService.ipcRenderer.send('close_window');
          this._electronService.remote.getCurrentWindow().close();
      }
  }

  public maximiseWindow() {
    const win = this._electronService.remote.getCurrentWindow();
    if (!win.isMaximized() && win.isMaximizable()) {
      win.maximize();
    } else {
      win.unmaximize();
    }
  }

  public minimiseWindow() {
    this._electronService.remote.getCurrentWindow().minimize();
  }

  public openDevTools() {
    this._electronService.remote.getCurrentWindow().webContents.toggleDevTools();
  }

  public reload() {
    this._electronService.remote.getCurrentWindow().webContents.reload();
  }
}
