import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ScheduleformComponent } from './scheduleform/scheduleform.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    DashboardUserComponent,
    ScheduleformComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ScheduleComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
