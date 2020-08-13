import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalid = false;
  errorMessage = 'Invalid Credentials';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.isAuthenticated()) {
      this.router.navigate(['welcome', this.username]);
    }
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
