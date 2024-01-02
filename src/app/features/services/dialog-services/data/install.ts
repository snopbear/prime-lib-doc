import { createBasicClass } from '@factories/index';

export const install = {
  providers: `<div style="margin: 5px 0;"><div><div><span style="color: #b96ad9;">import </span>{ <span style="color: #169179;">DialogService</span> } <span style="color: #b96ad9;">from</span> <span style="color: #e03e2d;">'primeng/dynamicdialog'</span>;</div><div>@<span style="color: #169179;">NgModule({
</span> <span style="color: #3598db;">providers</span>: <span style="color: #b96ad9;">[
    <span style="color: #169179;">DialogService</span>
]</span> <span style="color: #169179;">
})</span></div></div></div><div style="margin: 5px 0;"><span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span> <span style="color: #169179;">AppModule</span> { }</div>`,

  inject: createBasicClass(
    [
      {
        import: 'DynamicDialogService',
        from: 'assaf-prime-lib/services',
      },
    ],
    `<p><span style="color: rgb(85, 57, 130);">    constructor (private </span> <span style="color: #169179;">__dialog</span>: <span style="color: #169179;">DynamicDialogService</span><span style="color: #b96ad9;">){}
        `
  ),
  html: `<!-- CallerComponent HTML -->
<assaf-button label="click here" (click)="dispalyDialog()"></assaf-button>

<!-- DialogExampleComponent HTML -->
<section class="text-center">
    <p class="mb-4">{{__dialog.getData()}}</p>
    <assaf-button label="close" (click)="closeDialog()"></assaf-button>
</section>`,
  ts: createBasicClass(
    [{ import: 'DisplayService', from: 'assaf-prime-lib' }],
    `<p><span style="font-size: 12pt;"><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span>(<span style="color: #b96ad9;">private&nbsp;</span>_dialog:<span style="color: #2dc26b;">DynamicDialogService</span>){}</span><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp;&nbsp;</span><br><span style="color: #808080;">&lt;!-- showDialog Method =&gt; added in CallerComponent Ts file--&gt;</span><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp;</span><br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; displayDialog()</span><span style="color: rgb(0, 0, 0);">{</span> &nbsp;<br> <span style="color: #3598db;">&nbsp; &nbsp; &nbsp; this</span>.<span style="color: #b96ad9;">dialog</span>.<span style="color: rgb(243, 121, 52);">showDialog(</span><span style="text-decoration: underline; color: #008000;">DialogExampleComponent</span>,<span style="color: rgb(0, 0, 0);">&apos;Hello World&nbsp;</span><span style="color: rgb(226, 80, 65);">❤</span><span style="color: rgb(0, 0, 0);">!</span><span style="color: #f5bd07;">&apos;</span>,<span style="color: #670f96;">true</span>,<span style="color: rgb(0, 0, 0);">&quot;<br>        Basic Dialog&quot;,&quot;max-w-xl mx-auto&quot;</span><span style="color: rgb(243, 121, 52);">)</span>;<br><span style="color: rgb(0, 0, 0);">&nbsp; &nbsp; }</span><br><span style="color: #808080;">&lt;!-- closeDialog Method =&gt; added in DialogExampleComponent Ts file--&gt;</span><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp;&nbsp;</span><br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; closeDialog()</span><span style="color: rgb(0, 0, 0);">{</span> &nbsp;<br><span style="color: #3598db;">&nbsp; &nbsp; &nbsp; this</span>.<span style="color: #b96ad9;">_dialog</span>.<span style="color: rgb(243, 121, 52);">closeDialog()</span>;<span style="color: #169179;">&nbsp;</span><br><span style="color: #169179;">&nbsp; &nbsp;&nbsp;</span><span style="color: rgb(0, 0, 0);">}</span><span style="color: #169179;"><br></span></p>`
  ),
};
