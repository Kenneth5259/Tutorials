import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  itemTitle: string = '';

  constructor(private todoService: TodoService) { 
  }


  ngOnInit(): void {
  }

  onFormSubmit(): void {
    if(this.itemTitle !== '') {
      this.todoService.addNewItem(this.itemTitle);
      this.itemTitle = '';
    } else {
      alert('To Do Title cannot be empty');
    }
    
  }
}
