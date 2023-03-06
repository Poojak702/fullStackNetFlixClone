import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  form = new FormGroup({
    "email": new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private router : Router, private http : HttpClient) { }

  ngOnInit(): void {
  }

  checkEmail()
  {

    this.http.get<any>("http://localhost:3000/signUp")
    .subscribe(res =>{
      const user = res.find((a : any) => {
        return a.email === this.form.value.email
      });
      if(user)
      {
        this.router.navigate(['login']);
      }else{
        this.router.navigate(['signUp']);
      }
    })

  }


  get email() {
    return this.form.get('email');
  }

}



