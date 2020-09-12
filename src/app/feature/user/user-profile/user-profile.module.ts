// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [UserProfileComponent, ProfileViewComponent, ChangePasswordComponent, OrderComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    // BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatCardModule,
    // BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class UserProfileModule { }
