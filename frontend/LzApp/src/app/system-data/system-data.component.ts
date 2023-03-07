import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDataComponent } from '../add-data/add-data.component';
import { AddRoleComponent } from '../add-role/add-role.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { DeleteDataComponent } from '../delete-data/delete-data.component';
import { EditRoleComponent } from '../edit-role/edit-role.component';
import { ExportDataComponent } from '../export-data/export-data.component';
import { ImportComponent } from '../import/import.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-system-data',
  templateUrl: './system-data.component.html',
  styleUrls: ['./system-data.component.css'],
})
export class SystemDataComponent {
  data2: any;

  dataPR = {
    name: '',
    price_per_unit: '',
    SN: '',
    number: '',
    status: '',
    barcode: '',
    product_id: '',
  };
  messageSuccess = '';
  constructor(private store: StoreserviceService, public dialog: MatDialog) {
    this.store.getproducts().subscribe((data) => {
      this.data2 = data;
      console.log(this.data2);
    });
  }
  getnewdata(
    name: string,
    price_per_unit: string,
    SN: any,
    number: any,
    status: string,
    barcode: any,
    product_id: any
  ) {
    this.messageSuccess = '';
    this.dataPR.name = name;
    this.dataPR.price_per_unit = price_per_unit;
    this.dataPR.SN = SN;
    this.dataPR.number = number;
    this.dataPR.status = status;
    this.dataPR.barcode = barcode;
    this.dataPR.product_id = product_id;

    console.log(this.dataPR);
  }

  editnewdata(f: any) {
    let dataproduct = f.value;
    this.store.updateData(this.dataPR.product_id, dataproduct).subscribe(
      (response) => {
        console.log(response);
        let indexId = this.data2.findIndex(
          (obj: any) => obj.product_id == this.dataPR.product_id
        );
        this.data2[indexId].name = dataproduct.name;

        this.data2[indexId].price_per_unit = dataproduct.price_per_unit;
        this.data2[indexId].SN = dataproduct.SN;
        this.data2[indexId].number = dataproduct.number;
        this.data2[indexId].status = dataproduct.status;
        this.data2[indexId].barcode = dataproduct.barcode;

        this.messageSuccess = `this permission ${this.data2[indexId].name} is updated`;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  deleteDa(id: any, i: number) {
    this.store.deleteData(id).subscribe((response) => {
      console.log(response);
      this.data2.splice(i, 1);
    });
  }
  add(f: any) {
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
  update() {
    this.dialog.open(EditRoleComponent, {
      width: '500px',
      height: '90%',
    });
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
  openDialogImp() {
    this.dialog.open(ImportComponent, {
      width: '500px',
      height: '35%',
    });
  }
  exportData() {
    this.dialog.open(ExportDataComponent, {
      width: '500px',
      height: '35%',
    });
  }
  deleteData() {
    this.dialog.open(DeleteDataComponent, {
      width: '500px',
      height: '35%',
    });
  }

  deleteD(product_id: any, i: number) {
    this.store.deleteData(product_id).subscribe((response) => {
      console.log(response);
      this.data2.splice(i, 1);
    });
  }

  $;
  addData() {
    this.dialog.open(AddDataComponent, {
      width: '500px',
      height: '60%',
    });
  }

  reservation() {
    this.dialog.open(ReservationComponent, {
      width: '500px',
      height: '70%',
    });
  }
  search: String = '';
}
