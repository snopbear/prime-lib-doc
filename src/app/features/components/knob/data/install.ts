import { createImport, createBasicClass } from '@factories/index';

export const KnobInstall: Knob = {
  import: createImport([
    {
      import: 'AssafKnobModule',
      from: 'assaf-prime-lib/@components/@knob',
    },
  ]),
  htmlUse: `<assaf-knob [value]='number'></assaf-knob> `,
  TS: createBasicClass(
    [],
    `<div><span style="color: #3598db;">number:</span> <span style="color: #2dc26b;">number</span> = 40;</div>`
  ),
};
export interface Knob {
  import: string;
  htmlUse: string;
  TS: string;
}
