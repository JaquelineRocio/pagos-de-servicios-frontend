import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ValidateSessionGuard } from '../guards/validate-session.guard';
import { checkToken } from '../interceptors/token-session.interceptor';

export interface Pago{
  user: string;
  expiration_date: string;
  service: number;
  amount: number;
  payment_date?: number;
}
const URL_BASE = `${environment.apiUrl}/payments/`;
@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(
    private _httpClient: HttpClient,
  ) {}


  createPago(body: Pago){
    body.user = 'rocio123@gmail.com';
     body.service = 1;

     console.log(typeof(body.amount))
    // body.amount = 8;
    // body["expiration_date"]= "2023-02-15"
    console.log(body)
    // // body = {
    // //   "user": "string",
    // //   "service": 1,
    // //   "amount": 0,
    // //   "expiration_date": "2023-02-15"
    // // }
    const api_key: string= localStorage.getItem('access_token')!;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`
    });

  const requestOptions = { headers: headers };
    return this._httpClient.post(URL_BASE,body, requestOptions);
  }



}
