import { Component, OnDestroy, OnInit } from '@angular/core';

import { Image } from './../browser-window/models';
import { EventService } from './../event.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit, OnDestroy {


  imageSubscription = null;
  image: Image;
  showDisplay: Boolean = false;

  constructor(private eventService: EventService) { }



  ngOnInit() {
    this.imageSubscription = this.eventService.imageSelected.subscribe(
      (image: Image) => {
        if (image) {
          this.image = image;
          this.showDisplay = true;
        }
      }
    );
  }

  ngOnDestroy() {
    this.imageSubscription.unsubscribe();
  }

  onCloseDisplay() {
    this.showDisplay = false;
    this.image = null;
  }

}
