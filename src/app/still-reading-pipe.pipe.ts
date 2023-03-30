import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stillReadingPipe'
})
export class StillReadingPipePipe implements PipeTransform {

  transform(value: string): string {
    if(value === "1") {
      return "true"
    } else if(value === "0") {
      return "false";
    }
    return null;
  }

}
