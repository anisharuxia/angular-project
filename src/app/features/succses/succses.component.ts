import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-succses',
  standalone: true,
  imports: [SignUpComponent],
  templateUrl: './succses.component.html',
  styleUrl: './succses.component.css'
})
export class SuccsesComponent {
}