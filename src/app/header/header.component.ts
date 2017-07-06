import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  homePage: boolean = false;
  constructor() { }

  ngOnInit() {
    this.currentPage()
  }
  currentPage(): void{
    if(location.pathname.indexOf('/home')){
      this.homePage = true;
    }else{
      this.homePage = false;
    }
  }

}
