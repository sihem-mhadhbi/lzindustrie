import { Component } from '@angular/core';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css'],
})
export class AddBatchComponent {
  file: any;
  getfile(event: any) {
    this.file = event.target.files[0];
  }
  submitData() {
    let formData = new FormData();
    formData.set('file', this.file);
  }
}
