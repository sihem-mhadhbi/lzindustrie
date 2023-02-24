import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StoreserviceService } from '../services/storeservice.service';
import { UpgradeComponent } from '../upgrade/upgrade.component';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css'],
})
export class DeviceInfoComponent {
  id = '';
  dataobject: any;
  isChecked = true;
  datadevice = {
    mac_address: '',
    product_id: '',
  };

  messageSuccess = '';

  messageErreur = '';
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private store: StoreserviceService
  ) {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.store.getOneDevice(this.id).subscribe((response) => {
      (this.dataobject = response), console.log(this.dataobject);

      (err: HttpErrorResponse) => (this.messageErreur = err.message);
    });
  }
  upgrade() {
    this.dialog.open(UpgradeComponent, {
      width: '500px',
      height: '60%',
    });
  }
  detde(mac_address: string, product_id: any) {
    this.datadevice.mac_address = mac_address;

    this.datadevice.product_id = product_id;
    console.log(this.datadevice);
  }
  updatenewdevice(f: any) {
    let data = f.value;
    this.store.updateDevice(this.datadevice.product_id, data).subscribe(
      (response) => {
        let indexId = this.dataobject.findIndex(
          (obj: any) => obj.product_id == this.datadevice.product_id
        );
        this.dataobject[indexId].mac_address = data.mac_address;

        this.messageSuccess = `this device ${this.dataobject[indexId].mac_address} is updated`;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
