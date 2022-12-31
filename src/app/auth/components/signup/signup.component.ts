import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  formSignup!: FormGroup;
  hidePassword = true;

  ngOnInit(): void {

    this.formSignup = new FormGroup(
      {
      email: new FormControl('',
        {
          validators:[Validators.required, Validators.email],
        }),
        username: new FormControl('',
        {
          validators:[Validators.required, Validators.email],
        }),
      password: new FormControl('',
      {
        validators:[Validators.required],
      })
      }
    )

  }
}
