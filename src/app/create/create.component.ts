import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  }
  constructor(private productService: ProductService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  create(){
    this.productService.create(this.product);
    this.router.navigate(['/'])
  }
}
