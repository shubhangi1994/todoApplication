import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  todos = [
    new Todo(1, 'Prepare excel for tracking activities', new Date(), 'Not Started'),
    new Todo(2, 'Check oAuth Functionality', new Date(), 'Not Started'),
    new Todo(3, 'API integration', new Date(), 'Not Started')
  ];
  constructor() {
    console.log(this.todos);
  }
  ngOnInit(): void {
  }

}
