import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.css']
})
export class NoticiaDetalleComponent implements OnInit {
    private autor: String;
    private descripcion: String;
    private fecha: String;
    private titulo: String;
    private url: String;
    private imagenURL: String;
    private succes: Boolean;
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (params['autor'] != null) {
                this.autor = params['autor']
            }
            if (params['descripcion'] != null) {
                this.descripcion = params['descripcion']
            }
            if (params['fecha'] != null) {
                this.fecha = params['fecha']
            }
            if (params['titulo'] != null) {
                this.titulo = params['titulo']
            }
            if (params['url'] != null) {
                this.url = params['url']
            }
            if (params['imagenUrl'] != null) {
                this.imagenURL = params['imagenUrl']
            }
        })
        this.succes = false;
    }
  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) {}
  agregarFavorito(inputAutor: String, inputDescripcion: String, inputFecha: String,
                  inputTitulo: String, inputUrl: String, inputImgUrl: String) {
        const noticia = {
            autor: inputAutor,
            descripcion: inputDescripcion,
            fecha: inputFecha,
            titulo: inputTitulo,
            url: inputUrl,
            imagenUrl: inputImgUrl
        };
        const storage = localStorage.getItem('favoritos');
        if (storage == null) {
            const arrayNoticia = [];
            arrayNoticia.push(noticia);
            localStorage.setItem('favoritos', JSON.stringify(arrayNoticia));
            console.log('agregado no existente');
            this.succes = true;
        } else {
            const array = JSON.parse(localStorage.getItem('favoritos'));
            console.log(this.search(noticia.autor, array));
            if (this.search(noticia.autor, array) == null) {
                array.push(noticia);
                localStorage.setItem('favoritos', JSON.stringify(array));
                console.log('agregado al array');
                this.succes = true;
            } else {
                console.log('existente');
            }
        }
  }
  search(nameKey, myArray) {
      for (let i = 0; i < myArray.length; i++) {
          if (myArray[i].autor === nameKey) {
              return myArray[i];
          }
      }
      return null;
  }
  getSucces(): Boolean {
        return this.succes;
  }
    public closeAlert() {
        this.succes = false;
    }
}
