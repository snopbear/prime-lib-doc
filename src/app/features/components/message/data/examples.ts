import { createBasicClass } from '@factories/index';
import { MessageProperties } from '@models/interfaces/index';

export const MessageExamples: MessageProperties[] = [
  {
    title: 'Error Message',
    htmlCode: '<assaf-messages key="1"></assaf-messages>',
    tsCode: createBasicClass(
      [{ import: 'DisplayService', from: '@assaf-garage/assaf-core-library' }],
      `<p><span style="color: #b96ad9;">constructor (private </span> <span style="color: #169179;">__messageService</span>: <span style="color: #169179;">DisplayService</span><span style="color: #b96ad9;">) {
  </span>this.<span style="color: #169179;">__messageService.</span><span style="color: #b96ad9;">displayMessage(</span>'error', 'Error', '1'<span style="color: #b96ad9;">)</span>;
  <span style="color: #b96ad9;">}</span>
`
    ),
    key: '1',
  },
  {
    title: 'Warn Message',
    htmlCode: '<assaf-messages key="2"></assaf-messages>',
    tsCode: createBasicClass(
      [{ import: 'DisplayService', from: '@assaf-garage/assaf-core-library' }],
      `<p><span style="color: #b96ad9;">constructor (private </span> <span style="color: #169179;">__messageService</span>: <span style="color: #169179;">DisplayService</span><span style="color: #b96ad9;">) {
  </span>this.<span style="color: #169179;">__messageService.</span><span style="color: #b96ad9;">displayMessage(</span>'warn', 'Warn', '2'<span style="color: #b96ad9;">)</span>;
  <span style="color: #b96ad9;">}</span>
`
    ),
    key: '2',
  },
  {
    title: 'Success Message',
    htmlCode: '<assaf-messages key="3"></assaf-messages>',
    tsCode: createBasicClass(
      [{ import: 'DisplayService', from: '@assaf-garage/assaf-core-library' }],
      `<p><span style="color: #b96ad9;">constructor (private </span> <span style="color: #169179;">__messageService</span>: <span style="color: #169179;">DisplayService</span><span style="color: #b96ad9;">) {
  </span>this.<span style="color: #169179;">__messageService.</span><span style="color: #b96ad9;">displayMessage(</span>'success', 'Success', '3'<span style="color: #b96ad9;">)</span>;
  <span style="color: #b96ad9;">}</span>
`
    ),
    key: '3',
  },
  {
    title: 'Info Message',
    htmlCode: '<assaf-messages key="4"></assaf-messages>',
    tsCode: createBasicClass(
      [{ import: 'DisplayService', from: '@assaf-garage/assaf-core-library' }],
      `<p><span style="color: #b96ad9;">constructor (private </span> <span style="color: #169179;">__messageService</span>: <span style="color: #169179;">DisplayService</span><span style="color: #b96ad9;">) {
  </span>this.<span style="color: #169179;">__messageService.</span><span style="color: #b96ad9;">displayMessage(</span>'info', 'Info', '4'<span style="color: #b96ad9;">)</span>;
  <span style="color: #b96ad9;">}</span>
`
    ),
    key: '4',
  },
];

export const MessageBtnExample = {
  htmlCode: '<assaf-messages key="5" [closable]="false"></assaf-messages>',
  tsCode:createBasicClass(
    [{ import: 'DisplayService', from: '@assaf-garage/assaf-core-library' }],
    `<p><span style="color: #b96ad9;">constructor (private </span> <span style="color: #169179;">__messageService</span>: <span style="color: #169179;">DisplayService</span><span style="color: #b96ad9;">) {
</span>this.<span style="color: #169179;">__messageService.</span><span style="color: #b96ad9;">displayMessage(</span>'warn', 'Warn Message', '5'<span style="color: #b96ad9;">)</span>;
<span style="color: #b96ad9;">}</span>
`)

};
