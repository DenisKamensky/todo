import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeProjectService } from '../home-project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  @Output()
  closeForm = new EventEmitter();
  taskName: string = '';
  constructor(private _homeProjectService: HomeProjectService) { }

  ngOnInit() {
  }
  cancel(){
    this.taskName = '';
    this.closeForm.emit();
  }
  createProject(){
    this._homeProjectService.createTask(this.taskName)
    this.taskName = '';
    this.closeForm.emit();
  }

}
