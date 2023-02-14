import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

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

  response= {title:'', message:''}

  login(formValue: any){
    const {email, password} = formValue;

    this._auth.login(email, password).subscribe({
      next: rpta => {
        console.log(rpta['tokens']['access_token'])
        localStorage.setItem('message', rpta['message']);
        localStorage.setItem('email', rpta['body']['email']);
        localStorage.setItem('username', rpta['body']['username']);
        localStorage.setItem('isAdmin', String(rpta['body']['isAdmin']))
        localStorage.setItem('access_token', rpta['tokens']['access_token']);
        localStorage.setItem('refresh_token', rpta['tokens']['refresh_token'])
       this._router.navigate(['/dashboard/inicio'])
      },
      error: err=>{
        console.log(err)
        this.response.title = 'Error';
        this.response.message = err['error']['message'];
      }
    })
  }

}
