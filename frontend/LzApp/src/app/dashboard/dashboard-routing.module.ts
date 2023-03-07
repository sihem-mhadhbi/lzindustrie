import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from '../add-data/add-data.component';
import { AddRoleComponent } from '../add-role/add-role.component';
import { AuthorityManagementComponent } from '../authority-management/authority-management.component';
import { DeviceManagementComponent } from '../device-management/device-management.component';
import { EditRoleComponent } from '../edit-role/edit-role.component';
import { GatewayManagementComponent } from '../gateway-management/gateway-management.component';
import { GuardadminGuard } from '../guards/guardadmin.guard';
import { OperationRecordComponent } from '../operation-record/operation-record.component';
import { StoreManagementComponent } from '../store-management/store-management.component';
import { SystemDataComponent } from '../system-data/system-data.component';
import { SystemSettingsComponent } from '../system-settings/system-settings.component';
import { TemplateManagementComponent } from '../template-management/template-management.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [GuardadminGuard],

    children: [
      {
        path: 'storeManagement',
        component: StoreManagementComponent,
      },
      {
        path: 'AuthorityManagement',
        component: AuthorityManagementComponent,
      },
      {
        path: 'SystemData',
        component: SystemDataComponent,
      },
      {
        path: 'templateManagement',
        component: TemplateManagementComponent,
      },
      {
        path: 'gatewayManagement',
        component: GatewayManagementComponent,
      },
      {
        path: 'systemSettings',
        component: SystemSettingsComponent,
      },
      {
        path: 'deviceManagement',
        component: DeviceManagementComponent,
      },
      {
        path: 'operationRecord',
        component: OperationRecordComponent,
      },
      { path: 'editrole/:id', component: EditRoleComponent },
      { path: 'addData', component: AddDataComponent },
      { path: 'addRole', component: AddRoleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
