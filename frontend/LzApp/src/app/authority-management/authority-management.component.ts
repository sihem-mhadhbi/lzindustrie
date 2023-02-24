import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddRoleComponent } from '../add-role/add-role.component';
import { EditRoleComponent } from '../edit-role/edit-role.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { AddBatchComponent } from '../add-batch/add-batch.component';
import { DeleteStaffComponent } from '../delete-staff/delete-staff.component';
import { EditStaffComponent } from '../edit-staff/edit-staff.component';
import { AddPermissionComponent } from '../add-permission/add-permission.component';
import { DeletePermissionComponent } from '../delete-permission/delete-permission.component';
import { BatchPermissionComponent } from '../batch-permission/batch-permission.component';
import { EditPermissionComponent } from '../edit-permission/edit-permission.component';
import { StoreserviceService } from '../services/storeservice.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-authority-management',
  templateUrl: './authority-management.component.html',
  styleUrls: ['./authority-management.component.css'],
})
export class AuthorityManagementComponent {
  hide = true;
  messageSuccess = '';
  messageSuccesss = '';
  messageSuccessp = '';
  isChecked = true;

  dataArray1: any;
  dataArray2: any;
  dataArray3: any;
  dataT = {
    roleName: '',
    roleDescription: '',
    roleType: 0,
    role_id: '',
  };
  dataF = {
    username: '',
    name: '',
    mobile_phone: '',
    Email: '',
    remarks: '',
    status: 0,
    staff_id: '',
  };
  dataP = {
    username: '',
    permission_id: '',
  };

  constructor(
    private store: StoreserviceService,
    private dialog: MatDialog,
    private route: Router
  ) {
    this.store.getStaff().subscribe((data) => {
      this.dataArray1 = data;
    });
    this.store.getRole().subscribe((data) => {
      this.dataArray2 = data;
    });
    this.store.getPermission().subscribe((data) => {
      this.dataArray3 = data;
    });
  }
  delete(permission_id: any, i: number) {
    this.store.deletePermission(permission_id).subscribe((response) => {
      console.log(response);
      this.dataArray3.splice(i, 1);
    });
  }

  editnewRole(f: any) {
    let data = f.value;
    this.store.updateRole1(this.dataT.role_id, data).subscribe(
      (response) => {
        console.log(response);
        let indexId = this.dataArray2.findIndex(
          (obj: any) => obj.role_id == this.dataT.role_id
        );
        this.dataArray2[indexId].roleName = data.roleName;
        this.dataArray2[indexId].roleDescription = data.roleDescription;
        this.dataArray2[indexId].roleType = data.roleType;
        this.messageSuccess = `this role ${this.dataArray2[indexId].roleType} is updated`;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  editnewstaff(s: any) {
    let datastaff = s.value;
    this.store.updatestaff(this.dataF.staff_id, datastaff).subscribe(
      (response) => {
        console.log(response);
        let indexId = this.dataArray1.findIndex(
          (obj: any) => obj.staff_id == this.dataF.staff_id
        );
        this.dataArray1[indexId].username = datastaff.username;
        this.dataArray1[indexId].name = datastaff.name;
        this.dataArray1[indexId].mobile_phonee = datastaff.mobile_phone;
        this.dataArray1[indexId].Email = datastaff.Email;
        this.dataArray1[indexId].remarks = datastaff.remarks;
        this.dataArray1[indexId].status = datastaff.status;

        this.messageSuccess = `this staff ${this.dataArray1[indexId].name} is updated`;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  editnewspermission(p: any) {
    let datapermission = p.value;
    this.store
      .updatepermission(this.dataP.permission_id, datapermission)
      .subscribe(
        (response) => {
          console.log(response);
          let indexId = this.dataArray3.findIndex(
            (obj: any) => obj.permission_id == this.dataP.permission_id
          );
          this.dataArray3[indexId].username = datapermission.username;

          this.dataArray3[indexId].permission_id = datapermission.permission_id;

          this.messageSuccessp = `this permission ${this.dataArray3[indexId].username} is updated`;
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
  }

  deleteS(staff_id: any, i: number) {
    this.store.deleteStaff(staff_id).subscribe((response) => {
      console.log(response);
      this.dataArray1.splice(i, 1);
    });
  }
  deleteR(role_id: any, i: number) {
    this.store.deleteRole(role_id).subscribe((response) => {
      console.log(response);
      this.dataArray2.splice(i, 1);
    });
  }
  onSubmit() {
    console.log('submited !');
  }

  update() {
    this.dialog.open(EditRoleComponent, {
      width: '500px',
      height: '90%',
    });
  }
  getro(
    roleName: string,
    roleDescription: string,
    roleType: any,
    role_id: any
  ) {
    this.messageSuccess = '';
    this.dataT.roleName = roleName;
    this.dataT.roleDescription = roleDescription;
    this.dataT.roleType = roleType;
    this.dataT.role_id = role_id;
    console.log(this.dataT);
  }
  getst(
    username: any,
    name: string,
    mobile_phone: string,
    Email: string,
    remarks: string,
    status: any,
    staff_id: string
  ) {
    this.messageSuccesss = '';
    this.dataF.username = username;
    this.dataF.name = name;
    this.dataF.mobile_phone = mobile_phone;
    this.dataF.Email = Email;
    this.dataF.remarks = remarks;
    this.dataF.status = status;
    this.dataF.staff_id = staff_id;

    console.log(this.dataF);
  }

  getP(username: any, permission_id: any) {
    this.messageSuccessp = '';
    this.dataP.username = username;
    this.dataP.permission_id = permission_id;
  }
  addRole() {
    this.dialog.open(AddRoleComponent, {
      width: '500px',
      height: '90%',
    });
  }
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ConfirmDeleteComponent, {
      width: '500px',
      height: '200px',
      enterAnimationDuration,
      exitAnimationDuration,
      position: { top: '100px' },
    });
  }
  addStaff() {
    this.dialog.open(AddStaffComponent, {
      width: '500px',
      height: '90%',
    });
  }
  EditStaff() {
    this.dialog.open(EditStaffComponent, {
      width: '500px',
      height: '90%',
    });
  }
  DeleteStaff() {
    this.dialog.open(DeleteStaffComponent, {
      width: '500px',
      height: '200px',
      position: { top: '100px' },
    });
  }
  addBatch() {
    this.dialog.open(AddBatchComponent, {
      width: '500px',
      height: '40%',
    });
  }
  addPermission() {
    this.dialog.open(AddPermissionComponent, {
      width: '500px',
      height: '90%',
    });
  }
  editPermission() {
    this.dialog.open(EditPermissionComponent, {
      width: '500px',
      height: '90%',
    });
  }
  deletePermission() {
    this.dialog.open(DeletePermissionComponent, {
      width: '500px',
      height: '30%',
    });
  }
  batchConfiguration() {
    this.dialog.open(BatchPermissionComponent, {
      width: '500px',
      height: '40%',
    });
  }
  search: String = '';
}
/*
  }
 
*/
