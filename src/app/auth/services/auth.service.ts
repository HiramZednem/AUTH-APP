import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../environment/enviroment';
import { AuthResponse } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = enviroment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  login( email: string, password: string ) {
    const url = `${ this.baseUrl }/auth`;
    const body = { email, password }
    return this.http.post<AuthResponse>( url, body )
  }
}
