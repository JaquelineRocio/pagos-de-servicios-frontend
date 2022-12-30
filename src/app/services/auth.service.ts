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
    const url_login = `${URL_BASE}/login`;

    return this._httpClient.post<Login>(
      url_login,
      { email, password }
    );
  }


  register(user: any) {
    const url_register = `${URL_BASE}/auth/register`;
    const params = new HttpParams().set(
      'g',
      '1ddd7536-e95e-479e-9571-d820dc583d89'
    );
    return this._httpClient.post(url_register, user, { params: params });
  }


}

