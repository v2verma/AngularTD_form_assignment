import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;  
  subscription = ['Basic', 'Advanced', 'Pro'];
  defaultEmail = 'test@test.com';
  defaultPassword = "12345";
  defaultSubscription = 'Advanced';
  data = {
    email: '',
    password: '',
    subscription: ''
  }
  submitted = false;

  onSubmit(form) {
    console.log(form);
    this.submitted = true;
    this.data.email = this.signupForm.value.email;
    this.data.password = this.signupForm.value.password;
    this.data.subscription = this.signupForm.value.subscription;
  }
}
