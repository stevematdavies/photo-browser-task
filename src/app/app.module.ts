import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserWindowComponent } from './browser-window/browser-window.component';
import { DataService } from './data.service';
import { EventService } from './event.service';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';
import { ThumbViewItemComponent } from './thumb-view-item/thumb-view-item.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoBrowserComponent,
    BrowserWindowComponent,
    ThumbViewItemComponent,
    ImageDetailComponent,
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
