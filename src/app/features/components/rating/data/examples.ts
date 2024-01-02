export const textValue = {
  textBasic: `<assaf-rating controlName="number"
   [stars]="10" [showCancel]="true">
</assaf-rating>`,
  textReadOnly: `<assaf-rating controlName="number" 
   [stars]="10"[readonly]="true" 
   [showCancel]="false">
</assaf-rating>`,
  textTemplate: `<assaf-rating controlName="number"
   [stars]="10" [showCancel]="true" cancelIconClass="pi-times"
   onIconClass="pi-heart-fill" offIconClass="pi-heart" >
</assaf-rating>`,
  textTwoWay: `<assaf-rating [value]="value" [stars]="12" 
   [showCancel]="true" cancelIconClass="pi-minus-circle"
   onIconClass="pi-heart-fill" offIconClass="pi-heart">
</assaf-rating>`,
};
