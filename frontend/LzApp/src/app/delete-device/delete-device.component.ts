import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-delete-device',
  templateUrl: './delete-device.component.html',
  styleUrls: ['./delete-device.component.css'],
})
export class DeleteDeviceComponent {
  constructor(private store: StoreserviceService, private route: Router) {}
  deleteD(id: any) {
    this.store.deleteDevice(id).subscribe((response) => {
      console.log(response);
      this.route.navigate(['/deviceManagement']);
    });
  }
}
