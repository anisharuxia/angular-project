import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { product } from '../catalog/productmodel';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink ,RouterOutlet,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  productdata:any|product;

  showadd:boolean=true;
  showremove:boolean=false;

  constructor(private api:ApiService, private Activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    let productid=this.Activatedroute.snapshot.paramMap.get('productid')
    // console.log('product id is ', productid)
    productid && this.api.getproductbyid(productid).subscribe((res)=>{
      this.productdata =res;
      console.log(res)
    })


  }

  addtocard(productdata:product){
    this.showadd=false;
    this.showremove =true;
    this.api.addtocard(productdata);
  
  
  }





  deletecart(productdata:product){
     this.showadd=true;
     this.showremove=false;
     this.api.removecartitem(productdata)
  }
  
  
  
}
