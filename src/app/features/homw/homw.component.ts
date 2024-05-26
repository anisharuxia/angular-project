import { Component, OnInit, inject } from '@angular/core';

import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/api.service';
import { product } from './productmodel';




@Component({
  selector: 'app-homw',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './homw.component.html',
  styleUrl: './homw.component.css'
})
export class HomwComponent implements OnInit  {
  data!:product[]
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.displayproducts();
  }

  displayproducts(){
    this.api.getproduct().subscribe(res=>{
    this.data =res;
    console.log(res);
    })
  }
 }

