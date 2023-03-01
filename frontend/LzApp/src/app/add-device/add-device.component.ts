import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css'],
})
export class AddDeviceComponent {
  messageSuccess: any;
  constructor(private store: StoreserviceService, private route: Router) {}
  addD(f: any) {
    let data = f.value;
    console.log(data);
    this.store.addDevice(data).subscribe((data) => {
      this.route.navigate(['/DeviceManagement']);
      this.messageSuccess = `this device is added successfully`;
    });
  }
}
