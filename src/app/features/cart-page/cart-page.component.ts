import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';
import { product } from '../catalog/productmodel';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet, CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit  {

  showproduct:any=[];

  constructor(private api:ApiService){

  }
ngOnInit(): void {
  this.api.products().subscribe(res=>{
    this.showproduct = res;
  })
}
deleteitem(item:product){
  this.api.removecartitem(item)

}
}
