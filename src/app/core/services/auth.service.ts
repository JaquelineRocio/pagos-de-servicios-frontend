import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
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
    const url_login = `${URL_BASE}/login/`;
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
  refreshToken(token: string) {

    return this._httpClient.post(`http://localhost:8000/api/v1/refresh_jwt/` ,
    {
      refreshToken: token
    });
  }

}

