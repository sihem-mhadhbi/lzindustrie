import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddtemplateComponent } from '../addtemplate/addtemplate.component';
import { CopyTemplateComponent } from '../copy-template/copy-template.component';
import { DeleteTemplateComponent } from '../delete-template/delete-template.component';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-template-management',
  templateUrl: './template-management.component.html',
  styleUrls: ['./template-management.component.css'],
})
export class TemplateManagementComponent {
  search = '';
  constructor(private store: StoreserviceService, public dialog: MatDialog) {}
  add() {
    this.dialog.open(AddtemplateComponent, {
      width: '500px',
      height: '90%',
    });
  }
  deleteT(id: any) {
    this.store.deleteTemplate(id).subscribe((response) => {
      console.log(response);
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
