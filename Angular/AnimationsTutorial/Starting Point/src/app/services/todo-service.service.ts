import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private todoItems: Todo[];
  constructor() { 
    this.todoItems = [];
  }

  addNewItem(name: string) {
    this.todoItems.push(new Todo(name));
  }

}
