import { createBasicClass, getToastPosition } from '@factories/index';
import { ToasterProperties } from '@models/interfaces/index';

export const ToasterExamples: ToasterProperties[] = [
  {
    title: 'Basic',
    key: '1',
    messageSeverity: 'success',
    severity: 'success',
    message: 'Show Success Message',
    htmlCode: `<assaf-button severity="success" 
    (click)="showToast()" label="Show Success Message"> 
<assaf-toast key="1"></assaf-toast>`,
    tsCode: createBasicClass(
      [
        {
          import: 'DisplayService ',
          from: '@assaf-garage/assaf-core-library/services',
        },
      ],
      `<p><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;"> (private&nbsp;</span> <span style="color: #169179;">__toast</span>:&nbsp;<span style="color: #169179;">DisplayService</span><span style="color: #b96ad9;">){}</span><br><span style="color: #b96ad9;"><span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; showToast(){</span>&nbsp;</span><br><span style="color: #b96ad9;">&nbsp; &nbsp; &nbsp;&nbsp;</span>this.<span style="color: #169179;">__toast.</span><span style="color: rgb(243, 121, 52);">displayToast(</span>&apos;success&apos;, &apos;Show Success Message&apos;,'', &apos;1&apos;<span style="color: rgb(243, 121, 52);">)</span>;&nbsp;<br><span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; }</span></p>
    `
    ),
  },
  {
    title: 'Position',
    key: '2',
    messageSeverity: 'warn',
    severity: 'warning',
    message: 'Show Warning Message',
    position: getToastPosition('top-center'),
    htmlCode: `<assaf-button severity="warning" 
    (click)="showToast()" label="Show Warning Message">
</assaf-button>
<assaf-toast key="2"
    position="top-center">
</assaf-toast>`,
    tsCode: createBasicClass(
      [{ import: 'DisplayService ', from: 'assaf-prime-lib/@/services' }],
      `<p><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">__toast</span>:&nbsp;<span style="color: #169179;">DisplayService</span><span style="color: #b96ad9;">){}</span><br><span style="color: #b96ad9;"><span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; showToast(){</span>&nbsp;</span><br><span style="color: #b96ad9;">&nbsp; &nbsp; &nbsp;&nbsp;</span>this.<span style="color: #169179;">__toast.</span><span style="color: rgb(243, 121, 52);">displayToast(</span>&apos;warn&apos;, &apos;Show Warning Message&apos;, '', &apos;2&apos;<span style="color: rgb(243, 121, 52);">)</span>;&nbsp;<br><span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; }</span></p>`
    ),
  },
  {
    title: 'Responsive Toast',
    key: '3',
    messageSeverity: 'info',
    severity: 'info',
    message: 'Show Responsive Toast',
    htmlCode: `
<assaf-button severity="success" 
    (click)="showToast()" label="Show Responsive Message"> 
</assaf-button>
<assaf-toast 
    key="3" 
    [isResponsive]="true"
    [breakpoint]="992"
></assaf-toast>`,
    tsCode: createBasicClass(
      [
        {
          import: 'DisplayService ',
          from: 'assaf-prime-lib/services',
        },
      ],
      `<p><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span><span style="color: #b96ad9;">&nbsp;(private&nbsp;</span> <span style="color: #169179;">__toast</span>:&nbsp;<span style="color: #169179;">DisplayService</span><span style="color: #b96ad9;">){}</span><br><span style="color: #b96ad9;"><span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; showToast(){</span>&nbsp;</span><br><span style="color: #b96ad9;">&nbsp; &nbsp; &nbsp;&nbsp;</span>this.<span style="color: #169179;">__toast.</span><span style="color: rgb(243, 121, 52);">displayToast(</span>&apos;info&apos;, &apos;Show Responsive Message&apos;, '', &apos;3&apos;<span style="color: rgb(243, 121, 52);">)</span>;&nbsp;<br><span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; }</span></p>`
    ),
  },
];
