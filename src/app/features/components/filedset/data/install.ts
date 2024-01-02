import { createImport } from '@factories/index';

export const fieldsetInstall = {
  import: createImport([
    {
      import: 'AssafFieldSetModule',
      from: 'assaf-prime-lib/@components/@fieldset',
    },
  ]),
  htmlUse: `<assaf-fieldset [data]="data"> </assaf-fieldset>`,
  tsUse:
    '<div><span style="color: rgb(61, 142, 185);">data</span>: <span style="color: rgb(0, 168, 133);">FieldSetData</span> = {<br>&nbsp; <span style="color: rgb(61, 142, 185);">header</span>: <span style="color: rgb(209, 72, 65);">&apos;Toggleable FieldSet&apos;,</span><br>&nbsp; <span style="color: rgb(61, 142, 185);">content</span>:<span style="color: rgb(209, 72, 65);"> &apos;Lorem ipsum dolor sit amet consectetur&apos;,</span><br>};</div>',
};
