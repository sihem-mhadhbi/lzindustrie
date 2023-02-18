import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-delete-template',
  templateUrl: './delete-template.component.html',
  styleUrls: ['./delete-template.component.css'],
})
export class DeleteTemplateComponent {
  constructor(private store: StoreserviceService) {}
  deleteT(id: any) {
    this.store.deleteTemplate(id).subscribe((response) => {
      console.log(response);
    });
  }
}
