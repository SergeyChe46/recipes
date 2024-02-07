import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removecomma',
})
export class RemoveCommaPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let removed = value.replace(',', '');
    return removed;
  }
}
