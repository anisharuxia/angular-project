import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
user: any ={
  name:'',
  email:'',
  tel:'',

};

 onsubmit(form:NgForm){
   console.log(this.user)

  
   
   
 }


 

}
