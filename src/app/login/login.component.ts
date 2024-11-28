import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //Injecting auth service
  authService = inject(AuthService);

  constructor(){
    this.authService.login({
      username:'emilys',
      password: 'emilyspass'
    })
  }
}
