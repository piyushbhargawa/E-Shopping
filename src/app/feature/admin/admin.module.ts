import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { ChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';
import { TmNgOdometerModule } from 'tm-ng-odometer';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { Ng2OdometerModule } from 'ng2-odometer';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { CategoryWiseSalesComponent } from './dashboard/category-wise-sales/category-wise-sales.component';
import { TotalProductsCategoryWiseComponent } from './dashboard/total-products-category-wise/total-products-category-wise.component';
import { TotalRevenueComponent } from './dashboard/total-revenue/total-revenue.component';
import { TotalUserComponent } from './dashboard/total-user/total-user.component';
import { BestProductsComponent } from './dashboard/best-products/best-products.component';
import { ExpandingMenuComponent } from './expanding-menu/expanding-menu.component';
import { TotalOrdersComponent } from './dashboard/total-orders/total-orders.component';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, ProductsComponent, ProductDialogComponent, UserProfilesComponent, CategoryWiseSalesComponent, TotalProductsCategoryWiseComponent, TotalRevenueComponent, TotalUserComponent, BestProductsComponent, ExpandingMenuComponent, TotalOrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InfiniteScrollModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    ChartsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    TmNgOdometerModule,
    ReactiveFormsModule,
    MatChipsModule,
    // Ng2OdometerModule.forRoot()
  ],
  exports: [
    DashboardComponent
  ]
})
export class AdminModule { }
