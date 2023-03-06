import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email !: string
  user!:User
  public loginForm !: FormGroup;

  constructor( private formBuilder : FormBuilder , private http : HttpClient , private router : Router, private login_service : LoginServiceService,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email :[''],
      password : ['']
    })

  }


login()
{
  this.email = this.loginForm.value.email;
  console.log(this.email);
  this.userService.login(this.email).subscribe(
    response =>{
      this.user = response;
      console.log(this.user,"user after login");
      console.log(response.password,"password");
            if(response.password === this.loginForm.value.password)
            {
              alert("Login Success!!");
              this.login_service.isLoggedIn = true;
              this.loginForm.reset();
              this.router.navigate(['movie']);
            }else{
              alert("User Not Found!!");
            }
    },err =>
    {
      alert("Something went wrong!!")
    }
  )
}

}



