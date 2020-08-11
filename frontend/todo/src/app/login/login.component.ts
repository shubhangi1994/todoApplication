import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = 'admin';
  invalid = false;
  errorMessage = 'Invalid Credentials';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isAuthenticated();
  }

  login() {
    if (this.isAuthenticated()) {
      this.router.navigate(['welcome']);
    }
    console.log(this.username);
    console.log(this.password);
  }

  isAuthenticated() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.invalid = false;
      return true;
    } else {
      this.invalid  = true;
      this.errorMessage = 'Invalid Credentials';
      return false;
    }
  }
}
