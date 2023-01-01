import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  hidePassword = true;
  constructor(private _auth: AuthService, private _router:Router) { }

  ngOnInit(): void {

    this.formLogin = new FormGroup(
      {
      email: new FormControl('',
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

  login(formValue: any){
    const {email, password} = formValue;

    this._auth.login(email, password).subscribe({
      next: rpta => {
        localStorage.setItem('message', rpta['message']);
        localStorage.setItem('email', rpta['data']['email']);
        localStorage.setItem('email', rpta['data']['username']);
        localStorage.setItem('isAdmin', String(rpta['data']['isAdmin']))
        localStorage.setItem('access_token', rpta['tokens']['access'])
        this._router.navigate(['/dashboard'])
      }
    })
  }

}
