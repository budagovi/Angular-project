import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ScheduleformComponent } from './components/scheduleform/scheduleform.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    
    ScheduleformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ScheduleComponent,
    DashboardUserComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
