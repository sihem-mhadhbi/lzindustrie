import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private store: StoreserviceService, private route: Router) {
    if (this.store.loggedIn() == true) {
      console.log('connected');
    } else this.route.navigate(['/authentification/login']);
  }
}
