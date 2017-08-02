import { Component, OnInit } from '@angular/core';
import { Product } from '../data/product';
import { Products } from '../data/products';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  selected: Product;

  constructor(
    private _route: ActivatedRoute, 
    private _productService: ProductServiceService,
    private router: Router
    ) { 
    this._route.params.subscribe(param => {
      console.log(param.id)
      this.selected = Products[param.id]
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this._productService.updateProduct(this.selected);
    this.router.navigate(['product/list'])
  }

  ngOnInit() {
    console.log(this.selected);
  }

}
