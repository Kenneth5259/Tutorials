import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  onItemComplete(): void {
    this.item.markComplete();
  }

}
