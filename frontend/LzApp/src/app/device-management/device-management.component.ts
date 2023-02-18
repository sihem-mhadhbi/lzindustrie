import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddDeviceComponent } from '../add-device/add-device.component';
import { DeleteDeviceComponent } from '../delete-device/delete-device.component';
import { DeviceInfoComponent } from '../device-info/device-info.component';
import { ImportBatchComponent } from '../import-batch/import-batch.component';
import { ImportWarningComponent } from '../import-warning/import-warning.component';
import { RefreshComponent } from '../refresh/refresh.component';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.css'],
})
export class DeviceManagementComponent {
  search = '';
  data2: any;
  constructor(
    private store: StoreserviceService,
    private dialog: MatDialog,
    private route: Router
  ) {
    this.store.getDevices().subscribe((data) => {
      this.data2 = data;
    });
  }
  addDevice() {
    this.dialog.open(AddDeviceComponent, {
      width: '500px',
      height: '60%',
    });
  }
  batchImport() {
    this.dialog.open(ImportBatchComponent, {
      width: '500px',
      height: '40%',
    });
  }
  deviceInfo() {
    this.dialog.open(DeviceInfoComponent, {
      width: '500px',
      height: '90%',
      position: { top: '50px', right: '10px' },
    });
  }
  batchBinding() {
    this.dialog.open(ImportBatchComponent, {
      width: '500px',
      height: '40%',
    });
  }
  deleteDevice() {
    this.dialog.open(DeleteDeviceComponent, {
      width: '500px',
      height: '30%',
    });
  }
  deleteDa(id: any, i: number) {
    this.store.deleteDevice(id).subscribe((response) => {
      console.log(response);
      this.data2.splice(i, 1);
    });
  }
  refresh() {
    this.dialog.open(RefreshComponent, {
      width: '500px',
      height: '30%',
    });
  }
  batchWarning() {
    this.dialog.open(ImportWarningComponent, {
      width: '500px',
      height: '40%',
    });
  }
  allComplete: boolean = false;
}
