import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-copy-template',
  templateUrl: './copy-template.component.html',
  styleUrls: ['./copy-template.component.css'],
})
export class CopyTemplateComponent {
  id = '';
  dataobject: any;
  messageErreur = '';

  constructor(
    private store: StoreserviceService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.store.getOneTemplate(this.id).subscribe((response) => {
      (this.dataobject = response), console.log(this.dataobject);

      (err: HttpErrorResponse) => (this.messageErreur = err.message);
    });
  }
}
