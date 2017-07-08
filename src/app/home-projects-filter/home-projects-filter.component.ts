import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeProjectService } from '../home-project.service';
@Component({
  selector: 'app-home-projects-filter',
  templateUrl: './home-projects-filter.component.html',
  styleUrls: ['./home-projects-filter.component.scss'],
})
export class HomeProjectsFilterComponent implements OnInit {
  @Output()
  searchChange = new EventEmitter<string>();
  query: string = '';
  constructor(private _homeProjectService: HomeProjectService) { }

  ngOnInit() {
  }
  setQuery(){
    this.searchChange.emit(this.query)
  }
}
