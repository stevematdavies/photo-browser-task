import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  @Output() navigate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onSelect(point: string) {
    this.navigate.emit(point);
  }

}
