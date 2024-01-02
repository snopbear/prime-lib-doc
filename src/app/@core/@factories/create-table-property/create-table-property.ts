import { TableProperty } from "@models/interfaces";

export const createTableProperty = (
  name: string,
  type: string | string[],
  description: string | string[],
  defaultValue?: string 
): TableProperty => ({ defaultValue, description, type, name });
