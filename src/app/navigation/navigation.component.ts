import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationIcons: NavigationType[] = [];

  constructor() { }

  ngOnInit() {

  }

  onItemSelect(selection: string) {
    console.log(selection);
  }

}
