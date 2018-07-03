import { Component, OnInit, OnDestroy, Input, Output, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  constructor(private _electronService: ElectronService, private _cdr: ChangeDetectorRef) {}

  private unsubscribe: () => void;

  @Input()
  @Output()
  windowCount: string = this.getWindowCount();

  ngOnInit() {
    console.log('ngOnInit Toolbar');
    if (this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.on('window_count', (sender, args) => {
        console.log(`Renderer heard window_count ${args}`);
        this.setWindowCount(args);
        });
        this._electronService.ipcRenderer.send('window_count');
    }
  }

  setWindowCount(count: string) {
    this.windowCount = count;
    this._cdr.detectChanges();
  }

  getWindowCount() {
    if (!this.windowCount) {
      return '1';
    }
    this._cdr.detectChanges();
    return this.windowCount;
  }

  ngOnDestroy() {
    if (this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.removeListener('window_count', (count) => this.setWindowCount(count));
    }
  }

  newWindowClick(): void {
    console.log('New window click');
    if (this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.send('NEW_WINDOW');
    }
  }
}
