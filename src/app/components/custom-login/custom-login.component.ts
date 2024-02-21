import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-custom-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './custom-login.component.html',
  styleUrl: './custom-login.component.scss'
})
export class CustomLoginComponent {
  form:FormGroup = this.fb.group({
    email:[''],
    password:['']
  })
  loginHandle(){
    this.loginService.setUser(this.form.value.email,this.form.value.password)
    this.router.navigateByUrl("/dashboard")
  }

  constructor(private fb:FormBuilder, private router:Router, private loginService:LoginService){

  }


}
