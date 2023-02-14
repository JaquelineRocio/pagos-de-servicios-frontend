import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  public saveRefreshToken(token: string): void {
    localStorage.removeItem('refresh_token');
    localStorage.setItem('refresh_token', token);
  }
  public saveToken(token: string): void {
    localStorage.removeItem('access_token');
    localStorage.setItem('access_token', token);

    // const user = this.getUser();
    // if (user.id) {
    //   this.saveUser({ ...user, accessToken: token });
    // }
  }
  signOut(): void {
    localStorage.clear();
  }
}
