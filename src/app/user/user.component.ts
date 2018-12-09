import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Context, ContextDAO, User } from './../browser-window/models';
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
  inContext: Boolean = false;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.contextSubscription = this.eventService.contextSelectedEvt
      .subscribe((contextDao: ContextDAO) => {
        if (contextDao) {
         this.transformContext(contextDao);
        }
      });
  }

  ngOnDestroy() {
    this.currentContext = null;
    this.contextSubscription.unsubscribe();
    this.inContext = false;
    this.currentContextType = null;
  }

  onContextSelect(context: Context, kind: string ) {
      this.eventService.emitContextSelected({context, kind});
  }

  transformContext(contextDao: ContextDAO) {
    switch (contextDao.kind) {
      case 'address': this.currentContextType = 'address'; break;
      case 'company': this.currentContextType = 'company'; break;
    }
    this.currentContext = contextDao.context;
    this.inContext = true;
  }
}
