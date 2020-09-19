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

  constructor(private productService: ProductService) {

  }

  get filterText() {
    return this._filterText;
  }

  set filterText(valueOfFilter: string) {
    this._filterText = valueOfFilter;
    this.filteredProducts = this.filterProductsBy(valueOfFilter);
  }

  ngOnInit(): void {
    this.pageTitle = 'Liste des produits';
    this.totalRating = 0;
    this.filteredProducts = this.productService.getProducts();
   }

  filterProductsBy(value: string): IProduct[] {
    return this.initialProducts.filter((product: IProduct) =>
      product.productName.includes(value)
    );
  }

  toggleShowImage(): void {
    this.isShowImage = !this.isShowImage;
  }

  receive(result: number) : void {
    this.totalRating = result;
  }
}
