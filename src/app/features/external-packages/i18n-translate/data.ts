import { createBasicClass, createImport } from '@factories/index';

export const gettingStartedSteps = {
  configuration: createImport([{import:'NgModule',from:'@angular/core'},
  {import:'BrowserModule',from:'@angular/platform-browser'},
  {import:'HttpClientModule, HttpClient',from:'@angular/common/http'},
  {import:'TranslateModule, TranslateLoader',from:'@ngx-translate/core'},
  {import:'TranslateHttpLoader',from:'@ngx-translate/http-loader'},]),

  translate: `npm install @ngx-translate/core --save 
npm install @ngx-translate/http-loader --save`,

  componentInstllation: createBasicClass([{import:'Component, OnInit',from:'@angular/core'},
  {import:' TranslateService',from:'@ngx-translate/core'},
  {import:'Language',from:'@models/index'}],`<div>&nbsp; &nbsp; get&nbsp;<span style="color: rgb(243, 121, 52);">language()</span> { &nbsp;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; return</span> <span style="color: rgb(41, 105, 176);">Language</span>;&nbsp;<br>&nbsp; &nbsp; }<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span>(<span style="color: rgb(147, 101, 184);">public</span> <span style="color: rgb(65, 168, 95);">translate</span>:&nbsp;<span style="color: rgb(65, 168, 95);">TranslateService</span>) {}<br> <span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; //#region Life Cycle Hooks &nbsp;</span><br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; ngOnInit()</span> { &nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; this.translate</span>.<span style="color: rgb(243, 121, 52);">setDefaultLang(</span><span style="color: rgb(0, 0, 0);">&apos;</span>en&apos;<span style="color: rgb(243, 121, 52);">)</span>;&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; this.translate</span>.<span style="color: rgb(243, 121, 52);">use(</span><span style="color: rgb(41, 105, 176);">this.__local</span>.<span style="color: rgb(243, 121, 52);">getItem(</span>&apos;lang&apos;<span style="color: rgb(243, 121, 52);">)</span>?.<span style="color: rgb(243, 121, 52);">toString()&nbsp;</span><span style="color: rgb(85, 57, 130);">||</span> &apos;en&apos;<span style="color: rgb(243, 121, 52);">)</span>;<br><span style="color: rgb(184, 49, 47);">&nbsp; &nbsp; &nbsp; /* &nbsp; &nbsp;The lang property sets or returns &nbsp;or set the value of an element&apos;s lang attribute. &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; The lang attribute specifies the element&apos;s language code, like &quot;en&quot; for English,<br>&nbsp; &nbsp; &nbsp; &quot;es&quot; for Spanish, or &quot;fr&quot; for French. &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; */ &nbsp;</span> &nbsp;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; document</span>.<span style="color: rgb(147, 101, 184);">documentElement</span>.lang = &nbsp;<span style="color: rgb(41, 105, 176);">this.__local</span>.<span style="color: rgb(243, 121, 52);">getItem(</span>&apos;lang&apos;<span style="color: rgb(243, 121, 52);">)</span>?.<span style="color: rgb(243, 121, 52);">toString()&nbsp;</span><span style="color: rgb(85, 57, 130);">||</span> &apos;en&apos;; &nbsp;<br>&nbsp; &nbsp; }&nbsp;<br><span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; //#endregion Life Cycle Hooks</span></div>`,'OnInit'),

  htmlUseage: `{{ "reusable-components.currency" | translate }}`,
  tsUseage: ` <div><span style="color: rgb(41, 105, 176);">title</span>: <span style="color: rgb(65, 168, 95);">this.__translate.</span><span style="color: rgb(243, 121, 52);">instant(</span>&apos;pages.my-requests.table.request-type&apos;<span style="color: rgb(243, 121, 52);">)</span></div>`,
};
