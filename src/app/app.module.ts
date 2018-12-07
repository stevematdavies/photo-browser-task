import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';
import { BrowserWindowComponent } from './browser-window/browser-window.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoBrowserComponent,
    LogoComponent,
    AppMenuComponent,
    BrowserWindowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
