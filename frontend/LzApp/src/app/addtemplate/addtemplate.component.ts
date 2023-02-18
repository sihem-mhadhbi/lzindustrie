import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-addtemplate',
  templateUrl: './addtemplate.component.html',
  styleUrls: ['./addtemplate.component.css'],
})
export class AddtemplateComponent {
  newTemplate = {
    templateName: 'sihemm',
    screenSize: 'Z',
    selectableColor: 'green',
    screenOrientation: 'gauche',
  };
  dataob: Subscription;
  dataArray: any;
  onSubmit() {
    console.log('submited !');
  }
  constructor(private store: StoreserviceService) {
    this.dataob = this.store.addTemplate(this.newTemplate).subscribe((data) => {
      this.dataArray = data;
      console.log(this.dataob);
    });
  }
}
