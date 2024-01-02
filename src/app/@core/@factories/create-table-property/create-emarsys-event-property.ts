import { EmarsysEvent } from "@models/interfaces/table-properties/emarsys-event";

export const createTableEmarsysEvent = (
name: string,
value:string,
description: string | string[],
placement?: string ,
note?: string | string[]
): EmarsysEvent => ({ name , value ,description , placement , note });
