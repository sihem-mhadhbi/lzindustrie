import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardadminGuard } from './guards/guardadmin.guard';

const routes: Routes = [
  {
    path: 'authentification',
    loadChildren: () =>
      import('./authentification/authentification.module').then(
        (m) => m.AuthentificationModule
      ),
  },
  {
    path: '',
    redirectTo: 'authentification',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'DashboardClient',
    loadChildren: () =>
      import('./dashboard-client/dashboard-client.module').then(
        (m) => m.DashboardClientModule
      ),
  },
  {
    path: 'Client',
    redirectTo: 'DashboardClient',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
