import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css'],
})
export class AddRoleComponent {
  selectedTeam = '';
  checks = false;
  isChecked = true;
  messageSuccess: any;
  isChecked1 = true;
  data2 = {
    roleType: 0,
    role_permission: 0,
  };
  role = {
    role1: 'store_management',
    role2: 'system_data',
    role3: 'system_template',
    role4: 'system_record',
  };

  constructor(private store: StoreserviceService, private route: Router) {}
  addR(f: any) {
    let data = f.value;
    this.store.addNewRole(data).subscribe((data) => {
      this.messageSuccess = `this role is added successfully`;
    });
  }
  onSelected(value: string): void {
    this.selectedTeam = value;
  }
  bulk(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
      console.log(this.checks);
    } else {
      this.checks = false;
    }
  }
  onItemChange(value) {
    console.log(' Value is : ', value);
  }
  getSelectedValue(value: any) {
    console.log(value);
  }
}
