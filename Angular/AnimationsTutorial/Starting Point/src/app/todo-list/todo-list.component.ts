import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: Todo[];

  constructor() { 
    this.items = [];
    this.items.push(new Todo('test'));
  }

  ngOnInit(): void {
  }

}
