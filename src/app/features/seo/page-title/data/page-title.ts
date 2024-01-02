import { createBasicClass, createImport } from '@factories/index';

export const usingPageTitleService = {
  howToUse: createBasicClass(
    [{ import: 'PageTitleService', from: 'assaf-prime-lib' }],
    `<p><span style="color: rgb(85, 57, 130);">    constructor (private </span> <span style="color: #169179;">__pageTitle</span>: <span style="color: #169179;">PageTitleService</span>)
    {
      <p><span style="font-size: 17px;"><span style="color: rgb(26, 188, 156);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;this.__pageTitle</span>.<span style="color: rgb(84, 172, 210);">setPageTitle</span>(<span style="color: rgb(226, 80, 65);">&quot;Page Title like About US&quot;</span>);&nbsp;</span></p>
    }</span>`
  ),
  eachPage: createBasicClass(
    [
      {
        import: 'Router, NavigationEnd, ActivatedRoute',
        from: '@angular/router',
      },
      {
        import: 'filter, map',
        from: 'rxjs/operators',
      },
    ],
    `<p><span style="font-size: 17px;"><span style="color: rgb(84, 172, 210);">title </span>= <span style="color: rgb(226, 80, 65);">&apos;angulartitle&apos;</span>;<br><br>&nbsp;&nbsp;<span style="color: rgb(84, 172, 210);"> ngOnInit</span>() { &nbsp; &nbsp;<br>&nbsp; &nbsp; <span style="color: rgb(147, 101, 184);">const </span><span style="color: rgb(84, 172, 210);">appTitle </span>= <span style="color: rgb(26, 188, 156);">this.__pageTitle</span>.<span style="color: rgb(84, 172, 210);">getPageTitle</span>(); &nbsp;<br>&nbsp; &nbsp; <span style="color: rgb(26, 188, 156);">this.router</span>.<span style="color: rgb(84, 172, 210);">events</span>.<span style="color: rgb(26, 188, 156);">pipe</span>(<span style="color: rgb(84, 172, 210);">filter</span>(<span style="color: rgb(26, 188, 156);">event </span>=&gt;<span style="color: rgb(226, 80, 65);"> event instanceof NavigationEnd</span>), <span style="color: rgb(84, 172, 210);">map</span>(() =&gt; { &nbsp;<br>&nbsp; &nbsp; <span style="color: rgb(147, 101, 184);">const </span><span style="color: rgb(44, 130, 201);">child </span>= <span style="color: rgb(26, 188, 156);">this.activatedRoute</span>.<span style="color: rgb(84, 172, 210);">firstChild</span>; &nbsp;<br><br>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(147, 101, 184);">if</span> (<span style="color: rgb(26, 188, 156);">child</span>.<span style="color: rgb(84, 172, 210);">snapshot</span>.<span style="color: rgb(26, 188, 156);">data</span>[<span style="color: rgb(226, 80, 65);">&apos;title&apos;</span>]) { &nbsp;<br> <span style="color: rgb(147, 101, 184);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;return </span><span style="color: rgb(26, 188, 156);">child</span>.<span style="color: rgb(84, 172, 210);">snapshot</span>.<span style="color: rgb(26, 188, 156);">data</span>[<span style="color: rgb(226, 80, 65);">&apos;title&apos;</span>]; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color: rgb(147, 101, 184);">return </span><span style="color: rgb(44, 130, 201);">appTitle</span>; &nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;})).<span style="color: rgb(84, 172, 210);">subscribe</span>((<span style="color: rgb(26, 188, 156);">ttl</span>: <span style="color: rgb(84, 172, 210);">string</span>) =&gt; {<span style="color: rgb(26, 188, 156);">this.__pageTitle</span>.<span style="color: rgb(84, 172, 210);">setPageTitle</span>(<span style="color: rgb(26, 188, 156);">ttl</span>); }); &nbsp;<br><br>} </span></p>`
  ),
  eachPageRoutes: `<p><span style="font-size: 17px; color: rgb(147, 101, 184);">const </span><span style="font-size: 17px;"><span style="color: rgb(84, 172, 210);">routes</span>: <span style="color: rgb(97, 189, 109);">Routes</span>= [ </span></p>
    <p><span style="font-size: 17px;">{ <span style="color: rgb(84, 172, 210);">path</span>:<span style="color: rgb(235, 107, 86);">&nbsp;</span><span style="color: rgb(226, 80, 65);">&apos;about</span><span style="color: rgb(235, 107, 86);">&apos;</span>, <span style="color: rgb(84, 172, 210);">component</span>: <span style="color: rgb(226, 80, 65);">AboutComponent</span>, <span style="color: rgb(84, 172, 210);">data</span>: {<span style="color: rgb(84, 172, 210);">title</span>: <span style="color: rgb(226, 80, 65);">&apos;About</span>&apos;}},&nbsp;</span></p>
    <p><span style="font-size: 17px;">{ <span style="color: rgb(84, 172, 210);">path</span>:<span style="color: rgb(226, 80, 65);"> &apos;profile&apos;</span>, <span style="color: rgb(84, 172, 210);">component</span>: <span style="color: rgb(226, 80, 65);">MyprofileComponent</span>, <span style="color: rgb(84, 172, 210);">data</span>: {<span style="color: rgb(84, 172, 210);">title</span>: <span style="color: rgb(226, 80, 65);">&apos;Profile&apos;</span>} },&nbsp;</span></p>
    <p><span style="font-size: 17px;">{ <span style="color: rgb(84, 172, 210);">path</span>: <span style="color: rgb(226, 80, 65);">&apos;myaccount&apos;</span>, <span style="color: rgb(84, 172, 210);">component</span>: <span style="color: rgb(226, 80, 65);">MyaccountComponent</span>, <span style="color: rgb(84, 172, 210);">data</span>: {<span style="color: rgb(84, 172, 210);">title</span>: <span style="color: rgb(226, 80, 65);">&apos;My Account&apos;</span>} },&nbsp;</span></p>
    <p><span style="font-size: 17px;">{ <span style="color: rgb(84, 172, 210);">path</span>: <span style="color: rgb(226, 80, 65);">&apos;dashboard&apos;</span>, <span style="color: rgb(84, 172, 210);">component</span>: <span style="color: rgb(226, 80, 65);">DashboardComponent</span>, <span style="color: rgb(84, 172, 210);">data</span>: {<span style="color: rgb(84, 172, 210);">title</span>: <span style="color: rgb(226, 80, 65);">&apos;Dashboard&apos;</span>} }&nbsp;</span></p>
    <p><span style="font-size: 17px;">];</span></p>`,

  lazyLoaded: createBasicClass(
    [
      {
        import: 'Router, NavigationEnd, ActivatedRoute',
        from: '@angular/router',
      },
      {
        import: 'filter, map',
        from: 'rxjs/operators',
      },
    ],
    `<p><span style="font-size: 17px;">&nbsp; &nbsp; <span style="color: rgb(147, 101, 184);">const </span><span style="color: rgb(84, 172, 210);">appTitle </span>=<span style="color: rgb(97, 189, 109);"> this.__pageTitle</span>.<span style="color: rgb(84, 172, 210);">getPageTitle</span>();&nbsp;</span></p>
    <p><span style="font-size: 17px;">&nbsp; &nbsp;<span style="color: rgb(26, 188, 156);">this.router</span> .<span style="color: rgb(84, 172, 210);">events</span>.<span style="color: rgb(26, 188, 156);">pipe</span>( <span style="color: rgb(84, 172, 210);">filter</span>(<span style="color: rgb(97, 189, 109);">event </span>=&gt; <span style="color: rgb(26, 188, 156);">event instance of NavigationEnd</span>),&nbsp;</span></p>
    <p><span style="font-size: 17px;">&nbsp; &nbsp; &nbsp;<span style="color: rgb(84, 172, 210);">map</span>(() =&gt; {&nbsp;</span></p>
    <p><span style="font-size: 17px;">&nbsp; &nbsp; &nbsp;<span style="color: rgb(84, 172, 210);">let&nbsp;</span><span style="color: rgb(26, 188, 156);">child&nbsp;</span>=<span style="color: rgb(26, 188, 156);">&nbsp;this.activatedRoute</span>.<span style="color: rgb(84, 172, 210);">firstChild</span>;</span></p>
    <p><span style="font-size: 17px;">&nbsp; &nbsp; &nbsp;<span style="color: rgb(84, 172, 210);">while&nbsp;</span>(<span style="color: rgb(26, 188, 156);">child</span>.<span style="color: rgb(84, 172, 210);">firstChild</span>) {</span><span style="font-size: 17px;">&nbsp; <span style="color: rgb(84, 172, 210);">child&nbsp;</span>= <span style="color: rgb(26, 188, 156);">child</span>.<span style="color: rgb(84, 172, 210);">firstChild</span></span><span style="font-size: 17px;">}</span></p>
    <p><span style="font-size: 17px;">&nbsp; &nbsp; <span style="color: rgb(147, 101, 184);">if</span><span style="color: rgb(84, 172, 210);">&nbsp;</span>(<span style="color: rgb(26, 188, 156);">child</span>.<span style="color: rgb(84, 172, 210);">snapshot</span>.<span style="color: rgb(26, 188, 156);">data</span>[<span style="color: rgb(226, 80, 65);">&apos;title&apos;</span>]) {</span></p>
    <p><span style="font-size: 17px;">&nbsp; &nbsp; <span style="color: rgb(147, 101, 184);">return </span><span style="color: rgb(26, 188, 156);">child</span>.<span style="color: rgb(84, 172, 210);">snapshot</span>.<span style="color: rgb(26, 188, 156);">data</span>[<span style="color: rgb(226, 80, 65);">&apos;title&apos;</span>];&nbsp;</span></p>
    <p><span style="font-size: 17px;">&nbsp; &nbsp;}&nbsp;</span></p>
    <p><span style="font-size: 17px;">&nbsp; &nbsp; <span style="color: rgb(147, 101, 184);">return </span><span style="color: rgb(84, 172, 210);">appTitle</span>;&nbsp;</span></p>
    <p><span style="font-size: 17px;">&nbsp; &nbsp; }) ).<span style="color: rgb(84, 172, 210);">subscribe</span>((<span style="color: rgb(26, 188, 156);">ttl</span>: <span style="color: rgb(84, 172, 210);">string</span>) =&gt; { <span style="color: rgb(26, 188, 156);">this.__pageTitle</span>.<span style="color: rgb(84, 172, 210);">setPageTitle</span>(<span style="color: rgb(26, 188, 156);">ttl</span>)});</span></p>`,
    'onInit'
  ),
  lazyLoadedModule: `<p><span style="color: rgb(147, 101, 184);">const&nbsp;</span><span style="color: rgb(84, 172, 210);">routes</span>: <span style="color: rgb(26, 188, 156);">Routes&nbsp;</span>= [&nbsp;</p>
  <div>{ &nbsp; &nbsp;<span style="color: rgb(84, 172, 210);">path</span>: &apos; &apos;, &nbsp;<span style="color: rgb(26, 188, 156);">loadChildren</span>: () =&gt; <span style="color: rgb(147, 101, 184);">import</span>(<span style="color: rgb(226, 80, 65);">&apos;./features/auth/auth.module</span>&apos;).<span style="color: rgb(84, 172, 210);">then</span>((<span style="color: rgb(26, 188, 156);">module</span>) =&gt;<br> <span style="color: rgb(26, 188, 156);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; module</span>.<span style="color: rgb(84, 172, 210);">AuthModule</span>), &nbsp;}</div>
  <p>];</p>`,
  lazyLoadedRoutes: `<p><span style="font-size: 17px;"><span style="color: rgb(147, 101, 184);">const </span><span style="color: rgb(84, 172, 210);">routes</span>: <span style="color: rgb(26, 188, 156);">Routes </span>= [&nbsp;</span></p>
  <div><span style="font-size: 17px;">{ <span style="color: rgb(84, 172, 210);">path</span>:<span style="color: rgb(226, 80, 65);"> &apos;profile&apos;</span>, <span style="color: rgb(84, 172, 210);">component</span>: <span style="color: rgb(226, 80, 65);">ProfileComponent</span>, <span style="color: rgb(84, 172, 210);">data</span>: {<span style="color: rgb(84, 172, 210);">title</span>: <span style="color: rgb(226, 80, 65);">&apos;User Profile&apos;</span>} },&nbsp;<br>{ <span style="color: rgb(84, 172, 210);">path</span>: <span style="color: rgb(226, 80, 65);">&apos;myaccount&apos;</span>, <span style="color: rgb(84, 172, 210);">component</span>: <span style="color: rgb(226, 80, 65);">ListusersComponent</span>, <span style="color: rgb(84, 172, 210);">data</span>: {<span style="color: rgb(84, 172, 210);">title</span>: <span style="color: rgb(226, 80, 65);">&apos;List Users&apos;</span>} }</span></div>
  <p><span style="font-size: 17px;">];</span></p>`,
};
