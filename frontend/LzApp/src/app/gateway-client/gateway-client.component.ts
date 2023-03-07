import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGatewayComponent } from '../add-gateway/add-gateway.component';
import { BluetoothComponent } from '../bluetooth/bluetooth.component';
import { DeleteGatewayComponent } from '../delete-gateway/delete-gateway.component';
import { ModifyGatewayComponent } from '../modify-gateway/modify-gateway.component';
import { StoreserviceService } from '../services/storeservice.service';
import { WifiComponent } from '../wifi/wifi.component';

@Component({
  selector: 'app-gateway-client',
  templateUrl: './gateway-client.component.html',
  styleUrls: ['./gateway-client.component.css']
})
export class GatewayClientComponent {
  dataP = {
    macName: '',
    macAddress: '',
    id: 0,
  };
  messageSuccess = '';
  data2: any;
  constructor(private store: StoreserviceService, private dialog: MatDialog) {
    this.store.getgateway().subscribe((data) => {
      this.data2 = data;
      console.log(this.data2);
    });
  }
  getro(macName: string, macAddress: string, id: any) {
    this.dataP.macName = macName;
    this.dataP.macAddress = macAddress;
    this.dataP.id = id;
    console.log(this.dataP);
  }
  editnewgateway(f: any) {
    let datagateway = f.value;
    this.store.updategateway(this.dataP.id, datagateway).subscribe(
      (response) => {
        console.log(response);
        let indexId = this.data2.findIndex(
          (obj: any) => obj.id == this.dataP.id
        );
        this.data2[indexId].macName = datagateway.macName;

        this.data2[indexId].macAddress = datagateway.macAddress;

        this.messageSuccess = `this gateway ${this.data2[indexId].macName} is updated`;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  addGetway() {
    this.dialog.open(AddGatewayComponent, {
      width: '500px',
      height: '60%',
    });
  }
  modifier() {
    this.dialog.open(ModifyGatewayComponent, {
      width: '500px',
      height: '60%',
    });
  }
  deleteG() {
    this.dialog.open(DeleteGatewayComponent, {
      width: '500px',
      height: '30%',
    });
  }
  deletegatewey(id: any, i: number) {
    this.store.deleteGateway(id).subscribe((response) => {
      console.log(response);
      this.data2.splice(i, 1);
    });
  }
  bluetooth() {
    this.dialog.open(BluetoothComponent, {
      width: '500px',
      height: '40%',
    });
  }
  wifi() {
    this.dialog.open(WifiComponent, {
      width: '500px',
      height: '40%',
    });
  }
}
