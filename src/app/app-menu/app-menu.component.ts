import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  toggleMenu: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

}
