// why i use access layer ?
//

import { createBasicClass, createImport } from '@factories/index';

// So with access layer you can change detection strategy that refresh only when internal changing for better performance.
// by putting  {changeDetection: ChangeDetectionStrategy.OnPush} in @cmponent  and use 'async' pipe to trigger the internal change.

export const AccessLayerInitialization = {
  defination: `<div><strong>Access Layer</strong> is a layer in your application that provides easy and simplified access&nbsp;<br>and perform CRUD operations to data stored in persistent storage.<br><br> <strong><span style="color: rgb(184, 49, 47);">Note</span></strong> : this service is injectable &quot;<strong>any</strong>&quot; this mean that to make separate version of this service&nbsp;<br>it must be used in a <strong>lazy loading</strong> modules to have diffrent <strong>State</strong> for every module. &nbsp; &nbsp;</div>`,
  benefits: {
    content: `<div>Angular refreshes the component when detecting any changes So any changes in the parent will make all children reloaded.&nbsp;<br>So with access layer you can change the detection strategy that refreshes only when internal changes for better performance.<br>and use &apos;<strong>async</strong>&apos; pipe for subscription to trigger the internal change.</div>`,
    code: `<div>@<span style="color: rgb(85, 57, 130);">Component</span>({ &nbsp; &nbsp;<br>&nbsp; &nbsp; //..&nbsp;<br>&nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">changeDetection</span>: ChangeDetectionStrategy.<span style="color: rgb(243, 121, 52);">OnPush</span><br>})</div>`,
  },
  setup: createImport([
    { import: 'HttpClientModule', from: '@angular/common/http' },
  ]),
  Import: createBasicClass(
    [
      {
        import: 'AccessLayerService',
        from: 'assaf-prime-lib/services',
      },
    ],
    `<p>&nbsp; &nbsp; <span style="color: rgb(184, 49, 47);">//Employee is an interface of objects that exists in the Array</span><br><span style="color: rgb(147, 101, 184);">&nbsp; &nbsp; </span><span style="color: rgb(85, 57, 130);">constructor</span>(<span style="color: rgb(147, 101, 184);">private</span> __access: <span style="color: rgb(65, 168, 95);">AccessLayerService</span> &lt;<span style="color: rgb(65, 168, 95);">Employee</span>&gt;){}</p>`
  ),
  initialize: createBasicClass(
    [
      {
        import: 'AccessLayerService',
        from: 'assaf-prime-lib/services',
      },
      { import: 'Observable', from: 'rxjs' },
    ],
    `<div><span style="color: rgb(184, 49, 47);">&nbsp; &nbsp; //Employee is an interface of objects that exists in the Array</span><br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span>(<span style="color: rgb(147, 101, 184);">private</span> __access: <span style="color: rgb(65, 168, 95);">AccessLayerService</span> &lt;<span style="color: rgb(65, 168, 95);">Employee</span>&gt;){<br><span style="color: rgb(65, 168, 95);">&nbsp; &nbsp; &nbsp; this.__access</span>.<span style="color: rgb(243, 121, 52);">initService(</span>{<br> <span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; get</span>:<span style="color: rgb(0, 0, 0);">&apos;get-endpoint&apos;,</span> &nbsp;<br> <span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; post</span>: <span style="color: rgb(0, 0, 0);">&apos;post-endpoint&apos;, &nbsp;</span><br> <span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; put</span>: &apos;<span style="color: rgb(0, 0, 0);">update-endpoint&apos;</span>, &nbsp;<br> <span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; &nbsp; delete</span>: <span style="color: rgb(0, 0, 0);">&apos;delete-endpoint&apos; </span>&nbsp;<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span><br>&nbsp; &nbsp; }<br><span style="color: rgb(184, 49, 47);">&nbsp; &nbsp; //&nbsp;</span><span style="color: rgb(0, 0, 0);"><strong>data$</strong></span><span style="color: rgb(184, 49, 47);">&nbsp;is an observable return of the data when subscribing to it by&nbsp;</span><br><span style="color: rgb(184, 49, 47);"><strong>&nbsp; &nbsp; databservable$</strong> that helps me to access the state of the array&nbsp;</span><br><span style="color: rgb(65, 168, 95);">&nbsp; &nbsp; data$</span>:<span style="color: rgb(65, 168, 95);">Observable</span> &lt;<span style="color: rgb(147, 101, 184);">Employee[]</span>&gt; =&nbsp;<span style="color: rgb(65, 168, 95);">this.__access</span>.dataObservable$<br><br></div>`
  ),

  Management: `<div><br><span style="color: rgb(184, 49, 47);">// To create a new employee</span><br> &nbsp; &nbsp; this.<span style="color: rgb(41, 105, 176);">__access</span>.<span style="color: rgb(243, 121, 52);">create(</span>employee<span style="color: rgb(243, 121, 52);">)</span>;<br><span style="color: rgb(184, 49, 47);">// To get the data from Api</span> <br> &nbsp; &nbsp; this.<span style="color: rgb(41, 105, 176);">__access</span>.<span style="color: rgb(243, 121, 52);">load()</span>;<br><span style="color: rgb(184, 49, 47);">// To Delete employee</span><br> &nbsp; &nbsp; this.<span style="color: rgb(41, 105, 176);">__access</span>.<span style="color: rgb(243, 121, 52);">delete(</span>employee<span style="color: rgb(243, 121, 52);">)</span>;<br><span style="color: rgb(184, 49, 47);">// To update an existing employee</span> <br> &nbsp; &nbsp; this.<span style="color: rgb(41, 105, 176);">__access</span>.<span style="color: rgb(243, 121, 52);">update(</span>employee<span style="color: rgb(243, 121, 52);">)</span>;&nbsp;<br><span style="color: rgb(184, 49, 47);">// To fill state with employees array</span><br> &nbsp; &nbsp; this.<span style="color: rgb(41, 105, 176);">__access</span>.<span style="color: rgb(243, 121, 52);">fillState(</span>arrayOfEmployees<span style="color: rgb(243, 121, 52);">)</span></div>
<div><br></div>`,
};
