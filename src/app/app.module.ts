import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppComponent } from './app.component';
import { BrowserWindowComponent } from './browser-window/browser-window.component';
import { DataService } from './data.service';
import { EventService } from './event.service';
import { LogoComponent } from './logo/logo.component';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoBrowserComponent,
    LogoComponent,
    AppMenuComponent,
    BrowserWindowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
