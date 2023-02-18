import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-delete-staff',
  templateUrl: './delete-staff.component.html',
  styleUrls: ['./delete-staff.component.css'],
})
export class DeleteStaffComponent {
  dataArray1: any;

  constructor(private store: StoreserviceService) {
    this.store.getStaff().subscribe((data) => {
      this.dataArray1 = data;
    });
  }

  deleteS(staff_id: any, i: number) {
    this.store.deleteStaff(staff_id).subscribe((response) => {
      console.log(response);
      this.dataArray1.slice(i, 1);
    });
  }
}
