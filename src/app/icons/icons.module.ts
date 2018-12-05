import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconCamera, IconFilter, IconFolder } from 'angular-feather';

const icons = [
  IconFilter,
  IconCamera,
  IconFolder
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: icons
})
export class IconsModule { }
