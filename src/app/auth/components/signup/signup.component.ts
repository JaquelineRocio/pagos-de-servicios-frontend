import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  formSignup!: FormGroup;
  hidePassword = true;
  constructor(private _auth: AuthService) { }
  ngOnInit(): void {

    this.formSignup = new FormGroup(
      {
      email: new FormControl('',
        {
          validators:[Validators.required, Validators.email],
        }),
        username: new FormControl('',
        {
          validators:[Validators.required],
        }),
      password: new FormControl('',
      {
        validators:[Validators.required],
      })
      }
    )

  }
  signup(formSignupValue: any){
    console.log(typeof(formSignupValue))
    console.log(formSignupValue)
    const {email, username, password} = formSignupValue
    this._auth.register(email, username, password).subscribe({
      next: rpta=>{
        console.log(rpta)
      },
      error: err=>{
        console.log(err)
      }
    })
  }
}
