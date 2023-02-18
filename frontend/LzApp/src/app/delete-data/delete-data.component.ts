import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css'],
})
export class DeleteDataComponent {
  constructor(private store: StoreserviceService) {}

  deleteD(product_id: any) {
    this.store.deleteData(product_id).subscribe((response) => {
      console.log(response);
    });
  }
}
