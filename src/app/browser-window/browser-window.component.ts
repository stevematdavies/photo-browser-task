import { Component, OnDestroy, OnInit } from '@angular/core';

import { DataService } from './../data.service';
import { EventService } from './../event.service';
import { Image } from './models';

@Component({selector: 'app-browser-window', templateUrl: './browser-window.component.html', styleUrls: ['./browser-window.component.scss']})
export class BrowserWindowComponent implements OnInit,
OnDestroy {

  updateAllImagesSubscription = null;
  onImageSelectedSubscription = null;
  dataServiceSubscription = null;

  images: Image[];

  constructor(
    private dataService: DataService,
    private eventService: EventService) {}

  ngOnInit() {

    this.onFetchImages();

    this.updateAllImagesSubscription = this.eventService.updateAllImages
      .subscribe(() => {
        this.onFetchImages();
      });

      this.onImageSelectedSubscription = this.eventService.imageSelected
      .subscribe((image: Image) => {
        this.onImageSelected(image);
      });
  }

  ngOnDestroy() {
    this.updateAllImagesSubscription.unsubscribe();
  }

  onFetchImages() {
    this.dataServiceSubscription = this
      .dataService
      .fetchImages()
      .subscribe((images: Image[]) => {
        this.images = images.slice(0, 20);
      });
  }

  onImageSelected(image: Image) {
      console.log(image);
  }

}
