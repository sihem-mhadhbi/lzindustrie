import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css'],
})
export class AddStoreComponent {
  messageSuccess: any;
  constructor(private store: StoreserviceService, private route: Router) {}
  add(f: any) {
    let data = f.value;
    console.log(data);
    this.store.addnewStore(data).subscribe(
      (response) => {
        console.log(response);
        this.route.navigate(['/storeManagement']);
        this.messageSuccess = `this store is added successfully`;
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  /*onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{}
    }
  }*/
}
