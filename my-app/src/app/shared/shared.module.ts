import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { SeparateCharsPipe } from './separate-chars.pipe';
import { ClockComponent } from './clock/clock.component';



@NgModule({
  declarations: [
    ClockComponent,
    ColorPickerComponent,
    SeparateCharsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    ColorPickerComponent,
    SeparateCharsPipe,
    CommonModule,
  ]
})
export class SharedModule { }
