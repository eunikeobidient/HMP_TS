import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  constructor(private authService: Auth, private router: Router) { }

  ngOnInit() {
  }

  username: string = "";
  password: string = "";

  loginGagal: boolean = false;
  alertButtons = ['OK'];

  login(){
    let loginStatus = this.authService.doLogin(this.username, this.password);

    if(loginStatus){
      this.loginGagal = false;
      this.router.navigate(['/home']);
    } else{
      this.loginGagal = true;
    }
  }
}
