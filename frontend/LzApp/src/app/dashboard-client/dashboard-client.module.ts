import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardClientRoutingModule } from './dashboard-client-routing.module';
import { DashboardClientComponent } from './dashboard-client.component';
import { NavClientComponent } from '../nav-client/nav-client.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreOverviewComponent } from '../store-overview/store-overview.component';
import { TopbarClientComponent } from '../topbar-client/topbar-client.component';


@NgModule({
  declarations: [
    DashboardClientComponent,
    NavClientComponent,
    StoreOverviewComponent,
    TopbarClientComponent
  ],
  imports: [
    CommonModule,
    DashboardClientRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardClientModule { }
