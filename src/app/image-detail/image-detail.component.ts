import { Component, OnDestroy, OnInit } from '@angular/core';

import { Album, Image, User } from './../browser-window/models';
import { DataService } from './../data.service';
import { EventService } from './../event.service';

@Component({selector: 'app-image-detail', templateUrl: './image-detail.component.html', styleUrls: ['./image-detail.component.scss']})
export class ImageDetailComponent implements OnInit,
OnDestroy {

  imageSubscription = null;
  albumSubscription = null;
  usersSubscription = null;
  userSubscription = null;
  clearBooleanFlagsSubscripion = null;

  image: Image;
  album: Album;
  user: User;
  users: User[];

  showDisplay: Boolean = false;

  constructor(private eventService: EventService, private dataService: DataService) {}

  ngOnInit() {

    this.albumSubscription = this.eventService.albumSelectedEvt
      .subscribe((id: number) => {
        this.onAlbumSelected(id);
      });

    this.usersSubscription = this.eventService.usersSelectedEvt
      .subscribe(() => {
        this.onUsersSelected();
    });

    this.userSubscription = this.eventService.userSelectedEvt
    .subscribe((id: number) => {
      this.onUserSelected(id);
    });

    this.imageSubscription = this.eventService.imageSelectedEvt
      .subscribe((image: Image) => {
        this.onImageSelected(image);
    });

    this.clearBooleanFlagsSubscripion = this.eventService.clearBooleanFlagsEvt
    .subscribe(() => {
      this.onClearBooleanFlags();
  });

  }

  onSelectUsers() {
    this.eventService.emitUsersSelected();
  }

  onSelectUser(id: number) {
    this.eventService.emitUserSelected(id);
  }

  onSelectImages() {
    this.eventService.emitImagesSelected();
  }

  onSelectAlbum() {
    this.eventService.emitAlbumSelected(this.image.albumId);
  }

  onUSelectUserAlbums() {
    this.eventService.emitAlbumsForUserSelected(this.user.id);
  }

  onUsersSelected() {
    this.dataService.fetchUsersForAlbum(this.album.userId)
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  onUserSelected(id: number) {
    this.dataService.fetchUser(id)
      .subscribe((user: User) => {
        this.user = user;
        this.eventService.emitClearBooleanFlags();
      });
  }

  onImageSelected(image: Image) {
    this.image = image;
    this.showDisplay = true;
    this.onSelectAlbum();
  }

  onAlbumSelected(id: number) {
    this.dataService.fetchAlbum(id)
    .subscribe((album: Album) => {
      this.album = album;
    });
  }

  ngOnDestroy() {
    this.imageSubscription.unsubscribe();
    this.albumSubscription.unsubscribe();
    this.usersSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
    this.clearBooleanFlagsSubscripion.unsubscribe();
  }

  onClearBooleanFlags() {
    this.users = null;
  }

  onCloseDisplay() {
    this.showDisplay = false;
    this.image = null;
    this.album = null;
    this.user = null;
    this.users = null;
  }

}
