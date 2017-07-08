import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeProjectService } from '../home-project.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home-projects-filter',
  templateUrl: './home-projects-filter.component.html',
  styleUrls: ['./home-projects-filter.component.scss'],
})
export class HomeProjectsFilterComponent implements OnInit {
  @Output()
  searchChange = new EventEmitter<string>();
  @Output()
  addProject = new EventEmitter();
  query: string = '';
  isAdmin: boolean = false;
  constructor(private _homeProjectService: HomeProjectService, private _authService: AuthService) { }

  ngOnInit() {
    this.userRole();
  }
  setQuery(){
    this.searchChange.emit(this.query)
  }
  userRole(){
    this.isAdmin = this._authService.getCurrentUserRole();
  }
  onAddProject(){
    this.addProject.emit();
  }
}
