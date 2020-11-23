import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoItems: Todo[] = [];
  constructor() { 
  }

  addNewItem(name: string) {
    this.todoItems.push(new Todo(name));
  }

  getAllItems(): Observable<Todo[]> {
    return of(this.todoItems);
  }

}
