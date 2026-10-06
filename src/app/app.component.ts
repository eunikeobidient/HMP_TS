import { Component } from '@angular/core';
import { Auth } from './auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private authService: Auth, private router: Router) {}

  get isLoggedIn(): boolean{
    return Auth.isLoggedIn;
  }

  logout(){
    setTimeout(() => {
      this.authService.doLogout();
      window.location.replace('/login');
    }, 300);
  }
}
