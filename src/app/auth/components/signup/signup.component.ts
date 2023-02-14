import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, MaxLengthValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

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
        validators:[Validators.required, Validators.minLength(8)],
      })
      }
    )

  }
 response= {title:'', message:''}
  signup(formSignupValue: any){
    const {email, username, password} = formSignupValue
    this._auth.register(email, username, password).subscribe({
      next: rpta=>{
        this.response.title = 'Exito';
        this.response.message = rpta['message'];
      },
      error: err=>{
        this.response.title = 'Error';
        this.response.message = err['error']['body']['non_field_errors'][0];
      }
    })
  }

}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
