import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../services/usuario.services';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
    noticias: any;
    ngOnInit() {
        this._usuarioService.getAllNoticias().subscribe(
             response => {
                 this.noticias = response;
             }, err => {
                 alert ('Error al buscar noticias');
        }
             ]
        )
    }
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _usuarioService: UsuarioService) {

    }
}
