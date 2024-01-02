import { TableMethod } from '@models/interfaces';

export const createTableMethod = (
  name: string | string[],
  description: string | string[],
  prototype: string | string[],
  protoDesc?: string | string[]
): TableMethod => ({ name, description, protoDesc, prototype });
