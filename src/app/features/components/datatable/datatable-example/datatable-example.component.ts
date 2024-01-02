import { Component } from '@angular/core';
import { DisplayService } from 'assaf-prime-lib/services';

import { PipesService } from 'assaf-prime-lib/services';
import {
  LazyLoadAction,
  State,
  TableColumn,
} from 'assaf-prime-lib/@components/@datatable';
import { SharedModule } from '@shared-module/shared.module';
import {
  checkboxHeaders,
  datatableExamples,
  dropdowns,
  generalHeaders,
  sortable,
  subHeaders,
  users,
} from '../data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'assaf-documentation-datatable-example',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './datatable-example.component.html',
  styleUrls: ['./datatable-example.component.scss'],
})
export class DatatableExampleComponent {
  //#region Declerations
  get users() {
    return users;
  }
  get examples() {
    return datatableExamples;
  }
  get headers() {
    return generalHeaders;
  }
  get checkboxHeaders() {
    return checkboxHeaders;
  }
  get sortable() {
    return sortable;
  }
  get subHeaders() {
    return subHeaders;
  }
  get dropdowns() {
    return dropdowns;
  }
  _form!: FormGroup;
  lazyData!: any[];
  isLoading: boolean = false;
  totalRecords: number = this.users.length;
  userHeaders: Array<TableColumn> = [
    { title: 'First Name', type: 'text', dataKey: 'firstName' },
    {
      title: 'Active',
      type: 'text',
      dataKey: 'activeText',
      // Use style pipe to apply conditional styling
      stylePipe: (value: any): string => {
        return value.active
          ? 'text-green-500 font-bold'
          : 'text-red-500 font-bold';
      },
    },
    { title: 'Image', type: 'image', dataKey: 'image' },
    { title: 'Phone Number', type: 'text', dataKey: 'phone' },
    {
      title: 'Salary',
      type: 'text',
      dataKey: 'salary',
      // Use textpipe to transform text of each cell in the column
      textPipe: (value: any): string => {
        return this.__pipes.number(value);
      },
    },
  ];
  //#endregion Declerations

  constructor(private __toast: DisplayService, private __pipes: PipesService) {}
  //#region Methods
  stateClicked(event: State): void {
    this.__toast.displayToast(
      'info',
      event.event === 'dropdown'
        ? 'Changed city is ' + event.state.city
        : 'Clicked ID is ' + event.state.id
    );
  }

  selected(event: any[]): void {
    this.__toast.displayToast(
      'info',
      'Number of selected rows is ' + event.length
    );
  }

  paginate(event: LazyLoadAction): void {
    const loadTimer = setTimeout(() => {
      this.isLoading = true;
      clearTimeout(loadTimer);
    }, 0);

    const timer = setTimeout(() => {
      this.lazyData = this.users.slice(event.first, event.first + event.rows);
      this.isLoading = false;
      clearTimeout(timer);
    }, 1000);
  }

  //#endregion Methods
}
