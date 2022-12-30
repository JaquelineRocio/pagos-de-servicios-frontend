import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup
  constructor(private _auth: AuthService) { }

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

  login(){
    const {email, password} = this.formLogin.value;

    this._auth.login(email, password).subscribe({
      next: rpta => {
        console.log(rpta, 'kmdfkm ')
      }
    })
  }

}
