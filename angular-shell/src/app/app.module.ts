import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxElectronModule } from 'ngx-electron';
import { AppComponent } from './app.component';
import { SessionModule } from './session/session.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgxElectronModule,
    SessionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
