import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconAperture, IconCamera, IconGithub, IconHeart } from 'angular-feather';

const icons = [
  IconCamera,
  IconHeart,
  IconGithub,
  IconAperture
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: icons
})
export class IconsModule { }
