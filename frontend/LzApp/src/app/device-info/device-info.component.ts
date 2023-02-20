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

  dataT = {
    mac_address: '',
    product_id: 0,
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
  getde(mac_address: string, product_id: any) {
    this.dataT.mac_address = mac_address;
    this.dataT.product_id = product_id;
    console.log(this.dataT);
    this.messageSuccess = '';
  }
  editnewdevice(f: any) {
    let datadevice = f.value;
    this.store.updateDevice(this.dataT.product_id, datadevice).subscribe(
      (response) => {
        console.log(response);
        let indexId = this.dataobject.findIndex(
          (obj: any) => obj.product_id == this.dataT.product_id
        );
        this.dataobject[indexId].mac_address = datadevice.mac_address;

        this.messageSuccess = `this permission ${this.dataobject[indexId].product_id} is updated`;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
