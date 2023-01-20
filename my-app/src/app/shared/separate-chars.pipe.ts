import { Pipe, PipeTransform } from '@angular/core';
import { separateChars } from './utils/separate-chars';

@Pipe({
  name: 'separateChars',
})
export class SeparateCharsPipe implements PipeTransform {

  transform(value: string, separator: string): string {
    console.log('SeparateCharsPipe');

    return separateChars(value, separator);
  }

}
