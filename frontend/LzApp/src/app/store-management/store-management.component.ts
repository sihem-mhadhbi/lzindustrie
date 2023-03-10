import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { AddStoreComponent } from '../add-store/add-store.component';

import { StoreserviceService } from '../services/storeservice.service';
import { UpdateStoreComponent } from '../update-store/update-store.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.css'],
})
export class StoreManagementComponent implements OnInit, OnDestroy {
  dataArray: any;

  dataT = {
    store_no: 0,
    storeName: '',
    storeAddress: '',
    storeImage: '',
    id: '',
  };
  messageSuccess = '';

  constructor(
    private store: StoreserviceService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.store.getAllStore().subscribe((data) => {
      this.dataArray = data;
    });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {}
  openDialog() {
    this.dialog.open(AddStoreComponent, {
      width: '500px',
      height: '75%',
    });
  }

  getst(
    store_no: number,
    storeName: string,
    storeAddress: any,
    id: any,
    storeImage: any
  ) {
    this.messageSuccess = '';
    this.dataT.store_no = store_no;
    this.dataT.storeName = storeName;
    this.dataT.storeAddress = storeAddress;
    this.dataT.storeImage = storeImage;

    this.dataT.id = id;

    console.log(this.dataT);
  }
  editnewstore(f: any) {
    let datastore = f.value;
    this.store.updateStore(this.dataT.id, datastore).subscribe(
      (response) => {
        console.log(response);
        let indexId = this.dataArray.findIndex(
          (obj: any) => obj.id == this.dataT.id
        );
        this.dataArray[indexId].store_no = datastore.store_no;

        this.dataArray[indexId].storeName = datastore.storeName;
        this.dataArray[indexId].storeAddress = datastore.storeAddress;
        this.dataArray[indexId].storeImage = datastore.storeImage;

        this.messageSuccess = `this permission ${this.dataArray[indexId].storeName} is updated`;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  update() {
    this.dialog.open(UpdateStoreComponent, {
      width: '500px',
      height: '90%',
    });
  }
  search = '';
}
