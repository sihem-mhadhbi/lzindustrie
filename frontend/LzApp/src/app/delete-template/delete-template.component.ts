import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-delete-template',
  templateUrl: './delete-template.component.html',
  styleUrls: ['./delete-template.component.css'],
})
export class DeleteTemplateComponent {
  dataArray1: any;
  constructor(private store: StoreserviceService) {
    this.store.getTemplate().subscribe((data) => {
      this.dataArray1 = data;
    });
  }

  deleteT(id: any, i: number) {
    this.store.deleteTemplate(id).subscribe((response) => {
      console.log(response);
      this.dataArray1.slice(i, 1);
    });
  }
}
