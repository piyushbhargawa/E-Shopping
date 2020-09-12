import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPayPalModule } from 'ngx-paypal';

import { CheckoutPageRoutingModule } from './checkout-page-routing.module';
import { CheckoutPageComponent } from './checkout-page.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressDialogComponent } from './address-dialog/address-dialog.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';


@NgModule({
  declarations: [CheckoutPageComponent, ShippingAddressComponent, PaymentComponent, AddressDialogComponent, ConfirmationPageComponent],
  imports: [
    CommonModule,
    CheckoutPageRoutingModule,
    MatProgressBarModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ]
})
export class CheckoutPageModule { }
