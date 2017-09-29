import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'appDate',
})
export class AppDatePipe implements PipeTransform {
  public transform(val: any, mode: string): any {
    if (mode === 'short') {
      return moment(val).format('YYYY-MM-DD');
    } else if (mode === 'full') {
      return moment(val).format('YYYY-MM-DD H:mm:ss.SSS');
    } else {
      return moment(val).format('YYYY-MM-DD H:mm');
    }
  }
}
