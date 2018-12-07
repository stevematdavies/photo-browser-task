import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class EventService {


  @Output() updateAllImages: EventEmitter<any> = new EventEmitter();
  @Output() updateAlbums: EventEmitter<any> = new EventEmitter();
  @Output() updateUsers: EventEmitter<string> = new EventEmitter();


  constructor() { }

  doFetchPictures() {
    this.updateAllImages.next();
  }

}
