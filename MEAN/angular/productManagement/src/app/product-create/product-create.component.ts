import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { Products } from '../data/products';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  product: Product = new Product();

  constructor(private _productService: ProductServiceService, private router: Router) { }

  onSubmit(event){
    event.preventDefault();
    this._productService.createProduct(this.product);
    console.log('Products', Products);
    this.product = new Product()
    this.router.navigate(['product/list'])
  }

  ngOnInit() {
  }

}
