import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  sub: Subscription;
  id: number;
  product: IProduct = {
    id: 0,
    name: 'Demo1',
    description: 'Demo mt 1'
  }

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private productService: ProductService) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    })
  }

  ngOnInit(): void {
  }

  getProduct(id: number){
    this.product = this.productService.getProductById(id);
  }

  update(){
    this.productService.update(this.id, this.product);
    this.router.navigate(['/']);
  }

}
