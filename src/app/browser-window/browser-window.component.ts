import { Component, OnDestroy, OnInit } from '@angular/core';

import { DataService } from './../data.service';
import { EventService } from './../event.service';
import { Image } from './models';

@Component({selector: 'app-browser-window', templateUrl: './browser-window.component.html', styleUrls: ['./browser-window.component.scss']})
export class BrowserWindowComponent implements OnInit,
OnDestroy {

  imagesSubscription = null;
  imageSubscription = null;
  imageRangeSubscription = null;
  dataSubscription = null;
  imgLimit = 10;
  images: Image[];

  constructor(
    private dataService: DataService,
    private eventService: EventService) {}

  ngOnInit() {
    this.imagesSubscription = this.eventService.imagesSelectedEvt
      .subscribe((limit) => {
        this.onImagesSelected(limit);
    });

    this.imageRangeSubscription = this.eventService.imagedRangeSelectedEvt
      .subscribe((range: {from: number, to: number}) => {
        this.onImageRangeSelected(range);
      });



    this.onSelectImages(this.imgLimit);
  }

  ngOnDestroy() {
    this.imagesSubscription.unsubscribe();
    this.imageRangeSubscription.unsubscribe();
    this.images = [];
    this.imgLimit = 10;
  }

  onImagesSelected(limit: number) {
    this.dataSubscription = this.dataService.fetchImages(limit)
      .subscribe((images: Image[]) => {
          this.images = images;
          this.eventService.emitUpdateImagesCount(this.images.length);
      });
  }

  onImageRangeSelected(range: {from: number, to: number}) {
    this.dataSubscription = this.dataService.fetchImageRange(range)
    .subscribe((images: Image[]) => {
        this.images = images;
        this.eventService.emitUpdateImagesCount(this.images.length);
    });
  }

  onImageSelected(image: Image) {
      this.eventService.emitImageSelected(image);
  }

  onSelectImages(limit: number) {
    this.eventService.emitImagesSelected(limit);
  }

}
