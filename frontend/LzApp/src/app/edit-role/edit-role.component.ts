import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css'],
})
export class EditRoleComponent {
  id = '';
  dataA: any;
  constructor(
    private route: ActivatedRoute,
    private store: StoreserviceService
  ) {
    this.route.params.subscribe((params) => (this.id = params['id']));
  }
}
