import { createBasicClass, createImport } from '@factories/index';

export const messageInstall = {
  import: createImport([
    {
      import: 'AssafMessagesModule',
      from: 'assaf-prime-lib/@components/@messages',
    },
  ]),
  htmlUse: '<assaf-messages key="1"></assaf-messages>',
  tsUse: createBasicClass(
    [
      {
        import: 'DisplayService',
        from: '@assaf-garage/assaf-core-library/services',
      },
    ],
    `<p><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; constructor</span> (<span style="color: rgb(41, 105, 176);">private</span> <span style="color: rgb(84, 172, 210);">__message</span>:&nbsp;<span style="color: rgb(0, 168, 133);">DisplayService</span>){}<br><span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; showMessage</span> ():&nbsp;<span style="color: rgb(0, 168, 133);">void</span>{<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; this</span>.<span style="color: rgb(84, 172, 210);">__message</span>.<span style="color: rgb(251, 160, 38);">displayMessage</span>(<span style="color: rgb(235, 107, 86);">&apos;error&apos;</span>, <span style="color: rgb(235, 107, 86);">&apos;Error&apos;</span>,&nbsp;<span style="color: rgb(235, 107, 86);">&apos;1&apos;</span>);<br>&nbsp; &nbsp; }</p>`
  ),
  serviceImport: `<p><span style="color: #b96ad9;">import</span> { <span style="color: rgb(0, 168, 133);">MessageService</span> } <span style="color: rgb(185, 106, 217);">from</span> <span style="color: rgb(224, 62, 45);">&apos;primeng/api&apos;</span>;</p>
  <p>&nbsp; &nbsp; &nbsp;<br>@<span style="color: #169179;">NgModule</span><span style="color: #b96ad9;">({</span><br> <span style="color: #3598db;">&nbsp;providers: [</span><br> &nbsp;<span style="color: rgb(0, 168, 133);">&nbsp; MessageService</span><span style="color: #169179;">,</span><br> <span style="color: #169179;">&nbsp; &nbsp; //...</span><br> <span style="color: #3598db;">&nbsp; ],</span><br><span style="color: #169179;">//...</span><br><span style="color: #b96ad9;">})</span><br><span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span> <span style="color: #169179;">AppModule</span> { }</p>`,
};
