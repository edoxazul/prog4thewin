import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Observable';
import { GLOBAL } from './global' ;

@Injectable()
export class UsuarioService {
  public url: string;
  public identity;
  public token;
  public exp;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  register() {
    return 'Texto desde Servicio';
  }

  iniciarSesion(usuarioIngresado, gettoken = null) {
    if (gettoken != null) {
      usuarioIngresado.gettoken = gettoken;
    }
    const params = JSON.stringify(usuarioIngresado);
    const headers = new Headers({'Content-Type':
        'application/json'});
    // TODO: revisar si iniciarSesion es la direccion correcta de login
    return this._http.post(this.url + '/usuario/login', params,
      {headers: headers}).
    map(res => res.json());
  }

  getIdentity() {
      const identity = JSON.parse(localStorage.getItem('identity'));
      if (identity !== 'undefined') {
          this.identity = identity;
      } else {
          this.identity = null;
      }
      return this.identity
  }

  getToken() {
      const token = localStorage.getItem('token');
      if (token !== 'undefined') {
          this.token = token;
      } else {
          this.token = null;
      }
      return this.token
  }

  getExpire() {
      const exp = localStorage.getItem('exp');
      if (exp !== 'undefined') {
          this.exp = exp;
      } else {
          this.exp = null;
      }
      return this.exp
  }

  existLogin() {
      if (this.getIdentity()) {
          if (this.getToken()) {
              return true;
          }
      }
      return false;
  }
}
