import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams} from '@angular/common/http';
import {  Login } from '../../models/auth.model';

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
    const url_login = `http://127.0.0.1:8000/api/v2/login/`;

    return this._httpClient.post<Login>(
      url_login,
      {
        "email": email,
        "password": password
      }
    );
  }


  register(email: string, username: string, password: string) {

    const url_register = `${URL_BASE}/register/`;
    const body = {
      email, username, password
    }
    return this._httpClient.post<any>(url_register, body);
  }


}

