import { Component, Input, OnInit } from '@angular/core';

import { User } from './../browser-window/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  inContext: Boolean = false;

  constructor() { }

  ngOnInit() {
  }


}
