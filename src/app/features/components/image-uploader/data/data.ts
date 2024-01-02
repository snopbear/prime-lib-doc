import { createBasicClass } from "@factories/index";

export const imageUploaderData = [
        {
            title: 'Basic',
            tag: '<assaf-image-uploader></assaf-image-uploader>',
            styleClass:'mx-auto',
            width:'100px',
            height:'100px'
        },
        {
            title: 'Style Uploader Image',
            tag:
                `<assaf-image-uploader 
    overlayIcon="pi-times" 
    overlayClass="overlayClass"
    activeImageClass="activeImageClass" 
    styleClass="styleClass"
    uploaderClass="uploaderClass"
>
</assaf-image-uploader>`,
            styleClass:'styleClass',
            activeImageClass:'activeImageClass',
            overlayClass:'overlayClass',
            uploaderClass:'uploaderClass',
            width:'100px',
            height:'100px'
        },
        {
            title:'Edit Image uploader Width & Height',
            tag:` <assaf-image-uploader width="300px" 
    height="150px" styleClass="mx-auto">
</assaf-image-uploader>`,
            styleClass:'mx-auto',
            width:'300px',
            height:'150px'
        },
        {
            title: 'Reactive Form',
            tag:
`<form [formGroup]="form" (submit)="uploadImage()" class="text-center">
    <assaf-image-uploader styleClass="mx-auto" 
        [uploadIcon]="view.uploadIcon"
        controlName="file">
    </assaf-image-uploader>
    <assaf-button btnType="submit" severity="info" 
    styleClass="my-2" label="Submit"></assaf-button>
</form>`,

            uploadIcon: 'pi-cloud-upload',
            ts:createBasicClass([{import:'FormBuilder, FormGroup',from:'@angular/forms'},{import:'DisplayService',from:'@assaf-garage/assaf-core-library'}],
            `<span style="color: rgb(61, 142, 185);">form</span>!: <span style="color: #169179;">FormGroup</span>;<p><span style="color: #b96ad9;">constructor (private </span> <span style="color: #169179;">_fb</span>: <span style="color: #169179;">FormBuilder</span><span style="color: #b96ad9;"><span>,</span>
            private </span> <span style="color: #169179;">__toastService</span>: <span style="color: #169179;">DisplayService</span><span style="color: #b96ad9;">) {
</span><span style="color: #169179;">this.form</span> = this._fb.group({
        file: [],
    });
}</p><div><span style="color: #b96ad9;">uploadImage()</span>{<br> <span style="color: rgb(85, 57, 130);">&nbsp; &nbsp; &nbsp; if(</span>!<span style="color: rgb(65, 168, 95);">this.form</span>.controls[&apos;<span style="color: rgb(41, 105, 176);">file</span>&apos;].value<span style="color: rgb(243, 121, 52);">)</span><span style="color: rgb(85, 57, 130);">{</span><br> <span style="color: rgb(65, 168, 95);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;this.__toastService.</span><span
style="color: #b96ad9;">displayToast(</span>&apos;error&apos;,&apos;plz upload image! 🤔❌&apos;<span style="color: rgb(243, 121, 52);">)</span><br>      }</div><div>      else {</span><br> <span style="color: rgb(65, 168, 95);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;this.__toastService.</span><span style="color: #b96ad9;">displayToast(</span>&apos;success&apos;,&apos;image Loaded Succefully! 👍&apos;<span style="color: rgb(243, 121, 52);">)</span>;<br>&nbsp; &nbsp;   }<br>}</div><div><br></div>
`)
        },
]
