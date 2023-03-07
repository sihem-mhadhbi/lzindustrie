import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent {
  hide = true;
  messageSuccess: any;

  constructor(private store: StoreserviceService, private route: Router) {}
  add(f: any) {
    let data = f.value;
    console.log(data);
    this.store.addStaff(data).subscribe((data) => {
      this.route.navigate(['/AuthorityManagement']);
      this.messageSuccess = `this staff is added successfully`;
    });
  }
}
