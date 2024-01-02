import { createTableProperty } from '@factories/index';
import { TableProperty } from '@models/interfaces';

export const imageUploaderEvents: TableProperty[] = [
  createTableProperty(
    'onChange',
    'SelectedFile | null | File',
    'Event triggered when image is uploaded or removed'
  ),
];
