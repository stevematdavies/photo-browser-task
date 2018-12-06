import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoBrowserComponent,
  ],
  imports: [
    BrowserModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
