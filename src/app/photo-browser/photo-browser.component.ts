import { Component, OnDestroy, OnInit } from '@angular/core';

import { EventService } from './../event.service';

@Component({
  selector: 'app-photo-browser',
  templateUrl: './photo-browser.component.html',
  styleUrls: ['./photo-browser.component.scss']
})
export class PhotoBrowserComponent implements OnInit, OnDestroy {

  imagesCountSubscription = null;
  imagesCount = 0;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.imagesCountSubscription = this.eventService.imagesCountUpdatedEvt
      .subscribe((count: number) => {
        this.imagesCount = count;
      });

      this.eventService.emitUpdateImagesCount(this.imagesCount);
  }

  onSelectImageRange(from: number, to: number) {
      this.eventService.emitImageRangeSelected(from, to);
  }

  onSelectImages(limit: number) {
    this.eventService.emitImagesSelected(limit);
  }

  ngOnDestroy() {
    this.imagesCountSubscription.unsubscribe();
    this.imagesCount = 0;
  }

}
