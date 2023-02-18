import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent {
  constructor(private store: StoreserviceService) {}
  deleteR(role_id: any) {
    this.store.deleteRole(role_id).subscribe((response) => {
      console.log(response);
    });
  }
}
