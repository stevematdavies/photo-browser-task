import { EventEmitter, Injectable, Output } from '@angular/core';

import { Image } from './browser-window/models';

@Injectable()
export class EventService {


  @Output() updateAllImages: EventEmitter<any> = new EventEmitter();
  @Output() imageSelected: EventEmitter<Image> = new EventEmitter();

  constructor() { }

}
