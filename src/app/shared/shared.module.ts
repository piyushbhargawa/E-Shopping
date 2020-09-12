import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { FilterComponent } from './filter/filter.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';


@NgModule({
  declarations: [SharedComponent, FilterComponent, PreLoaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [
    FilterComponent,
    PreLoaderComponent
  ]
})
export class SharedModule { }
