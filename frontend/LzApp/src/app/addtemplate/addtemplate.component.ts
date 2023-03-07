import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-addtemplate',
  templateUrl: './addtemplate.component.html',
  styleUrls: ['./addtemplate.component.css'],
})
export class AddtemplateComponent {
  onSubmit() {
    console.log('submited !');
  }
  messageSuccess: any;
  constructor(private store: StoreserviceService) {}
  addT(f: any) {
    let data = f.value;
    console.log(data);
    this.store.addTemplate(data).subscribe(
      (response) => {
        console.log(response);
        this.messageSuccess = `this store is added successfully`;
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
