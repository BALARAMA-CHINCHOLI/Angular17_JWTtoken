import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { response } from 'express';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN'

  private loggedUser?: string;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private http = inject(HttpClient);

  constructor() { }

  login(user: {
    username: string, password: string
  }): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', user).pipe(


      tap((response: any) => this.doLoginUser(user.username, response.accessToken))
    )
  }

  private doLoginUser(username: string, accessToken: any) {
    debugger;
    this.loggedUser = username;
    this.storeJWTToken(accessToken.jwt);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJWTToken(jwt: string) {
    alert(jwt);

    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  logOut() {
    debugger;
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
  }
}