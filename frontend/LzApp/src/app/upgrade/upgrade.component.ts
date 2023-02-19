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
  getde(sn: number, mac_address: string, id: any) {
    this.messageSuccess = '';
    this.dataT.sn = sn;

    this.dataT.mac_address = mac_address;

    console.log(this.dataT);
  }
  editnewdevice(f: any) {
    let datadevice = f.value;
    this.store.updateDevice(this.dataT.id, datadevice).subscribe(
      (response) => {
        console.log(response);
        let indexId = this.data2.findIndex(
          (obj: any) => obj.id == this.dataT.id
        );
        this.data2[indexId].sn = datadevice.sn;

        this.data2[indexId].mac_address = datadevice.mac_address;

        this.messageSuccess = `this permission ${this.data2[indexId].sn} is updated`;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
