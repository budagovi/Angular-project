import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { AdminGuard } from './guards/admin.guard';
import { WorkerGuard } from './guards/worker.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '',
        loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent)
      },

      {
        path: 'sign-up',
        loadComponent: () => import('./components/register/register.component').then(c => c.RegisterComponent)
      },
      
      {
        path: 'admin',
        component: DashboardAdminComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'worker',
        component: DashboardUserComponent,
        canActivate: [WorkerGuard],
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
