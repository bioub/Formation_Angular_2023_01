import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos: Todo[] = [
    { id: Math.random(), title: 'ABC', completed: false },
    { id: Math.random(), title: 'DEF', completed: true },
  ];

  addTodo(newTodo: string) {
    this.todos.push({
      id: Math.random(),
      title: newTodo,
      completed: false,
    });
  }
}
