import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  data: any;

  constructor(private http:HttpClient) {
   }

  signup(user :User):Observable<any>{
    return this.http.post<any>('http://localhost:8080/signup',user);
  }

  login(email:any):Observable<any>{

    return this.http.get<any>(`http://localhost:8080/login/${email}`);
  }
}
