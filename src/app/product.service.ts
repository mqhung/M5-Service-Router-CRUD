import { Injectable } from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'Iphone 12',
      description: 'New'
    },
    {
      id: 2,
      name: 'Iphone 12 Pro',
      description: 'New'
    },
    {
      id: 3,
      name: 'Iphone 12 Pro Max',
      description: 'New'
    }
  ];

  getAllProduct(): IProduct[]{
    return this.products;
  }

  getProductById(id: number){
    return this.products[id-1];
  }

  create(p: IProduct){
    let id = 0;
    for (let i = 0; i < this.products.length; i++) {
      let max = 0;
      if(this.products[i].id >= max){
        max = this.products[i].id;
        id = max + 1;
      }
    }
    p.id = id;
    this.products.push(p);
  }

  update(id: number, p: IProduct){
    this.products[id-1] = p;
  }

  delete(id: number){
    for (let i = 0; i <this.products.length; i++) {
      if(this.products[i].id == id) this.products.splice(i,1);
    }
  }

  constructor() { }
}
