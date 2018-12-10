import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Albums, Context, ContextDAO, Geo, User } from './../browser-window/models';
import { DataService } from './../data.service';
import { EventService } from './../event.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  @Input() user: User;
  currentContext: Context = null;
  contextSubscription = null;
  currentContextType = null;
  albumsForUserSubscription = null;
  albumsForUserDataSubscription = null;
  inContext: Boolean = false;
  inContextAsAlbums: Boolean = false;
  contextProperties: any[];
  albumsForUser: Albums;

  constructor(private eventService: EventService, private dataService: DataService) { }

  ngOnInit() {

    this.eventService.clearBooleanFlagsEvt
      .subscribe(() => {
        this.clearAllBooleanFlags();
      });

    this.contextSubscription = this.eventService.contextSelectedEvt
      .subscribe((contextDao: ContextDAO) => {
        this.clearAllBooleanFlags();
        if (contextDao) {
         this.transformContext(contextDao);
        }
      });

      this.albumsForUserSubscription = this.eventService.albumsForUserSelectedEvt
      .subscribe((userid: number) => {
        this.onAlbumsForUserSelected(userid);
      });
  }

  ngOnDestroy() {
    this.currentContext = null;
    this.contextSubscription.unsubscribe();
    this.albumsForUserSubscription.unsubscribe();
    this.currentContextType = null;
    this.clearAllBooleanFlags();

  }

  onContextSelect(context: Context, kind: string ) {
    this.clearAllBooleanFlags();
    this.eventService.emitContextSelected({context, kind});
  }

  transformContext(contextDao: ContextDAO) {
    switch (contextDao.kind) {
      case 'address': this.currentContextType = 'address'; break;
      case 'company': this.currentContextType = 'company'; break;
      case 'albums':  this.currentContextType = 'albums'; break;
    }
    this.currentContext = contextDao.context;
    this.contextProperties = this.getContextProperties(this.currentContext);
    this.inContext = true;
  }

   getContextProperties(context: Context) {
     const proparr = [];
     for (const key of Object.keys(context)) {
        proparr.push({key: key, val: context[key]});
     }
     return proparr;
   }

   itemKeyIsLocator(key: string) {
      return key === 'geo';
   }

   genGeoLink(geo: Geo) {
    return `http://maps.google.com/maps?q=${geo.lat},${geo.lng}`;
   }

   onAlbumsForUserSelected(userid: number) {
    this.albumsForUserDataSubscription = this.dataService.fetchAlbumsForUser(userid)
      .subscribe((albums: Albums) => {
        this.albumsForUser = albums;
        this.inContext = false;
        this.inContextAsAlbums = true;
      });
  }

  clearAllBooleanFlags() {
    this.inContext = false;
    this.inContextAsAlbums = false;
  }

  onAlbumSelected(id: number) {
    this.eventService.emitClearBooleanFlags();
    this.eventService.emitAlbumSelected(id);
  }

  onUSelectUserAlbums() {
    this.eventService.emitAlbumsForUserSelected(this.user.id);
  }

  onSelectUser() {
    this.eventService.emitUserSelected(this.user.id);
    this.clearAllBooleanFlags();
  }
}
