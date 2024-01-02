export const scriptTag = {
  stepService: `import { Renderer2, Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";

  @Injectable({
    providedIn: "root",
  })
  export class InjectScriptTagService {

    constructor(@Inject(DOCUMENT) private document: Document) {}
    <div><span style="font-size: 17px; color: rgb(61, 142, 185);">/* &nbsp;<br>&nbsp;* Append the JS tag ** the Document Body. &nbsp;&nbsp;<br>&nbsp;* @param ******** The Angular Renderer &nbsp; &nbsp;<br>&nbsp;* @param src *** path to the ****** &nbsp; &nbsp;<br>&nbsp;* @returns the script element &nbsp; &nbsp;<br>&nbsp;*/</span></div>
    public loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
      const script = renderer.createElement("script");
<span style="font-size: 17px; color: rgb(44, 130, 201);"> // script.type = &quot;text/javascript&quot;</span>
    script.type = "application/ld+json";
    script.textContent = src;
      renderer.appendChild(this.document.body, script);
      return script;
    }
  }
  `,
  stepComponet: `
  <div><span style="font-size: 17px;">&nbsp;</span><span style="color: rgb(85, 57, 130); font-size: 17px;">import&nbsp;</span><span style="font-size: 17px;">{ <span style="color: rgb(41, 105, 176);">Renderer2&nbsp;</span>} <span style="color: rgb(226, 80, 65);">from&nbsp;</span><span style="color: rgb(250, 197, 28);">&quot;@angular/core&quot;</span>;&nbsp;<br> <span style="color: rgb(85, 57, 130);">import&nbsp;</span>{ <span style="color: rgb(41, 105, 176);">InjectScriptTagService&nbsp;</span>} <span style="color: rgb(226, 80, 65);">from</span><span style="color: rgb(250, 197, 28);">&nbsp;&quot;./inject-script-tag.service&quot;</span>;<br><br> <span style="color: rgb(84, 172, 210);">constructor</span>( <span style="color: rgb(255, 0, 0);">private&nbsp;</span><span style="color: rgb(251, 160, 38);">renderer</span>: <span style="color: rgb(41, 105, 176);">Renderer2</span>, <span style="color: rgb(255, 0, 0);">private&nbsp;</span><span style="color: rgb(251, 160, 38);">injectScriptTagService</span>:&nbsp;<span style="color: rgb(41, 105, 176);">InjectScriptTagService</span>){}&nbsp;<br><br> <span style="color: rgb(65, 168, 95);">ngOnInit</span>(): void { &nbsp;<br> this.<span style="color: rgb(251, 160, 38);">injectScriptTagService</span>.<span style="color: rgb(65, 168, 95);">loadJsScript</span>(<span style="color: rgb(251, 160, 38);">this.renderer</span>,&nbsp;<br> <span style="color: rgb(41, 105, 176);">JSON</span>.<span style="color: rgb(26, 188, 156);">stringify</span>(<span style="color: rgb(251, 160, 38);">&apos;assets/seo/meta-tags/schema-markup-small-content.json&apos;</span>)); &nbsp;<br>}</span></div>`,
  stepJson: ` {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Eshtri Aqar Company",
        "url": "https://eshtriaqar.com.eg/en/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://eshtriaqar.com.eg/ar/listings?{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }, `,
};
