import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutPageComponent } from './checkout-page.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';

const routes: Routes = [{
  path: '', component: CheckoutPageComponent,
  children: [
    {
      path: 'shippingAddress',
      component: ShippingAddressComponent
    },
    {
      path: 'payment',
      component: PaymentComponent
    }
  ],
},
{
  path: 'confirm',
  component: ConfirmationPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutPageRoutingModule { }
