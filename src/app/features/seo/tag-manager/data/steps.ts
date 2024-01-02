import { createBasicClass } from '@factories/index';

export const TagManagerSteps: any = {
  setup: `&lt; script defer &gt;
  window.dataLayer = window.dataLayer || [];
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-XXXX");
  &lt; /script &gt;`,
  services: `<div><span style="color: rgb(85, 57, 130);">import</span> { <span style="color: rgb(65, 168, 95);">Injectable</span> } <span style="color: rgb(85, 57, 130);">from</span> &quot;<span style="color: rgb(184, 49, 47);">@angular/core</span>&quot;;<br><span style="color: rgb(65, 168, 95);">@Injectable</span>({&nbsp;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; providedIn</span>: &quot;root&quot;,<br>})<br><span style="color: rgb(147, 101, 184);">export</span> <span style="color: rgb(41, 105, 176);">class</span> <span style="color: rgb(65, 168, 95);">DataLayerService</span> {&nbsp;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; private</span> <span style="color: rgb(41, 105, 176);">window : </span><span style="color: rgb(65, 168, 95);">any</span>;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span>() {<br><span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; &nbsp; // intialize the window&nbsp;</span><br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; this</span>.<span style="color: rgb(41, 105, 176);">window</span> =&nbsp;<span style="color: rgb(184, 49, 47);">window</span>;&nbsp;<br>&nbsp; &nbsp; }<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; createLog(</span><span style="color: rgb(41, 105, 176);">obj</span>: <span style="color: rgb(65, 168, 95);">any</span><span style="color: rgb(243, 121, 52);">)</span>: void {<br><span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; //you can add any attributes you want to send it</span><br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; this</span>.<span style="color: rgb(243, 121, 52);">executeHit(</span><span style="color: rgb(41, 105, 176);">obj</span><span style="color: rgb(243, 121, 52);">)</span>;&nbsp;<br>&nbsp; &nbsp; }<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; private</span> <span style="color: rgb(243, 121, 52);">executeHit(</span><span style="color: rgb(41, 105, 176);">obj</span>: <span style="color: rgb(65, 168, 95);">any</span><span style="color: rgb(243, 121, 52);">)</span> {&nbsp;<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; if&nbsp;</span>(<span style="color: rgb(41, 105, 176);">obj</span>) <span style="color: rgb(85, 57, 130);">this</span>.<span style="color: rgb(41, 105, 176);">window</span>.<span style="color: rgb(44, 130, 201);">dataLayer</span>?.<span style="color: rgb(243, 121, 52);">push(</span><span style="color: rgb(41, 105, 176);">obj</span><span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }<br>}</div>`,
  logPageUage: createBasicClass(
    [
      { import: 'Component', from: '@angular/core' },
      {
        import: 'Router',
        from: '@angular/router',
      },
      {
        import: 'DataLayerService',
        from: '../../services/dataLayer-service.service',
      },
    ],
    `<p><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span> (<span style="color: rgb(147, 101, 184);">private</span> <span style="color: rgb(41, 105, 176);">router</span> : &nbsp;<span style="color: rgb(65, 168, 95);">Router&nbsp;</span>,<span style="color: rgb(65, 168, 95);">&nbsp;</span><span style="color: rgb(147, 101, 184);">private</span><span style="color: rgb(65, 168, 95);">&nbsp;</span><span style="color: rgb(41, 105, 176);">_dataLayerService</span><span style="color: rgb(65, 168, 95);">&nbsp;</span>:<span style="color: rgb(65, 168, 95);">&nbsp;DataLayerService</span>){}<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; ngOnInit()</span>: void{<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; this</span>.<span style="color: rgb(41, 105, 176);">router</span>.<span style="color: rgb(41, 105, 176);">events</span>.<span style="color: rgb(243, 121, 52);">subscribe(</span>(<span style="color: rgb(41, 105, 176);">event :&nbsp;</span><span style="color: rgb(65, 168, 95);">any</span>)&nbsp;<span style="color: rgb(184, 49, 47);">=&gt;</span> {<br> &nbsp; &nbsp; &nbsp; if (<span style="color: rgb(41, 105, 176);">event</span> <span style="color: rgb(85, 57, 130);">instanceof</span> <span style="color: rgb(41, 105, 176);">NavigationEnd</span>) {&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp;<span style="color: rgb(85, 57, 130);">const</span> <span style="color: rgb(41, 105, 176);">obj</span> = {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(44, 130, 201);">event</span>: &quot;content-view&quot;,&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(44, 130, 201);">pageName</span>: event.url<br>&nbsp; &nbsp; &nbsp; &nbsp; };&nbsp;<br><span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; &nbsp; &nbsp; //if our event is of our interest call our dataLayer service&apos;s page view&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; //method to executeHit with the url value.</span><br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; &nbsp; this</span>.<span style="color: rgb(41, 105, 176);">_dataLayerService</span>.<span style="color: rgb(243, 121, 52);">createLog(</span>obj<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; &nbsp; }<br> &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span></span>`,
    ' OnInit'
  ),
  logEventUage: createBasicClass(
    [
      { import: 'Component', from: '@angular/core' },
      {
        import: 'DataLayerService',
        from: '../../services/dataLayer-service.service',
      },
    ],
    `<p><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span> (<span style="color: rgb(85, 57, 130);">private</span> <span style="color: rgb(41, 105, 176);">_dataLayerService</span> :&nbsp;<span style="color: rgb(65, 168, 95);">DataLayerService</span>){}<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; onLoginBtnClick()</span>{<br>&nbsp; &nbsp; &nbsp; <span style="color: rgb(85, 57, 130);">const</span> <span style="color: rgb(41, 105, 176);">obj</span> =&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color: rgb(44, 130, 201);">event&nbsp;</span>: &apos;click&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color: rgb(44, 130, 201);">category&nbsp;</span>: &apos;submitButtons&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color: rgb(44, 130, 201);">action&nbsp;</span>: &apos;login&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color: rgb(44, 130, 201);">label&nbsp;</span>:&nbsp; &quot;Login button&quot;<br>&nbsp; &nbsp; &nbsp; &nbsp; }<br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; this</span>.<span style="color: rgb(41, 105, 176);">_dataLayerService</span>.<span style="color: rgb(243, 121, 52);">createLog(</span>obj<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</p>`
  ),
};
