import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { MatDialog } from '@angular/material/dialog';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';
import { AddressDetailsService } from '../address-details.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  address: any = [];
  chooseAddress: boolean;
  choosenAddress;
  constructor(private service: CommonService, private dialog: MatDialog, private sendService: AddressDetailsService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.address().subscribe(data => {
      this.address = data;
      this.address = this.address.address;
    });
  }

  add() {
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      data: {
        update: false
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(!result);
      if (result) {
        this.address.push(result);
        const data = {
          address: this.address
        };
        this.service.addAddress(data).subscribe(data => {
          console.log(data);
          this.load();
        });
      }
    });
  }

  update(address) {
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      data: {
        name: address.name,
        mobile: address.mobile,
        pincode: address.pincode,
        address: address.Address,
        town: address.town,
        state: address.state,
        update: true
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        var index = this.address.indexOf(address);
        this.address[index] = result;
        const data = {
          address: this.address
        };
        this.service.updateAddress(data).subscribe(data => {
          console.log(data);
          this.load();
        });
      }
    });
  }

  deleteAddress(address) {
    this.address = this.address.filter(item => item !== address)
    const data = {
      address: this.address
    };
    this.service.deleteAddress(data).subscribe(data => {
      console.log(data);
      this.load();
    });
  }

  Address(address) {
    this.chooseAddress = true;
    this.choosenAddress = address;
    this.sendService.sendMessage(this.choosenAddress);
  }
}
