import { Component, OnInit, HostListener } from '@angular/core';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  showSidebar: boolean;
  selector: string = '.main';
  i=7;
  // elements = [1];
  // count = 1;
  constructor(private dialog: MatDialog, private service: AdminService,  private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    let data = localStorage.getItem('category');
    this.service.loadProduct(this.i, data).subscribe(data => {
      this.products = data;
    });
  }

  toggleNav() {
    this.showSidebar = !this.showSidebar;
  }

  onScroll() {
    this.i=this.i+4;
    this.loadProduct();
  }

  add() {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: {
        update: false
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(!result);
      if (result)
        this.service.addProduct(result).subscribe(data => {
          console.log(data);
        });
      this.loadProduct();
      this.snack.open('Product Added Successfully', '', {
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: ['mat-toolbar', 'mat-primary']
      });
    });
  }

  update(product) {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: {
        id: product.id,
        brand: product.brand,
        price: product.price,
        image: product.image,
        category: product.category,
        subcategory: product.subcategory,
        description: product.description,
        update: true
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result)
        this.service.updateProduct(result.id, result).subscribe(data => {
          console.log(data);
          this.loadProduct();
          this.snack.open('Product Updated Successfully', '', {
            duration: 2000,
            verticalPosition: 'bottom',
            panelClass: ['mat-toolbar', 'mat-primary']
          });
        });
    });
  }

  delete(data) {
    this.service.deleteProduct(data.id).subscribe(data => {
      this.snack.open('Product deleted Successfully', '', {
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      this.loadProduct();
    });
  }
}
