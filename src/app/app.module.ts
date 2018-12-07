import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppComponent } from './app.component';
import { BrowserWindowComponent } from './browser-window/browser-window.component';
import { DataService } from './data.service';
import { EventService } from './event.service';
import { LogoComponent } from './logo/logo.component';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';
import { ThumbViewItemComponent } from './thumb-view-item/thumb-view-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoBrowserComponent,
    LogoComponent,
    AppMenuComponent,
    BrowserWindowComponent,
    ThumbViewItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
