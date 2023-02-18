import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExportRecordComponent } from '../export-record/export-record.component';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-operation-record',
  templateUrl: './operation-record.component.html',
  styleUrls: ['./operation-record.component.css'],
})
export class OperationRecordComponent {
  data2: any;
  search = '';
  constructor(private store: StoreserviceService, private dialog: MatDialog) {
    this.store.getOperationRecord().subscribe((data) => {
      this.data2 = data;
    });
  }
  export() {
    this.dialog.open(ExportRecordComponent, {
      width: '500px',
      height: '40%',
    });
  }
}
