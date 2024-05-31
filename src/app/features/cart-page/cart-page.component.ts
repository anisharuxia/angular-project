import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { CommonModule, NgClass } from '@angular/common';
import { product } from '../catalog/productmodel';
import{ FormControl, FormGroup, ReactiveFormsModule, Validators , } from '@angular/forms';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,ReactiveFormsModule, ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit  {
  

  showproduct:any=[]
  public totalamount:number=0;
  public addressform = false;
  myform: FormGroup|any;

   
  

  constructor(private api:ApiService){

  }
ngOnInit(): void {
  this.api.products().subscribe(res=>{
    this.showproduct = res;
    this.totalamount =this.api.calculateprice();
    console.log("total amount is,",this.totalamount)
  })

  // form
  this.myform = new FormGroup({
    email:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
  })
  

}
deleteitem(item:product){
  this.api.removecartitem(item)

}
 Empty(){
  this.api.removeallitems();
 }

 cancel(){
  this.addressform = false;
  this.myform.reset();
 }

 onsubmit(){
  this.myform.value;
  console.log(this.myform.value)
  this.myform.reset();
 }
}
