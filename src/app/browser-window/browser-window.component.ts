import { Component, OnDestroy, OnInit } from '@angular/core';

import { DataService } from './../data.service';
import { EventService } from './../event.service';
import { Image } from './models';

@Component({selector: 'app-browser-window', templateUrl: './browser-window.component.html', styleUrls: ['./browser-window.component.scss']})
export class BrowserWindowComponent implements OnInit,
OnDestroy {

  imagesSubscription = null;
  imageSubscription = null;
  dataSubscription = null;

  images: Image[];

  constructor(
    private dataService: DataService,
    private eventService: EventService) {}

  ngOnInit() {
    this.imagesSubscription = this.eventService.imagesSelectedEvt
      .subscribe(() => {
        this. onImagesSelected();
    });

    this.onSelectImages();
  }

  ngOnDestroy() {
    this.imagesSubscription.unsubscribe();
    this.images = [];
  }

  onImagesSelected() {
    this.dataSubscription = this.dataService.fetchImages()
      .subscribe((images: Image[]) => {
          this.images = images.slice(0, 20);
      });
  }

  onImageSelected(image: Image) {
      this.eventService.emitImageSelected(image);
  }

  onSelectImages() {
    this.eventService.emitImagesSelected();
  }

}
