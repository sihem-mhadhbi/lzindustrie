import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.css'],
})
export class AddGatewayComponent {
  messageSuccess: any;
  constructor(private store: StoreserviceService, private route: Router) {}
  addG(f: any) {
    let data = f.value;
    console.log(data);
    this.store.addgateway(data).subscribe((data) => {
      this.route.navigate(['/Gatewaymanagement']);
      this.messageSuccess = `this gateway is added successfully`;
    });
  }
}
