import { createBasicClass } from '@factories/index';

export const hotjarSteps = {
  install: `npm install ngx-hotjar`,
  import: `<p><span style="color: rgb(85, 57, 130);">import</span> { <span style="color: rgb(65, 168, 95);">NgxHotjarModule</span>,<span style="color: rgb(65, 168, 95);">NgxHotjarRouterModule</span>} <span style="color: rgb(85, 57, 130);">from</span> &quot;<span style="color: rgb(184, 49, 47);">ngx-hotjar</span>&quot;;<br>//.&nbsp;<br>//.&nbsp;<br><span style="color: rgb(65, 168, 95);">@NgModule</span><span style="color: rgb(243, 121, 52);">(</span>{<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; declarations</span>: [],<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; imports</span>: [<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; NgxHotjarModule</span>.<span style="color: rgb(243, 121, 52);">forRoot(</span>YOUR_HOTJAR_SITE_ID<span style="color: rgb(243, 121, 52);">)</span>,&nbsp;<br><span style="color: rgb(41, 105, 176);">&nbsp; &nbsp; &nbsp; NgxHotjarRouterModule</span>,&nbsp;<br>&nbsp; &nbsp; &nbsp; //..&nbsp;<br>&nbsp; &nbsp; ],&nbsp;<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; providers</span>: [],<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; bootstrap</span>: [<span style="color: rgb(41, 105, 176);">AppComponent</span>],<br>}<span style="color: rgb(243, 121, 52);">)&nbsp;</span><br><span style="color: rgb(85, 57, 130);">export</span> <span style="color: rgb(44, 130, 201);">class</span> <span style="color: rgb(65, 168, 95);">AppModule</span> {}</p>`,
  usage: createBasicClass(
    [
      { import: 'Component', from: '@angular/core' },
      {
        import: 'DataLayerService',
        from: '../../services/dataLayer-service.service',
      },
    ],
    `<p><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span> (<span style="color: rgb(85, 57, 130);">private</span> <span style="color: rgb(41, 105, 176);">hjService</span> :&nbsp;<span style="color: rgb(65, 168, 95);">NgxHotjarService</span>){}<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; onLoginBtnClick()</span>{<br> <span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; &nbsp;// you can add any attributes to &quot;hj&quot; function</span><br><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; this</span>.<span style="color: rgb(41, 105, 176);">hjService</span>.<span style="color: rgb(243, 121, 52);">hj(</span>&quot;login&quot;, &quot;LoginButton&quot;<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</p>`
  ),
};
