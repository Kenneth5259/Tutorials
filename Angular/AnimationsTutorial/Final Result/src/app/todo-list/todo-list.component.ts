import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Subscription } from 'rxjs';

import { TodoService} from '../services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // definte an aray of Todo items
  items: Todo[] = [];
  serviceSubscription: Subscription;

  constructor(private todoService: TodoService) { 
  }

  ngOnInit(): void {
    this.todoService.getAllItems().subscribe(items => this.items = items);
  }

}
