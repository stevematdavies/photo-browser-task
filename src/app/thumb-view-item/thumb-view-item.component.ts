import { Component, Input, OnInit } from '@angular/core';

import { Image } from './../browser-window/models';

@Component({
  selector: 'app-thumb-view-item',
  templateUrl: './thumb-view-item.component.html',
  styleUrls: ['./thumb-view-item.component.scss']
})
export class ThumbViewItemComponent implements OnInit {

  @Input() image: Image;

  constructor() { }

  ngOnInit() {
  }

}
