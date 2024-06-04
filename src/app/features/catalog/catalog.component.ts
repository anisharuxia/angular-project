
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AppComponent } from '../../app.component';
import { ApiService } from '../../shared/api.service';
import { product } from './productmodel';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl, NgModel, NgModelGroup } from '@angular/forms';




@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, AppComponent, CommonModule,RouterLink,FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  
})
export class CatalogComponent implements OnInit  {
  data!:any|product[];
  searchtext:any;
  constructor(private api:ApiService){};


  
  ngOnInit(): void {
   this.displayproduct();
  }

  displayproduct(){
    this.api.getproduct().subscribe(res=>{
          this.data = res;
          console.log(res)
    })
  }

  addtocart(item:product){
  this.api.addtocard(item);
  }

  removeitem(item:product){
   this.api.removecartitem(item);

  }
}