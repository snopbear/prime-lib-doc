import { createTableProperty } from '@factories/index';

export const propertiesKnob = [
  createTableProperty('value', 'number', 'Value to be binded', 'undefined'),
  createTableProperty(
    'valueColor',
    'string',
    'Color of value displayed',
    '"#3B82F6"'
  ),
  createTableProperty(
    'rangeColor',
    'string',
    'Color of knob range',
    '"#dfe7ef"'
  ),
  createTableProperty('label', 'string', 'Set Label text', 'undefined'),
  createTableProperty('disabled', 'boolean', 'Disable knob', 'false'),
  createTableProperty('size', 'number', 'Sets knob size in pexels', '100'),
  createTableProperty('readOnly', 'boolean', 'Disables knob editing', 'false'),
  createTableProperty('maxValue', 'number', 'Sets knob max value', '100'),
  createTableProperty('minValue', 'number', 'Sets knob min value', '0'),
  createTableProperty('step', 'number', 'Sets knob selection step', '1'),
  createTableProperty(
    'valueTemplate',
    'string',
    'Sets template to be placed next to value',
    'undefined'
  ),
  createTableProperty('strokeWidth', 'number', 'Sets stroke thickness', '14'),
  createTableProperty(
    'templatePos',
    ['"left"', '"right"'],
    'Sets valueTemplate position right or left',
    '"right"'
  ),
];
export const eventKnob = [
  createTableProperty(
    'valueChange',
    'number',
    'Event triggered if value is changed'
  ),
];

export const examplesText = {
  textBasic: `<assaf-knob [value]="number"></assaf-knob>`,
  textLabel: `<assaf-knob [value]="number" label="Price" align="center"></assaf-knob>`,
  textDisabled: `<assaf-knob [value]="number" [disabled]="true" align="center"></assaf-knob>`,

  textReadOnly: `<assaf-knob [value]="number" [readonly]="true"></assaf-knob>`,

  textTemplate: `<assaf-knob [value]="number" valueTemplate="%"></assaf-knob>`,

  Min_Max: `<assaf-knob [value]="number" [minValue]="-90" [maxValue]="90"></assaf-knob>`,

  textStroke: `<assaf-knob [value]="number" [strokeWidth]="20"> </assaf-knob>`,

  textStep: `<assaf-knob [value]="number" [step]="20"></assaf-knob>`,

  textColor: `<assaf-knob [value]="number" valueColor="yellow" rangeColor="blue"></assaf-knob>`,

  textSize: `<assaf-knob [value]="number" [size]="200"></assaf-knob>`,
};
