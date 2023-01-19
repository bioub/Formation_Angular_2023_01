import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-state-button',
  templateUrl: './multi-state-button.component.html',
  styleUrls: ['./multi-state-button.component.css']
})
export class MultiStateButtonComponent {
  @Input() items = ['Item 1', 'Item 2', 'Item 3'];
  @Input() value = 'Item 2';

  @Output() valueChange = new EventEmitter<string>();

  selectNextItem() {
    const currentIndex = this.items.indexOf(this.value);
    const nextIndex = (currentIndex + 1) % this.items.length;

    this.value = this.items[nextIndex];
    this.valueChange.emit(this.value);
  }
}
