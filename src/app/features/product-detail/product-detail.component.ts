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
  constructor(private api:ApiService, private Activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    let productid=this.Activatedroute.snapshot.paramMap.get('productid')
    // console.log('product id is ', productid)
    productid && this.api.getproductbyid(productid).subscribe((res)=>{
      this.productdata =res;
      console.log(res)
    })
  }

  
  
}
