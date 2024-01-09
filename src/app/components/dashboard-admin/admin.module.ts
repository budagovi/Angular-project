import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ScheduleformComponent } from '../scheduleform/scheduleform.component';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    DashboardAdminComponent,
    ScheduleformComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScheduleComponent,
    AdminRoutingModule
  ]
})
export class AdminModule { }
