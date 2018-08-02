import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
    console = console;
    noticias: any = {};
    private apiURL = 'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=8f41f8f7c63e4a41bc6972afc3e54a68';
    ngOnInit() {
        this.getData();
        this.getImages();
    }
    constructor(private http: Http) {
    }

  getData() {
    return this.http.get(this.apiURL).map((res: Response) => res.json());
  }

  getImages() {
      this.getData().subscribe(noticias => {
            console.log(noticias);
            this.noticias = noticias;
      })
  }
}
