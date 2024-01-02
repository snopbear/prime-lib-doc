import { ButtonProperties } from '@models/interfaces';

export const severityBtnExamples: ButtonProperties[] = [
  {
    label: 'Info',
    severity: 'info',
    htmlCode: '<assaf-button label="Info" severity="info"></assaf-button>',
  },
  {
    label: 'Secondary',
    severity: 'secondary',
    htmlCode:
      '<assaf-button label="Secondary" severity="secondary"></assaf-button>',
  },
  {
    label: 'Success',
    severity: 'success',
    htmlCode: '<assaf-button label="Success" severity="success"></assaf-button>',
  },
  {
    label: 'Warning',
    severity: 'warning',
    htmlCode: '<assaf-button label="Warning" severity="warning"></assaf-button>',
  },
  {
    label: 'Danger',
    severity: 'danger',
    htmlCode: '<assaf-button label="Danger" severity="danger"></assaf-button>',
  },
  {
    label: 'Help',
    severity: 'help',
    htmlCode: '<assaf-button label="Help" severity="help"></assaf-button>',
  },
];

export const shapesBtnExamples: ButtonProperties[] = [
  {
    label: 'Rounded',
    isRounded: true,
    severity: 'info',
    htmlCode: '<assaf-button label="Rounded" [isRounded]="true"></assaf-button>',
  },
  {
    label: 'Outline',
    isOutline: true,
    htmlCode: '<assaf-button label="Outline" [isOutline]="true"></assaf-button>',
  },
  {
    label: 'Text',
    isText: true,
    htmlCode: ' <assaf-button label="Text" [isText]="true"></assaf-button>',
  },
  {
    label: 'Raised',
    isRaised: true,
    severity: 'info',
    htmlCode: '<assaf-button label="Raised" [isRaised]="true"></assaf-button>',
  },
  {
    label: 'Rounded Outline',
    isRounded: true,
    isOutline: true,
    severity: 'success',
    htmlCode:
      '<assaf-button label="Rounded Outline" [isRounded]="true" [isOutline]="true" severity="success"></assaf-button>',
  },
  {
    label: 'Rounded Text',
    isRounded: true,
    isText: true,
    severity: 'success',
    htmlCode:
      '<assaf-button label="Rounded Text" [isRounded]="true" [isText]="true" severity="success"></assaf-button>',
  },
  {
    label: 'Rounded Raised',
    isRounded: true,
    isRaised: true,
    severity: 'success',
    htmlCode:
      '<assaf-button label="Rounded Raised" [isRounded]="true" [isRaised]="true" severity="success"></assaf-button>',
  },
];

export const sizeBtnExamples: ButtonProperties[] = [
  {
    size: 'sm',
    label: 'Small',
    htmlCode: ' <assaf-button size="sm" label="Small"></assaf-button>',
  },
  {
    label: 'Medium',
    htmlCode: '<assaf-button label="Medium"></assaf-button>',
  },
  {
    size: 'lg',
    label: 'Large',
    htmlCode: '<assaf-button size="lg" label="Large"></assaf-button>',
  },
];

export const iconsBtnExamples: ButtonProperties[] = [
  {
    label: 'Text & Icon',
    btnIcon: 'pi-check',
    severity: 'success',
    htmlCode:
      '<assaf-button label="Text & Icon" btnIcon="pi-check" severity="success"></assaf-button>',
  },
  {
    label: 'Icon position',
    btnIcon: 'pi-search',
    severity: 'info',
    iconPos: 'right',
    htmlCode:
      '  <assaf-button label="Icon position" btnIcon="pi-search" iconPos="right"></assaf-button>',
  },
  {
    btnIcon: 'pi-heart',
    severity: 'danger',
    htmlCode: '<assaf-button btnIcon="pi-heart" severity="danger"></assaf-button>',
  },
  {
    btnIcon: 'pi-star-fill',
    severity: 'warning',
    isOutline: true,
    htmlCode:
      '<assaf-button [isOutline]="true" btnIcon="pi-star-fill" severity="warning"></assaf-button>',
  },
];

export const badgeBtnExamples: ButtonProperties[] = [
  {
    mode: 'badge',
    badgeValue: '5',
    label: 'Badge',
    severity: 'info',
    badgeSeverity: 'danger',
    htmlCode:
      '<assaf-button mode="badge" badgeValue="5" label="Badge" badgeSeverity="danger"></assaf-button>',
  },
  {
    mode: 'badge',
    badgeValue: '10',
    label: 'Badge with icon',
    btnIcon: 'pi-star',
    severity: 'success',
    badgeSeverity: 'warning',
    htmlCode:
      '<assaf-button mode="badge" badgeValue="10" label="Badge with icon" btnIcon="pi-star" severity="success" badgeSeverity="warning"></assaf-button>',
  },
];
