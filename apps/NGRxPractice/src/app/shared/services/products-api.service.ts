import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(
    private http:HttpClient
  ) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
    .pipe(
      map((products)=>{
        return products.map((product)=>{
          return {
            ...product,
            quantity : 1,
          }
        })
      })
    );
  }
}
