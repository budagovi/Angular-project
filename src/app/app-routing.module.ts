import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { WorkerGuard } from './guards/worker.guard';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';

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
        loadChildren: () => import('./components/dashboard-admin/admin.module').then(m => m.AdminModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'worker',
        loadComponent: () => import('./components/dashboard-user/dashboard-user.component').then(c => c.DashboardUserComponent),
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
