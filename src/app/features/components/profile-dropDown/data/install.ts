import { createImport } from '@factories/index';

export const profileDropInstall = {
  import: createImport([
    {
      import: 'AssafProfileDropdownModule',
      from: 'assaf-prime-lib/@components/@profile-dropdown',
    },
  ]),
  htmlUse: `<assaf-profile-dropdown [menuItems]="data">
</assaf-profile-dropdown>`,
  tsUse: `<div>
  <div>&nbsp; <span style="color: #e03e2d;"><strong>data: </strong></span><span style="color: rgb(0, 168, 133);"><strong>MenuItem[]</strong></span><span style="color: #e03e2d;"><strong>&nbsp;</strong></span>= [</div>
  <div>&nbsp; &nbsp; { <span style="color: #3598db;"><strong>label:</strong></span> &apos;1tex&apos;,<span style="color: #3598db;">&nbsp;<strong>icon:</strong></span> &apos;pi pi-bolt&apos; },</div>
  <div>&nbsp; &nbsp; { <span style="color: #3598db;"><strong>label:</strong></span> &apos;2text&apos;,<span style="color: #3598db;">&nbsp;<strong>icon:</strong></span> &apos;pi pi-bolt&apos; },</div>
  <div>&nbsp; &nbsp; { <span style="color: #3598db;"><strong>label:</strong></span> &apos;3text&apos;, <span style="color: #3598db;"><strong>icon:</strong></span> &apos;pi pi-bolt&apos; },</div>
  <div>&nbsp; &nbsp; { <span style="color: #3598db;"><strong>label</strong></span>: &apos;4text&apos;,<span style="color: #3598db;"><strong>&nbsp;icon:</strong></span> &apos;pi pi-bolt&apos; },</div>
  <div>&nbsp; &nbsp; { <span style="color: #3598db;"><strong>label:</strong></span> &apos;5text&apos;,<span style="color: #3598db;"><strong>&nbsp;icon:</strong></span> &apos;fa-mail-reply&apos; },</div>
  <div>&nbsp; ];</div>
</div>`,
};
