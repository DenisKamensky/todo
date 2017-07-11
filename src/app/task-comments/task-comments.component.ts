import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { iComment } from '../shared/coment';
import { User } from '../shared/user';

@Component({
  selector: 'app-task-comments',
  templateUrl: './task-comments.component.html',
  styleUrls: ['./task-comments.component.scss']
})
export class TaskCommentsComponent implements OnInit {
  @Input()
  comment: iComment;
  user: User;
  userIcon: string;
  constructor( private _authService: AuthService) { }

  ngOnInit() {
    this.getCommentAuthor();
    this.userIcon = this.user.name[0];
  }
  getCommentAuthor(){
    this.user = this._authService.getCommentAuthor(this.comment.author)
  }

}
