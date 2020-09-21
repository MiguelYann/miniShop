import { ProductService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string;
  _filterText: string;
  isShowImage: boolean;
  filteredProducts: IProduct[];
  initialProducts: IProduct[];
  totalRating: number;

  constructor(private productService: ProductService) {}

  get filterText() {
    return this._filterText;
  }

  set filterText(valueOfFilter: string) {
    this._filterText = valueOfFilter;
    this.filteredProducts = this.filterProductsBy(valueOfFilter);
    console.log(this.filteredProducts);
  }

  ngOnInit(): void {
    this.pageTitle = 'Liste des produits';
    this.totalRating = 0;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.initialProducts = data["products"];
        this.filteredProducts =  data["products"];
      },
        error: (message) => console.log(message),
      complete: () => console.log('OVER'),
    });
  }

  filterProductsBy(value: string): IProduct[] {
    return this.filteredProducts.length
      ? this.filteredProducts.filter((product: IProduct) =>
          product.productName.includes(value)
        )
      : this.initialProducts;
  }

  toggleShowImage(): void {
    this.isShowImage = !this.isShowImage;
  }

  receive(result: number): void {
    this.totalRating = result;
  }
}
