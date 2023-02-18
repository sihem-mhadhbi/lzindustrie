import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.css'],
})
export class SystemSettingsComponent {
  data1: any;
  constructor(private store: StoreserviceService) {
    this.store.getsetting().subscribe((data) => {
      this.data1 = data;
    });
  }
}
