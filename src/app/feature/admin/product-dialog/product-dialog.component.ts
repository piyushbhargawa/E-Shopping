import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Data {
  id;
  brand;
  price;
  image: string[];
  category;
  subcategory;
  description: string[];
}

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  imgSrc: string = 'https://cdn0.iconfinder.com/data/icons/e-commerce-10/512/Add_to_Cart-512.png';
  data1: Data = {
    id: "",
    brand: "",
    price: "",
    image: [],
    category: "",
    subcategory: "",
    description: []
  };
  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (!data.update) {
      console.log('hi');
    }
    else {
      this.data1.id = data.id;
      this.data1.brand = data.brand;
      this.data1.price = data.price;
      this.data1.image = data.image;
      this.data1.category = data.category;
      this.data1.subcategory = data.subcategory;
      this.data1.description = data.description;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.data1.description.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  remove(description): void {
    const index = this.data1.description.indexOf(description);

    if (index >= 0) {
      this.data1.description.splice(index, 1);
    }
  }

  onFileSelected(event) {
    console.log(event);
    // this.selectedFile = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.data1.image.push(<any>event.target.result);
      }
    }
  }

  deleteImg(i) {
    this.data1.image = this.data1.image.filter(item => item !== i);
  }

}
