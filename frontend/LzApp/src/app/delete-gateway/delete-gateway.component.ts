import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-delete-gateway',
  templateUrl: './delete-gateway.component.html',
  styleUrls: ['./delete-gateway.component.css'],
})
export class DeleteGatewayComponent {
  constructor(private store: StoreserviceService) {}
  deletegatewey(id: any) {
    this.store.deleteGateway(id).subscribe((response) => {
      console.log(response);
    });
  }
}
