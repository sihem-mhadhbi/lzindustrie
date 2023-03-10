import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  dataRecieive: any;
  constructor(private store: StoreserviceService, private routes: Router) {}

  loginadmin(f: any) {
    let data = f.value;

    this.store.login(data).subscribe(
      (response) => {
        this.dataRecieive = response;
        this.store.isSavetoken(this.dataRecieive.token);

        this.routes.navigate(['DashboardClient/store']);
      },

      (err) => {
        console.log(err);
        this.routes.navigate(['authentification/login']);
      }
    );
  }
}
