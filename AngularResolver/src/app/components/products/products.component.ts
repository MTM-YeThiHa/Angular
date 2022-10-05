import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(
      'Activated route data in Component:::',
      this.activatedRoute.data
    );
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCING', response);
      this.products = response.products;
      console.log('PRODUCT FETCHED');
    });
  }

}
