import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreManagementComponent } from './store-management/store-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddStoreComponent } from './add-store/add-store.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdateStoreComponent } from './update-store/update-store.component';
import { AuthorityManagementComponent } from './authority-management/authority-management.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { MatRadioModule } from '@angular/material/radio';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { SystemDataComponent } from './system-data/system-data.component';
import { ImportComponent } from './import/import.component';
import { TemplateManagementComponent } from './template-management/template-management.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AddtemplateComponent } from './addtemplate/addtemplate.component';
import { DeleteTemplateComponent } from './delete-template/delete-template.component';
import { CopyTemplateComponent } from './copy-template/copy-template.component';
import { GatewayManagementComponent } from './gateway-management/gateway-management.component';
import { AddGatewayComponent } from './add-gateway/add-gateway.component';
import { ModifyGatewayComponent } from './modify-gateway/modify-gateway.component';
import { DeleteGatewayComponent } from './delete-gateway/delete-gateway.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { WifiComponent } from './wifi/wifi.component';
import { SystemSettingsComponent } from './system-settings/system-settings.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { OperationRecordComponent } from './operation-record/operation-record.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { DeleteStaffComponent } from './delete-staff/delete-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AddPermissionComponent } from './add-permission/add-permission.component';
import { DeletePermissionComponent } from './delete-permission/delete-permission.component';
import { EditPermissionComponent } from './edit-permission/edit-permission.component';
import { BatchPermissionComponent } from './batch-permission/batch-permission.component';
import { ExportDataComponent } from './export-data/export-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ImportBatchComponent } from './import-batch/import-batch.component';
import { DeviceInfoComponent } from './device-info/device-info.component';
import { ImportBsheetComponent } from './import-bsheet/import-bsheet.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { RefreshComponent } from './refresh/refresh.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ImportWarningComponent } from './import-warning/import-warning.component';
import { ExportRecordComponent } from './export-record/export-record.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StoreManagementComponent,
    AddStoreComponent,
    UpdateStoreComponent,
    AuthorityManagementComponent,
    AddRoleComponent,
    EditRoleComponent,
    ConfirmDeleteComponent,
    SystemDataComponent,
    ImportComponent,
    TemplateManagementComponent,
    AddtemplateComponent,
    DeleteTemplateComponent,
    CopyTemplateComponent,
    GatewayManagementComponent,
    AddGatewayComponent,
    ModifyGatewayComponent,
    DeleteGatewayComponent,
    BluetoothComponent,
    WifiComponent,
    SystemSettingsComponent,
    DeviceManagementComponent,
    OperationRecordComponent,
    AddStaffComponent,
    AddBatchComponent,
    DeleteStaffComponent,
    EditStaffComponent,
    AddPermissionComponent,
    DeletePermissionComponent,
    EditPermissionComponent,
    BatchPermissionComponent,
    ExportDataComponent,
    DeleteDataComponent,
    AddDataComponent,
    ReservationComponent,
    AddDeviceComponent,
    ImportBatchComponent,
    DeviceInfoComponent,
    ImportBsheetComponent,
    DeleteDeviceComponent,
    RefreshComponent,
    UpgradeComponent,
    ImportWarningComponent,
    ExportRecordComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
