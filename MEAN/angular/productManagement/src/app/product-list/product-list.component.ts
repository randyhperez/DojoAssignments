import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { Products } from '../data/products';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  list: Array<Product> = Products;

  constructor(private _productService: ProductServiceService) { }

  update(){
    console.log('updating');
    
  }

  delete(idx){
    console.log('deleting');
    this._productService.deleteProduct(idx);
  }

  ngOnInit() {
  }

}
