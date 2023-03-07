import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-store-overview',
  templateUrl: './store-overview.component.html',
  styleUrls: ['./store-overview.component.css']
})
export class StoreOverviewComponent {
dataArray: any;
profil = {
  store_no: '',
  storeName: '',
  storeImage: '',
  storeAddress: '',
};
dataT = {
  store_no: 0,
  storeName: '',
  storeAddress: '',
  storeImage: '',
  id: '',
};
messageSuccess = '';

search = '';
  store: any;
getst(store_no: number, storeName: string, storeAddress: any, id: any) {
  this.messageSuccess = '';
  this.dataT.store_no = store_no;
  this.dataT.storeName = storeName;
  this.dataT.storeAddress = storeAddress;

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
      this.dataArray[indexId].storeName = datastore.storeName;
      this.dataArray[indexId].storeAddress = datastore.storeAddress;

      this.messageSuccess = `this permission ${this.dataArray[indexId].storeName} is updated`;
    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
    }
  );
}
}
