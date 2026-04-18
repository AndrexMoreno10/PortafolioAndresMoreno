import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroComponent
  ],
  exports:[HeroComponent]
})
export class HeroModule {  }