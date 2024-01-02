import { createBasicClass } from '@factories/index';

export const displayExamples = {
  htmlMessage: `<assaf-button label="Show Message" (click)="showMeassage()" severity="info"></assaf-button>
<assaf-messages key="keyMessage"></assaf-messages>`,
  tsMessage: createBasicClass(
    [],
    `<p><span style="font-size: 12pt;"><span style="color: #3598db;">&nbsp; &nbsp; </span><span style="color: rgb(85, 57, 130);">constructor</span>(<span style="color: #b96ad9;">private&nbsp;</span>__display:<span style="color:  #2dc26b;">DisplayService</span>){}</span></p>
    <div><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; showMeassage()&nbsp;</span>{&nbsp;<br><span style="color: #3598db;">&nbsp; &nbsp; &nbsp; this</span>._display.<span style="color: rgb(243, 121, 52);">displayMessage(</span><br><span style="color: rgb(243, 121, 52);">&nbsp;&nbsp;</span>&nbsp; &nbsp; &nbsp; &apos;<span style="color: #2dc26b;">info</span>&apos;, &apos;<span style="color: #2dc26b;">Message</span>&apos;, &apos;<span style="color: #2dc26b;">keyMessage</span>&apos;, &apos;&nbsp;<span style="color: #2dc26b;">Show you how to use Display Message</span>&apos;&nbsp;<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; &nbsp; )</span>;&nbsp;<br>&nbsp; &nbsp; }</div>`
  ),
  htmlToast: `<assaf-button label="Show Toast" (click)="showToast()" severity="success"></assaf-button>`,
  tsToast: createBasicClass(
    [],
    `<p><span style="font-size: 12pt;"><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span>(<span style="color: #b96ad9;">private&nbsp;</span>__display:<span style="color: #2dc26b;">DisplayService</span>){}</span></p>
    <div><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; showToast()</span> {<br> <span style="color: #3598db;">&nbsp; &nbsp; &nbsp; this</span>._display.<span style="color: rgb(243, 121, 52);">displayToast(</span><br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span> &apos;<span style="color: #2dc26b;">success</span>&apos;, &apos;<span style="color: #2dc26b;">Toast</span>&apos;, &apos;<span style="color: #2dc26b;">Show how to use Display Toast</span>&apos;&nbsp;<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; &nbsp; )</span>;<br>&nbsp; &nbsp; }</div>`
  ),
};
