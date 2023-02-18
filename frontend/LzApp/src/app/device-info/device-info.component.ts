import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpgradeComponent } from '../upgrade/upgrade.component';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent {
  constructor(public dialog:MatDialog){}
  upgrade(){
    this.dialog.open(UpgradeComponent,{
      width: '500px',
      height:'60%', 
    })
  }
}
