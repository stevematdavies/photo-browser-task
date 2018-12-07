import { Component, OnInit } from '@angular/core';

import { EventService } from './../event.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  toggleMenu: Boolean = false;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

  onSelectFetchAll() {
    this.eventService.doFetchPictures();
  }

  onSelectFetchAlbums() {
    this.eventService.doFetchAlbums();
  }

  onSelectSort() {
    this.eventService.doSort();
  }

}
