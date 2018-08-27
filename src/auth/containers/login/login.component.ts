import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = true;
  errorMessage;

  constructor() // private auth: AuthService, private router: Router
  {}

  loginClicked() {
    this.login = true;
  }

  registerClicked() {
    this.login = false;
  }

  onRegister(event: User) {
    console.log(event);
  }

  onLogin(event: User) {
    console.log(event);
    // this.auth
    //   .loginWithEmail(event.email, event.password)
    //   .then(data => {
    //     let returnUrl = localStorage.getItem('returnUrl');
    //     this.router.navigateByUrl(returnUrl);
    //   })
    //   .catch(error => {
    //     console.log('LOGIN ERROR', error);
    //     this.errorMessage = error.message;
    //   });
  }
}
