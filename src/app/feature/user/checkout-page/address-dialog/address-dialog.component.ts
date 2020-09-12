import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductDialogComponent } from 'src/app/feature/admin/product-dialog/product-dialog.component';

export interface Data {
  name;
  mobile;
  pincode;
  Address;
  town;
  state;
}

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css']
})
export class AddressDialogComponent implements OnInit {
  data1: Data = {
    name:"",
    mobile:"",
    pincode:"",
    Address:"",
    town:"",
    state:""
  };

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (!data.update) {
      console.log('hi');
    }
    else {
      this.data1.name = data.name;
      this.data1.mobile = data.mobile;
      this.data1.pincode = data.pincode;
      this.data1.Address = data.address;
      this.data1.town = data.town;
      this.data1.state = data.state;
    }
  }

  ngOnInit(): void {
  }

}
