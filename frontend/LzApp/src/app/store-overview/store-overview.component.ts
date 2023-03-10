import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObservableInput } from 'rxjs';
import { StoreserviceService } from '../services/storeservice.service';

@Component({
  selector: 'app-store-overview',
  templateUrl: './store-overview.component.html',
  styleUrls: ['./store-overview.component.css'],
})
export class StoreOverviewComponent implements OnInit {
  messageSuccess = '';
  data: any;

  search = '';
  id: any;
  constructor(private store: StoreserviceService) {
    this.store.storeoverview(this.id).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit(): void {}
}
