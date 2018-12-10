import { EventEmitter, Injectable, Output } from '@angular/core';

import { ContextDAO, Image } from './browser-window/models';
import { DataService } from './data.service';

@Injectable()
export class EventService {

  @Output() imagesSelectedEvt: EventEmitter<void> = new EventEmitter();
  @Output() clearBooleanFlagsEvt: EventEmitter<void> = new EventEmitter();
  @Output() imageSelectedEvt: EventEmitter<Image> = new EventEmitter();
  @Output() albumSelectedEvt: EventEmitter<number> = new EventEmitter();
  @Output() albumsForUserSelectedEvt: EventEmitter<number> = new EventEmitter();
  @Output() userSelectedEvt: EventEmitter<number> = new EventEmitter();
  @Output() usersSelectedEvt: EventEmitter<void> = new EventEmitter();
  @Output() contextSelectedEvt: EventEmitter<ContextDAO> = new EventEmitter();
  @Output() imagesCountUpdatedEvt: EventEmitter<number> = new EventEmitter();

  constructor(private dataService: DataService) { }

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

  emitAlbumsForUserSelected(id: number) {
    this.albumsForUserSelectedEvt.next(id);
  }

  emitContextSelected(contextDao: ContextDAO) {
    this.contextSelectedEvt.next(contextDao);
  }

  emitClearBooleanFlags() {
    this.clearBooleanFlagsEvt.next();
  }

  emitUpdateImagesCount(count: number) {
    this.imagesCountUpdatedEvt.next(count);
  }

  emitLinkToAlbum(id: number) {
    this.dataService.linkToAlbum(id);
  }

  emitLinkToImage(id: number) {
    this.dataService.linkToImage(id);
  }

}
