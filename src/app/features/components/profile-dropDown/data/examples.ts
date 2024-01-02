export const ProfileDropDownExamples = {
  basicHtmlCode:
`<assaf-profile-dropdown image="assets/image/aguero.png"
    label="Aguero" [menuItems]="data">
</assaf-profile-dropdown>`,
  basicTsCode:
    "<div><div>&nbsp; <span style='color: #e03e2d;'><strong>data </strong></span>= [</div><div>&nbsp; &nbsp; { <span style='color: #3598db;'><strong>label:</strong></span> '1tex',<span style='color: #3598db;'> <strong>icon:</strong></span> 'pi pi-bolt' },</div><div>&nbsp; &nbsp; { <span style='color: #3598db;'><strong>label:</strong></span> '2text',<span style='color: #3598db;'> <strong>icon:</strong></span> 'pi pi-bolt' },</div><div>&nbsp; &nbsp; { <span style='color: #3598db;'><strong>label:</strong></span> '3text', <span style='color: #3598db;'><strong>icon:</strong></span> 'pi pi-bolt' },</div><div>&nbsp; &nbsp; { <span style='color: #3598db;'><strong>label</strong></span>: '4text',<span style='color: #3598db;'><strong> icon:</strong></span> 'pi pi-bolt' },</div><div>&nbsp; &nbsp; { <span style='color: #3598db;'><strong>label:</strong></span> '5text',<span style='color: #3598db;'><strong> icon:</strong></span> 'fa-mail-reply' },</div><div>&nbsp; ];</div></div>",
  menuHtmlCode:
`<assaf-profile-dropdown [menuItems]="menu" label="mohamed"
    icon="pi pi-ellipsis-v" >
</assaf-profile-dropdown>`,
  menuTsCode:
    "<div><div>&nbsp; <span style='color: #e03e2d;'><strong>menu </strong></span>= [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; <span style='color: #3598db;'><strong>label:</strong></span> 'Text',</div><div>&nbsp; &nbsp; &nbsp; <strong><span style='color: #3598db;'>items:</span></strong> [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; { <span style='color: #3598db;'>label:</span> '2text', <span style='color: #3598db;'>icon:</span> 'pi pi-bolt' },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; { <span style='color: #3598db;'>label:</span> '3text', <span style='color: #3598db;'>icon:</span> 'pi pi-bolt' },</div><div>&nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp;<span style='color: #3598db;'><strong> label:</strong></span> 'Text2',</div><div>&nbsp; &nbsp; &nbsp;<span style='color: #3598db;'><strong> items:</strong></span> [</div><div>&nbsp; &nbsp; &nbsp; &nbsp; {<span style='color: #3598db;'> label:</span> '4text', <span style='color: #3598db;'>icon:</span> 'pi pi-bolt' },</div><div>&nbsp; &nbsp; &nbsp; &nbsp; { <span style='color: #3598db;'>label:</span> '5text',<span style='color: #3598db;'> icon:</span> 'pi pi-question' },</div><div>&nbsp; &nbsp; &nbsp; ],</div><div>&nbsp; &nbsp; },</div><div>&nbsp; ];</div></div>",
};
