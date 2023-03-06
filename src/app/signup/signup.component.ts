import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule , ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm : any;
  constructor(private router : Router ,private http : HttpClient,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      "userName" : new FormControl(null , [Validators.required , Validators.pattern('[a-zA-Z]*')]),
      "email" : new FormControl(null , [Validators.required , Validators.email]),
      "password" : new FormControl(null , [Validators.required , Validators.maxLength(6)]),
      "mobileNumber" : new FormControl(null , [Validators.required , Validators.pattern(/^\d{10}$/), Validators.maxLength(9)])
    });
  }


  submitData(){

      const user:User = this.signUpForm.value;
      console.log(user);
      this.userService.signup(user).subscribe(
        response =>{
          console.log(response);
          if(response == 1){
            alert("SignUp is sucessful.");
            // this.signUpForm.reset;
            this.router.navigate(['login']);
          }
          else{
            alert("worng!");
          }
        },err=>{
          alert("Something Went Wrong!");
        }
      )

  }


  get userName() { return this.signUpForm.get('userName'); }
  get email()  { return this.signUpForm.get('email');}
  get mobileNumber() { return this.signUpForm.get('mobileNumber');}
  get password() { return this.signUpForm.get('password');}

}

