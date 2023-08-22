import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurToBtc'
})
export class EurToBtcPipe implements PipeTransform {

  transform(value: number): string {
    return value / 23863 + 'BTC';
  }

}
