import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNull'
})
export class ReplaceNullPipe implements PipeTransform {

  replaceText: string = '-'

  transform(value: any): string {
    if (typeof value === 'undefined' || value === null || value === '') {
      return this.replaceText;
    } 
    else {
      return value
    }
  }

}
