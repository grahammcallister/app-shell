import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  imports: [
    CommonModule,
    NgxElectronModule,
    NgbModule
  ],
  declarations: [ToolbarComponent],
  exports: [
    ToolbarComponent
  ]
})
export class SessionModule { }
