import { Component, OnInit, inject } from '@angular/core';

import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/api.service';
import { product } from '../catalog/productmodel';
import { FooterComponent } from '../../shared/footer/footer.component';




@Component({
  selector: 'app-homw',
  standalone: true,
  imports: [CommonModule,FooterComponent ],
  templateUrl: './homw.component.html',
  styleUrl: './homw.component.css'
})
export class HomwComponent   {
  
 }

