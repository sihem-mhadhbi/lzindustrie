import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';
import { StoreManagementComponent } from '../store-management/store-management.component';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css'],
})
export class UpgradeComponent {
  data2: any;
  dataT = {
    sn: 0,
    mac_address: '',
    id: 0,
  };
  messageSuccess = '';

  constructor(private store: StoreserviceService) {
    this.store.getDevices().subscribe((data) => {
      this.data2 = data;
    });
  }
}
