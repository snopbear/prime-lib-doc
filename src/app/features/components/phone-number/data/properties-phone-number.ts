import { createTableProperty } from '@factories/index';

export const propertiesPhoneNumber = [
  createTableProperty(
    'controlName',
    'string',
    'Form control name for data binding (need to be provided otherwise an exception is thrown)',
    'undefined'
  ),
  createTableProperty(
    'customPlaceholder',
    'string',
    'Sets custom placeholder, when provided auto placeholder gets disabled',
    'undefined'
  ),
  createTableProperty(
    'styleClass',
    'string',
    'External styling class/es',
    'undefined'
  ),
  createTableProperty(
    'inputStyleClass',
    'string',
    'External styling class/es for phone input section',
    'undefined'
  ),
  createTableProperty(
    'dropdownStyleClass',
    'string',
    'External styling class/es for phone dropdown section',
    'undefined'
  ),
  createTableProperty(
    'pereferedCountry',
    'CountryCode',
    'Sets country to be selected on initial render',
    'CountryCode.Egypt'
  ),
  createTableProperty(
    'controlErrors',
    'FormInputErrors',
    'Control errors messages, validations are automatically added in Validators.pattern',
    'undefined'
  ),
  createTableProperty('label', 'string', 'Sets input label text', 'undefined'),
  createTableProperty(
    'labelStyleClass',
    'string',
    'External styling class for label (not when floatLabel is active)',
    'undefined'
  ),
  createTableProperty(
    'onlyValidate',
    'CountryCode[ ]',
    'Enables validation for countries in array only',
    'undefined'
  ),
];
