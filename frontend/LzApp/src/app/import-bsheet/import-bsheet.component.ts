import { Component } from '@angular/core';

@Component({
  selector: 'app-import-bsheet',
  templateUrl: './import-bsheet.component.html',
  styleUrls: ['./import-bsheet.component.css']
})
export class ImportBsheetComponent {
  file : any;
  getfile(event: any){
    this.file = event.target.files[0];
  }
  submitData(){
    let formData = new FormData();
    formData.set("file", this.file)
  }
}
