import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../products/product';
import { ProductService } from '../products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;

  iD: number;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.iD = id;
    this.productService.getProductById(id).subscribe({
      next: (data) => this.product = data
    });    
  }

}
