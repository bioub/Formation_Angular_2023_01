import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { SeparateCharsPipe } from './separate-chars.pipe';



@NgModule({
  declarations: [
    ColorPickerComponent,
    SeparateCharsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorPickerComponent,
    SeparateCharsPipe,
    CommonModule,
  ]
})
export class SharedModule { }
