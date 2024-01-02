import { getSeverity, getSize } from '@factories/index';

export const buttonUploaderData = {
  btnSeverity: [
    {
      severity: getSeverity('success'),
      html: `<assaf-button-uploader label="success" 
    iconPos="right" btnIcon="pi-download" 
    severity="success" >
</assaf-button-uploader>`,
    },
    {
      severity: getSeverity('warning'),
      html: `<assaf-button-uploader label="warning" 
    iconPos="right" btnIcon="pi-download"
    severity="warning" >
</assaf-button-uploader>`,
    },
    {
      severity: getSeverity('danger'),
      html: `<assaf-button-uploader label="danger" 
    iconPos="right" btnIcon="pi-download"
    everity="danger">
</assaf-button-uploader>`,
    },
    {
      severity: getSeverity('info'),
      html: `<assaf-button-uploader label="info" 
    iconPos="right" btnIcon="pi-download"
    severity="info">
</assaf-button-uploader>`,
    },
    {
      severity: getSeverity('help'),
      html: `<assaf-button-uploader label="help" 
    iconPos="right" btnIcon="pi-download"
    severity="help">
</assaf-button-uploader>`,
    },
    {
      severity: getSeverity('secondary'),
      html: `<assaf-button-uploader label="secondary" 
    iconPos="right" btnIcon="pi-download"
    severity="secondary">
</assaf-button-uploader>`,
    },
  ],
  uploaderButtonsShapes: [
    {
      name: `Basic`,
      html: `<assaf-button-uploader label="default" fileType=".pdf"
      btnIcon="pi-download" (onChange)="showToast($event)">
   </assaf-button-uploader>`,
    },
    {
      name: `Rounded`,
      html: `<assaf-button-uploader label="Rounded" 
      [isRounded]="true" btnIcon="pi-download"
      iconPos="right" (onChange)="showToast($event)">
   </assaf-button-uploader>`,
    },
    {
      name: `Raised`,
      html: `<assaf-button-uploader label="Raised"
      [isRaised]="true" btnIcon="pi-download"
      iconPos="right" (onChange)="showToast($event)">
   </assaf-button-uploader>`,
    },
    {
      name: `Outline`,
      html: `<assaf-button-uploader label="Raised"
      [isOutline]="true" btnIcon="pi-download"
      iconPos="right" (onChange)="showToast($event)">
   </assaf-button-uploader>`,
    },
    {
      name: `Text`,
      html: `<assaf-button-uploader label="Raised"
      [isText]="true" btnIcon="pi-download"
      iconPos="right" (onChange)="showToast($event)">
   </assaf-button-uploader>`,
    },
    {
      name: `Multiple`,
      html: `<assaf-button-uploader label="Multiple"
      [multiple]="true" btnIcon="pi-download"
      iconPos="right" (onChange)="showToast($event)">
   </assaf-button-uploader>`,
    },
  ],
  uploaderButtonsSizes: [
    {
      name: 'Small',
      size: getSize('sm'),
      html: `<assaf-button-uploader label="Small" fileType=".pdf"
  [label]="Small" btnIcon="pi-download"
  size="sm">
</assaf-button-uploader`,
    },
    {
      name: 'Normal',
      html: `<assaf-button-uploader label="Normal" fileType=".pdf"
  [label]="Noraml" btnIcon="pi-download">
</assaf-button-uploader`,
    },
    {
      name: 'Large',
      size: getSize('lg'),
      html: `<assaf-button-uploader label="Large" fileType=".pdf"
  [label]="Large" btnIcon="pi-download" 
  size="lg">
</assaf-button-uploader`,
    },
  ],
};
