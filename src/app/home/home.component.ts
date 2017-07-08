import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  query: string = '';
  constructor() { }

  ngOnInit() {
  }
  translateQuery(value: string){
    this.query = value;
  }

}
