import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'my-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Partial<Todo> = {};
}
