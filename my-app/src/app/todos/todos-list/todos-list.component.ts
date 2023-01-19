import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'my-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent {
  @Input() items: Todo[] = [];
}
