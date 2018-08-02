import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    noticias: any = {};
    private apiURL = 'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=8f41f8f7c63e4a41bc6972afc3e54a68';
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor(private http: Http) {}

    ngOnInit() {
        this.getData();
        this.getImages();
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
