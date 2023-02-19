import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css'],
})
export class AddRoleComponent {
  constructor(private store: StoreserviceService, private route: Router) {}
  addR(f: any) {
    let data = f.value;
    console.log(data);
    this.store.addNewRole(data).subscribe((data) => {
      this.route.navigate(['/AuthorityManagement']);
    });
  }
  onItemChange(value) {
    console.log(' Value is : ', value);
  }
}
