import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [
  { path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) 
  },
  {
    path:'', redirectTo:'authentification', pathMatch:'full'
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
=======
import { StoreManagementComponent } from './store-management/store-management.component';
import { AuthorityManagementComponent } from './authority-management/authority-management.component';
import { SystemDataComponent } from './system-data/system-data.component';
import { TemplateManagementComponent } from './template-management/template-management.component';
import { GatewayManagementComponent } from './gateway-management/gateway-management.component';
import { SystemSettingsComponent } from './system-settings/system-settings.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { OperationRecordComponent } from './operation-record/operation-record.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { AddDataComponent } from './add-data/add-data.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { DeviceInfoComponent } from './device-info/device-info.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'storeManagement', component: StoreManagementComponent },
  { path: 'AuthorityManagement', component: AuthorityManagementComponent },
  { path: 'SystemData', component: SystemDataComponent },
  { path: 'templateManagement', component: TemplateManagementComponent },
  { path: 'gatewayManagement', component: GatewayManagementComponent },
  { path: 'systemSettings', component: SystemSettingsComponent },
  { path: 'deviceManagement', component: DeviceManagementComponent },
  { path: 'operationRecord', component: OperationRecordComponent },
  { path: 'editrole/:id', component: EditRoleComponent },
  { path: 'addData', component: AddDataComponent },
  { path: 'addRole', component: AddRoleComponent },
  { path: 'deviceinfo/:id', component: DeviceInfoComponent },
>>>>>>> c35017f1893c3cec10c97d59d57004a8af552c42
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
