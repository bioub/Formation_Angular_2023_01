import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  @Input() colors = ['red', 'green', 'blue']
  @Input() selected = '';

  @Output() selectedChange = new EventEmitter<string>();

  selectColor(color: string) {
    this.selected = color;
    this.selectedChange.emit(this.selected);
  }
}
