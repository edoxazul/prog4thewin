import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
    noticias = [];
    constructor() {
    }

    ngOnInit() {
        this.noticias = this.getNoticias();
    }
    getNoticias() {
      const array = JSON.parse(localStorage.getItem('favoritos'));
      return array;
    }
    deleteNoticia(titulo: String) {
        const array = JSON.parse(localStorage.getItem('favoritos'));
        for (let i = 0; i < array.length; i++) {
            if (array[i].titulo === titulo) {
                array.splice(i, 1);
                localStorage.setItem('favoritos', JSON.stringify(array));
                break;
            }
        }
        this.noticias = array;
    }
}
