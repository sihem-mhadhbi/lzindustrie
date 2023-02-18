import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.css']
})
export class EditPermissionComponent {
  permission = {
    Username : 'Madsson',
    role: 'Manager'
  }
}
