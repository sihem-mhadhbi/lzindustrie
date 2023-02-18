import { Component } from '@angular/core';

@Component({
  selector: 'app-export-record',
  templateUrl: './export-record.component.html',
  styleUrls: ['./export-record.component.css']
})
export class ExportRecordComponent {
  file : any;
  getfile(event: any){
    this.file = event.target.files[0];
  }
  submitData(){
    let formData = new FormData();
    formData.set("file", this.file)
  }
}
