import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoBrowserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
