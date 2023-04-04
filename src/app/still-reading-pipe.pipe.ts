import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stillReadingPipe'
})
export class StillReadingPipePipe implements PipeTransform {

  transform(value: boolean): string {
    if(value) {
      return "Yes"
    } else {
      return "No"
    }
  }

}
