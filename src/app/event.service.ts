import { EventEmitter, Injectable, Output } from '@angular/core';

import { Image } from './browser-window/models';

@Injectable()
export class EventService {

  @Output() imagesSelectedEvt: EventEmitter<void> = new EventEmitter();
  @Output() imageSelectedEvt: EventEmitter<Image> = new EventEmitter();
  @Output() albumSelectedEvt: EventEmitter<number> = new EventEmitter();
  @Output() userSelectedEvt: EventEmitter<number> = new EventEmitter();
  @Output() usersSelectedEvt: EventEmitter<void> = new EventEmitter();

  constructor() { }

  emitUsersSelected() {
    this.usersSelectedEvt.next();
  }

  emitUserSelected(id: number) {
    this.userSelectedEvt.next(id);
  }

  emitImageSelected(image: Image) {
    this.imageSelectedEvt.next(image);
  }

  emitImagesSelected() {
    this.imagesSelectedEvt.next();
  }

  emitAlbumSelected(id: number) {
    this.albumSelectedEvt.next(id);
  }

}
