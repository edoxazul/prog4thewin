import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../services/usuario.services';
import {error} from 'util';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    datos: any = {};

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _usuarioService: UsuarioService) {
    }

    ngOnInit() {
    }

    login(inputEmail: String, inputPass: String) {
        const salida = {
            rutMail: inputEmail,
            clave: inputPass
        };

        this._usuarioService.iniciarSesion(salida).subscribe(
            response => {
                localStorage.setItem('usuario', JSON.stringify(response));

                this._usuarioService.iniciarSesion(salida, true).subscribe(
                    token => {
                        localStorage.setItem('token', JSON.stringify(token.token))
                        this._router.navigate(['/home'])
                    }, error => {
                        alert('Error con el token')
                    }
                )
            }, error => {
                alert('Error de inicio')
            });
    }
}

