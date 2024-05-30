import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';
import { product } from '../catalog/productmodel';



@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit  {

  showproduct:any=[];
  public totalamount:number=0;
  public addressform = false;
  
  

  constructor(private api:ApiService){

  }
ngOnInit(): void {
  this.api.products().subscribe(res=>{
    this.showproduct = res;
    this.totalamount =this.api.calculateprice();
    console.log("total amount is,",this.totalamount)
  })
  

}
deleteitem(item:product){
  this.api.removecartitem(item)

}
 Empty(){
  this.api.removeallitems();
 }



}
