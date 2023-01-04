import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ObservedValueUnionFromArray } from 'rxjs';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {}
    loginForm = new FormGroup(
      {
        Email : new FormGroup('',[Validators.required,Validators.email]),
        pwd : new FormGroup('',[Validators.required,Validators.minLength(8)]),
      }
    )
    // getEmail():FormGroup{
    //   return this.loginForm.get('email') as FormGroup;
    // }
    // onSubmit() {
    //   this.AuthService.login({
    //     email: this.loginForm.value.Email,
    //     password: this.loginForm.value.pwd,
    //   });
    //   console.log("logging in...");
    // }
  
  }


