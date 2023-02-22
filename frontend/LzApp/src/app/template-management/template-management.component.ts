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
  isChecked = true;
  dataArray: any;
  dattemplate = {
    templateName: '',
    screenSize: '',
    selectableColor: 0,
    id: 0,
  };
  constructor(private store: StoreserviceService, public dialog: MatDialog) {
    this.store.getTemplate().subscribe((data) => {
      this.dataArray = data;
    });
  }

  add() {
    this.dialog.open(AddtemplateComponent, {
      width: '500px',
      height: '90%',
    });
  }
  getCopy(templateName: string, screenSize: any, id: any) {
    this.dattemplate.templateName = templateName;
    this.dattemplate.screenSize = screenSize;
    this.dattemplate.id = id;
    console.log(this.dattemplate);
  }
  deleteT(id: any, i: number) {
    this.store.deleteTemplate(id).subscribe((response) => {
      console.log(response);
      this.dataArray.splice(i, 1);
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
