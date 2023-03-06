import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

     isUserLoggedIn !: boolean;
  // @Output() loginEvent = new EventEmitter<void>();
  // @Output() logoutEvent = new EventEmitter<void>();

  constructor(private router : Router , private login_service : LoginServiceService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.login_service.isLoggedIn;
  }



  logout()
  {
    this.login_service.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
