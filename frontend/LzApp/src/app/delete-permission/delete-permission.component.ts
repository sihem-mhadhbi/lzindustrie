import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-delete-permission',
  templateUrl: './delete-permission.component.html',
  styleUrls: ['./delete-permission.component.css'],
})
export class DeletePermissionComponent {
  constructor(private store: StoreserviceService) {}

  delete(permission_id: any) {
    this.store.deletePermission(permission_id).subscribe((response) => {
      console.log(response);
    });
  }
}
