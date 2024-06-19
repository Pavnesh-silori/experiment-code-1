import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import { ApiIntegrationModule } from './api-integration/api-integration.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    MatCardModule,
    MatInputModule,
    ApiIntegrationModule,
    SchedulerModule,

  ]
})
export class CreateModule { }
