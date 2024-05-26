import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../features/homw/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getproduct(){
    return this.http.get<product[]>(" https://dummyjson.com/products")
  }
}
