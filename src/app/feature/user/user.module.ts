import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParticularProductComponent } from './particular-product/particular-product.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [UserComponent, ProductPageComponent, ParticularProductComponent, CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    PinchZoomModule,
    // BrowserAnimationsModule,
    MatSliderModule,
    NgxImageZoomModule,
    MatChipsModule,
    UserRoutingModule,
    NgbModule,
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTreeModule
  ]
})
export class UserModule { }
