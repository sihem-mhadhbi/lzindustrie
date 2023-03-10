import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddtemplateComponent } from '../addtemplate/addtemplate.component';
import { CopyTemplateComponent } from '../copy-template/copy-template.component';
import { DeleteTemplateComponent } from '../delete-template/delete-template.component';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-template-client',
  templateUrl: './template-client.component.html',
  styleUrls: ['./template-client.component.css'],
})
export class TemplateClientComponent {
  search = '';
  isChecked = true;

  constructor(public dialog: MatDialog) {}

  add() {
    this.dialog.open(AddtemplateComponent, {
      width: '500px',
      height: '90%',
    });
  }

  supp() {
    this.dialog.open(DeleteTemplateComponent, {
      width: '500px',
      height: '35%',
      position: { top: '100px' },
    });
  }
  copy() {
    this.dialog.open(CopyTemplateComponent, {
      width: '500px',
      height: '90%',
    });
  }
}
