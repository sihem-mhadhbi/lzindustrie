import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent {
  constructor(private store: StoreserviceService, private route: Router) {}

  addD(f: any) {
    let data = f.value;
    console.log(data);
    this.store.addNewData(data).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
