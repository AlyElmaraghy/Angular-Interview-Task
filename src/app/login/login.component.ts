import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  passwordPattern = '^(?=.{8,})(?=.*[a-z])(?=.*?[0-9])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$'

  acc = {
    email: '',
    password: '',
  }

  constructor(private Router: Router) {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.invalid) {
      return;
    }

    let url = 'profile'
    this.Router.navigateByUrl(url);

  }
}


