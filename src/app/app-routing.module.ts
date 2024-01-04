import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)
      },
      { 
        path: 'schedule',
        loadComponent: () => import('./schedule/schedule.component').then(m => m.ScheduleComponent)
      },
      {
        path: 'sign-in',
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
      },
      {
        path: 'admin',
        component: DashboardAdminComponent
      },
      {
        path: 'worker',
        component: DashboardUserComponent
      },
    ]
  },
  {
    path: "**", redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
