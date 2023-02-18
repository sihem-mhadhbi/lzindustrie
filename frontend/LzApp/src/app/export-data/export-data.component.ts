import { Component } from '@angular/core';

@Component({
  selector: 'app-export-data',
  templateUrl: './export-data.component.html',
  styleUrls: ['./export-data.component.css']
})
export class ExportDataComponent {
  file : any;
  getfile(event: any){
    this.file = event.target.files[0];
  }
  submitData(){
    let formData = new FormData();
    formData.set("file", this.file)
  }
}
