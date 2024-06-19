import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileCreateRoutingModule } from './mobile-create-routing.module';
import { MobileCreateComponent } from './mobile-create.component';


@NgModule({
  declarations: [
    MobileCreateComponent
  ],
  imports: [
    CommonModule,
    MobileCreateRoutingModule
  ]
})
export class MobileCreateModule { }
