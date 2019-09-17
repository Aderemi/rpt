import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLength'
})
export class StringLengthPipe implements PipeTransform {
  transform(value: any, max: number): any {
       if(value.length > max){
        return value.substr(0, max) + '...';
     }
    return value;
  }
}
