import { Component } from '@angular/core';
import { StoreserviceService } from '../services/storeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.css'],
})
export class AddPermissionComponent {
  constructor(private store: StoreserviceService, private route: Router) {}
  addP(f: any) {
    let data = f.value;
    console.log(data);
    this.store.addPermission(data).subscribe((data) => {
      this.route.navigate(['/AuthorityManagement']);
    });
  }
}
