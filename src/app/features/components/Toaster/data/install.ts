import { createImport } from '@factories/index';

export const toastInstall = {
  import: createImport([
    { import: 'AssafToastModule', from: 'assaf-prime-lib/@components/@toast' },
  ]),
  htmlUse: '<assaf-toast></assaf-toast>',
  tsUse: `<p><span style="color: rgb(41, 105, 176);">constructor</span> (<span style="color: rgb(41, 105, 176);">private</span> <span style="color: rgb(84, 172, 210);">__toast</span>: <span style="color: rgb(0, 168, 133);">DisplayService</span>){}</p>
  <p><span style="color: rgb(251, 160, 38);">showToast</span> (): <span style="color: rgb(0, 168, 133);">void</span>{</p>
  <div>&nbsp; <span style="color: rgb(41, 105, 176);">this</span>.<span style="color: rgb(84, 172, 210);">__toast</span>.<span style="color: rgb(251, 160, 38);">displayToast</span>(<span style="color: rgb(235, 107, 86);">&apos;error&apos;</span>, <span style="color: rgb(235, 107, 86);">&apos;Error&apos;</span>);</div>
  <p>}</p>`,
  serviceImport: `<p><span style="color: #b96ad9;">import</span> { <span style="color: rgb(0, 168, 133);">MessageService</span> } <span style="color: rgb(185, 106, 217);">from</span> <span style="color: rgb(224, 62, 45);">&apos;primeng/api&apos;</span>;</p>
  <p>&nbsp; &nbsp; &nbsp;<br>@<span style="color: #169179;">NgModule</span><span style="color: #b96ad9;">({</span><br> <span style="color: #3598db;">&nbsp;providers: [</span><br> &nbsp;<span style="color: rgb(0, 168, 133);">&nbsp; MessageService</span><span style="color: #169179;">,</span><br> <span style="color: #169179;">&nbsp; &nbsp; //...</span><br> <span style="color: #3598db;">&nbsp; ],</span><br><span style="color: #169179;">//...</span><br><span style="color: #b96ad9;">})</span><br><span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span> <span style="color: #169179;">AppModule</span> { }</p>`,
};
