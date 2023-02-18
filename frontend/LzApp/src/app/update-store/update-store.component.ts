import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css'],
})
export class UpdateStoreComponent {
  newStore = {
    store_no: '2',
    storeName: 'amani',
    storeImage: 'blob',
    storeAddress: 'tunis',
    id: '468',
  };
  newData: any;
  constructor(private store: StoreserviceService) {}
}
