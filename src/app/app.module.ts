import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { NavigationService } from './navigation/navigation-service';
import { NavigationComponent } from './navigation/navigation.component';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoBrowserComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    IconsModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
