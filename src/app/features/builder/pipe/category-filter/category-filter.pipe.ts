import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilter',
  standalone: true,
})
export class CategoryFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    return items.filter((it) => it[field] == value);
  }
}
