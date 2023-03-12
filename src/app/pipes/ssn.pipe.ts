import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ssn'
})
export class SSNPipe implements PipeTransform {

  transform(value: string): string {
    return "xxx-xx-" + value.substring(5,9);
  }
}
