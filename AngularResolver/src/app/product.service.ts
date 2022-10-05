import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://fakestoreapi.com/products?limit=6';

  constructor(public http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
