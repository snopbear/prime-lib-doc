import { TableMethod, TableProperty } from '@models/interfaces';
import { EmarsysEvent } from '@models/interfaces/table-properties/emarsys-event';

export const SortingTableProperties = (arr: TableProperty[] | TableMethod[] | EmarsysEvent[]) => {
  arr.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return arr;
};
