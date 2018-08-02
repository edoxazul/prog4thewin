import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
  constructor() { }

  ngOnInit() {
  }

}
