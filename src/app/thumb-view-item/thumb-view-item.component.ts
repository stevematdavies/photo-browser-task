import { Component, Input, OnInit } from '@angular/core';

import { Image } from './../browser-window/models';
import { EventService } from './../event.service';

@Component({
  selector: 'app-thumb-view-item',
  templateUrl: './thumb-view-item.component.html',
  styleUrls: ['./thumb-view-item.component.scss']
})
export class ThumbViewItemComponent implements OnInit {

  @Input() image: Image;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  onImageSelect() {
    this.eventService.emitImageSelected(this.image);
  }

}
