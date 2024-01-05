import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./components/register/register.component').then(c => c.RegisterComponent)
      },
      {
        path: 'schedule',
        loadComponent: () => import('./components/schedule/schedule.component').then(m => m.ScheduleComponent)
      },
      {
        path: 'sign-in',
        loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent)
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
