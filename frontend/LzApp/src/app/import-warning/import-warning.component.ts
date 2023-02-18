import { Component } from '@angular/core';

@Component({
  selector: 'app-import-warning',
  templateUrl: './import-warning.component.html',
  styleUrls: ['./import-warning.component.css']
})
export class ImportWarningComponent {
  file : any;
  getfile(event: any){
    this.file = event.target.files[0];
  }
  submitData(){
    let formData = new FormData();
    formData.set("file", this.file)
  }
}
