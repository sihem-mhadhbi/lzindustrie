import { Component } from '@angular/core';

@Component({
  selector: 'app-import-batch',
  templateUrl: './import-batch.component.html',
  styleUrls: ['./import-batch.component.css']
})
export class ImportBatchComponent {
  file : any;
  getfile(event: any){
    this.file = event.target.files[0];
  }
  submitData(){
    let formData = new FormData();
    formData.set("file", this.file)
  }
}
