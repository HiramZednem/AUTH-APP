import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from '../../../environment/enviroment';
import { AuthResponse, User } from '../interfaces/auth.interfaces';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = enviroment.baseUrl;
  private _user!: User;

  get user() {
    return { ...this._user }
  }


  constructor(
    private http: HttpClient
  ) { }

  login( email: string, password: string ) {
    const url = `${ this.baseUrl }/auth`;
    const body = { email, password }
    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.ok ) {
            localStorage.setItem( 'token', resp.token! );
            this._user = {
              name: resp.name!,
              uid: resp.uid!,
            }
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      )
  }

  checkAuthentication() {
    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get( url, { headers } )
  }
}
