import { Component, Input, OnInit } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  animations: [
    trigger('itemComplete', [
      state('no-line', style({
        width: '0%'
      })),
      state('line', style({
        width: '100%'
      })),
      transition('no-line => line', animate('600ms ease-in'))
    ])
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() item: Todo;
  
  get animationState(): string {
    return this.item.getStatus() ? 'line' : 'no-line';
  }

  constructor() { }

  ngOnInit(): void {
  }

  onItemComplete(): void {
    this.item.markComplete();
  }

}
