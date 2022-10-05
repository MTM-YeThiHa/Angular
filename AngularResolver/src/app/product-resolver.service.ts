import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<any> {

  constructor( private product: ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // throw new Error('Method not implemented.');
    console.log('Called Get Product in resolver...', route);
    return this.product.getProducts().pipe(
      catchError( error => {
        return of('No data');
      })
    );
  }
}
