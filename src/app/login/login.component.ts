import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ObservedValueUnionFromArray } from 'rxjs';
import { AuthService } from '../auth-service.service';
import { User } from '../models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
user = User;
email : any;
password : any;
data : any;
  constructor(private http : HttpClient, private authService: AuthService){

  }
  ngOnInit(): void {}
    loginForm = new FormGroup(
      {
        Email : new FormGroup('',[Validators.required,Validators.email]),
        pwd : new FormGroup('',[Validators.required,Validators.minLength(8)]),
      }
    )
    login(email: string, password: string): void {
//       const params = new HttpParams().set('email', email).set('password', password);
// this.http.post<Response>('http://192.168.137.1:8080/users/login', params).subscribe((response => {
//         if (response) {console.log("logged in successfully !");
//         // 'http://192.168.137.1:8080/users/login?email='+email+'&password='+password;
//           // The login was successful. You can store the user's information and redirect them to the dashboard or another route.
//         } else {console.log("error!")
//           // The login was unsuccessful. You can display an error message or show the form again.
//         }
//       }));
//     }
//     login(): void {
      const user = new User();
      user.email = this.email;
      user.password = this.password;
      this.http.post<Response>('http://192.168.137.1:8080/users/login?email='+user.email+'&password='+user.password, user).subscribe(
        data => {
          if (data!=null) {
            console.log('logged in successfully !');
            console.log(data);
            // this.authService.setUser(data) = user;
          } else {
            console.log('error!');
                    }
        }
      );
    }
    
    // getEmail():FormGroup{
    //   return this.loginForm.get() as FormGroup;
    // }
    // onSubmit() {
    //   this.AuthService.login({
    //     email: this.loginForm.value.Email,
    //     password: this.loginForm.value.pwd,
    //   });
    //   console.log("logging in...");
    // }
  
  }


