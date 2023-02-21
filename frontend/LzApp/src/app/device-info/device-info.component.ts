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
}
