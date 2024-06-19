import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationaryCreateRoutingModule } from './stationary-create-routing.module';
import { StationaryCreateComponent } from './stationary-create.component';


@NgModule({
  declarations: [
    StationaryCreateComponent
  ],
  imports: [
    CommonModule,
    StationaryCreateRoutingModule
  ]
})
export class StationaryCreateModule { }
