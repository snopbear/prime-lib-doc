import { createBasicClass } from '@factories/index';

export const RadioButtonData = {
  // Data
  data: [
    { key: 'red', value: '1' },
    { key: 'green', value: '2' },
    { key: 'black', value: '3' },
    { key: 'blue', value: '4' },
    { key: 'white', value: '5' },
  ],
  // Types
  radioButtonsData: {
    basic: {
      name: 'Dynamic Values',
      html: `<form [formGroup]="form">
    <assaf-radio-button controlName="city"
        [data]="data" class="radio" >
    </assaf-radio-button>
</form> `,
      ts: createBasicClass(
        [
          {
            import: ' FormBuilder, FormGroup, Validators',
            from: '@angular/forms',
          },
          {
            import: 'GeneralItem',
            from: 'assaf-prime-lib/models',
          },
        ],
        `<p><span style="color: rgb(0, 168, 133);">&nbsp; &nbsp; data</span> : <span style="color: rgb(0, 168, 133);">Array</span> &lt;<span style="color: rgb(85, 57, 130);">GeneralItem</span>&gt; = [<br> &nbsp; &nbsp;  { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Red&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;1&apos; },<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Green&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;2&apos; },<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Black&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;3&apos; },<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Blue&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;4&apos; },<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;White&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;5&apos; },<br>&nbsp; &nbsp; ]<br><span style="color: rgb(0, 168, 133);">&nbsp; &nbsp; form</span>!: <span style="color: rgb(0, 168, 133);">FormGroup</span>;</p>
    <p><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span> (<span style="color: rgb(147, 101, 184);">private</span>&nbsp; _fb:&nbsp;<span style="color: rgb(0, 168, 133);">FormBuilder</span>) {<br><span style="color: rgb(0, 168, 133);">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{<br>&nbsp; &nbsp; &nbsp; &nbsp; color: [],<br> &nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</p>`
      ),
    },
    handelError: {
      name: 'Error Handeling',
      html: `<form [formGroup]="form">
    <assaf-radio-button controlName="city"
        [data]="data" class="radio" >
    </assaf-radio-button>
    <assaf-button label="Submit"
        (click)="submitForm()" btnType="submit" >
    </assaf-button>
</form> `,
      ts: createBasicClass(
        [
          {
            import: ' FormBuilder, FormGroup, Validators',
            from: '@angular/forms',
          },
          { import: 'GeneralItem', from: 'assaf-prime-lib' },
        ],
        `<p><span style="color: rgb(0, 168, 133);">&nbsp; &nbsp; data</span> : <span style="color: rgb(0, 168, 133);">Array</span> &lt;<span style="color: rgb(85, 57, 130);">GeneralItem</span>&gt; = [<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Red&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;1&apos; },<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Green&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;2&apos; },<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Black&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;3&apos; },<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;Blue&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;4&apos; },<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(41, 105, 176);">key</span>: &apos;White&apos;,&nbsp;<span style="color: rgb(41, 105, 176);">value</span>: &apos;5&apos; },<br>&nbsp; &nbsp; ]<br><span style="color: rgb(0, 168, 133);">&nbsp; &nbsp; form</span>!: <span style="color: rgb(0, 168, 133);">FormGroup</span>;</p>
        <p><span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; constructor</span> (<span style="color: rgb(147, 101, 184);">private</span>&nbsp; _fb:&nbsp;<span style="color: rgb(0, 168, 133);">FormBuilder</span>) {<br><span style="color: rgb(0, 168, 133);">&nbsp; &nbsp; &nbsp; this.form</span> = this._fb.<span style="color: rgb(243, 121, 52);">group(</span>{<br>&nbsp; &nbsp; &nbsp; &nbsp; color: [],<br>&nbsp; &nbsp; &nbsp; }<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp; }</p>
        <div><span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; submitForm()</span>{<br><span style="color: rgb(26, 188, 156);">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="color: rgb(85, 57, 130);">const</span> <span style="color: rgb(0, 168, 133);">formStatus</span>= <span style="color: rgb(26, 188, 156);">this.form</span>.valid;<br><span style="color: rgb(26, 188, 156);">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="color: rgb(85, 57, 130);">const</span> <span style="color: rgb(0, 168, 133);">value</span> = <span style="color: rgb(26, 188, 156);">this.form</span>.<span style="color: rgb(243, 121, 52);">get(</span><span style="color: rgb(147, 101, 184);">&apos;ColorWithErrorHandel&apos;</span><span style="color: rgb(243, 121, 52);">)</span>?.value;&nbsp;<br><span style="color: rgb(26, 188, 156);">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="color: rgb(85, 57, 130);">if</span>(<span style="color: rgb(0, 168, 133);">formStatus</span>){<br> <span style="color: rgb(0, 168, 133);">&nbsp; &nbsp; &nbsp; &nbsp; this.toaster.</span><span style="color: rgb(243, 121, 52);">displayToast(<br></span><span style="color: rgb(147, 101, 184);">&nbsp; &nbsp; &nbsp; &nbsp; &apos;success&apos;,&apos;Selected value is :</span> &apos;, value<span style="color: rgb(243, 121, 52);">)</span><br>&nbsp; &nbsp; &nbsp; }<span style="color: rgb(85, 57, 130);">else</span>{<br> <span style="color: rgb(0, 168, 133);">&nbsp; &nbsp; &nbsp; &nbsp; this.toaster</span>.<span style="color: rgb(243, 121, 52);">displayToast( &nbsp;<br></span><span style="color: rgb(147, 101, 184);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&apos;error&apos;</span>,<span style="color: rgb(147, 101, 184);">&apos;Please Select Value&apos;</span><span style="color: rgb(243, 121, 52);">)</span><br>&nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp;}</div>`
      ),
    },
  },
};
