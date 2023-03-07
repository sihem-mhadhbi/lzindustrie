import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceClientComponent } from '../device-client/device-client.component';
import { GatewayClientComponent } from '../gateway-client/gateway-client.component';
import { StoreOverviewComponent } from '../store-overview/store-overview.component';
import { StoredataClientComponent } from '../storedata-client/storedata-client.component';
import { TemplateClientComponent } from '../template-client/template-client.component';
import { DashboardClientComponent } from './dashboard-client.component';

const routes: Routes = [{ path: '', component: DashboardClientComponent, children:[
  { path: 'store', component: StoreOverviewComponent },
  { path: 'StoredataClient', component: StoredataClientComponent },
  { path: 'TemplateClient', component: TemplateClientComponent },
  { path: 'GatewayClient', component: GatewayClientComponent },
  { path: 'DeviceClient', component: DeviceClientComponent },

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardClientRoutingModule { }
