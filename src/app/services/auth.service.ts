import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams} from '@angular/common/http';
import {  Login } from '../models/auth.model';

const URL_BASE = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(
    private _httpClient: HttpClient,
  ) {}

  login(email: string, password: string) {

    console.log(email, password)
    const url_login = `${URL_BASE}/login/`;

    return this._httpClient.post<Login>(
      url_login,
      {
        "email": "jaquelineramosvargas@gmail.com",
        "password": "12345678"
    }
    );
  }


  register(email: string, username: string, password: string) {
    console.log(email, username, password)
    const url_register = `${URL_BASE}/signup/`;
    const body = {
      email, username, password
    }
    return this._httpClient.post(url_register, body);
  }


}

