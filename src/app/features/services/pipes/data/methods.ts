import { createTableMethod } from '@factories/index';
import { TableMethod } from '@models/interfaces';

const dateParameters = [
  'value: to be converted',
  'format: date format to be converted to (follow this url: https://angular.io/api/common/DatePipe)',
  'timezone: sets time format for date conversion',
  'locale: will format a value according to locale rules (ex: "en-US")',
];
const decimalParameters = [
  'value: to be converted',
  'digitsInfo: decimal format to be converted to use in this specific format ({minIntegerDigits}.{minFractionDigits}-{maxFractionDigits} ex: "1.1-2")',
  'locale: will format a value according to locale rules (ex: "en-US")',
];

export const pipesMethods: Array<TableMethod> = [
  createTableMethod(
    'number',
    'Converts number to string with comma seperations',
    '(value: number): string',
    'value: to be converted'
  ),
  createTableMethod(
    'percentage',
    'Concats % sign to the end of value',
    '(value: number | string): string',
    'value: to be converted'
  ),
  createTableMethod(
    'upperCase',
    'Converts value to uppercase letters',
    '(value: string): string',
    'value: to be converted'
  ),
  createTableMethod(
    'lowerCase',
    'Converts value to lowercase letters',
    '(value: string): string',
    'value: to be converted'
  ),
  createTableMethod(
    'date',
    'Converts value to date format',
    '(value: Date | string, format?: string, timezone?: string, locale?: string): string',
    dateParameters
  ),
  createTableMethod(
    'decimal',
    'Converts value to decimal format',
    '(value: number | string, digitsInfo?: string, locale?: string): string',
    decimalParameters
  ),
];
