import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  newTodo = 'XYZ';

  @Output() add = new EventEmitter<string>();

  submit(event: SubmitEvent) {
    event.preventDefault(); // désactive le form
    this.add.emit(this.newTodo);
  }
}
