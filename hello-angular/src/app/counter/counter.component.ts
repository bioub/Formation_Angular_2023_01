import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count = 0;
  @Output() increment = new EventEmitter<number>();

  incrementCount() {
    this.count++;
    this.increment.emit(this.count);
  }
}
