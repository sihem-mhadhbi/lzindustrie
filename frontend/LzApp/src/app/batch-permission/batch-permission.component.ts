import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-permission',
  templateUrl: './batch-permission.component.html',
  styleUrls: ['./batch-permission.component.css']
})
export class BatchPermissionComponent {
  file : any;
  getfile(event: any){
    this.file = event.target.files[0];
  }
  submitData(){
    let formData = new FormData();
    formData.set("file", this.file)
  }
}
