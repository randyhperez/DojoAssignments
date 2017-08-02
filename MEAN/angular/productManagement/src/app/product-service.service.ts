import { Injectable } from '@angular/core';
import { Product } from './data/product';
import { Products } from './data/products';


@Injectable()
export class ProductServiceService {

  constructor() { }

  createProduct(product: Product): void {
    if (!Products.length) {
      product.id = 1
    }
    else {
      product.id = Products[Products.length - 1].id;
    }
    Products.push(product);
  }

  deleteProduct(idx: number): void {
    Products.splice(idx, 1)
  }

  updateProduct(product: Product): void {
    for (let idx = 0; idx < Products.length; idx++) {
      if (Products[idx].id === product.id) {
        Products[idx] === product;
        break;
      }
    }
  }

}
