import { InputNumberProperties } from '@models/interfaces/input-number/input-number-properties';

export const InputNumberExamples: InputNumberProperties[] = [
  // floatlabel
  {
    title: 'Input Number with floatlabel',
    label: 'With floatlabel',
    controlName: 'price',
    placeholder: 'With floatlabel',
    floatLabel: true,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label="Input with floatlabel" 
    placeholder="Input with floatlabel">
</assaf-input>`,
  },
  // currency
  {
    title: 'Input Number with currency format',
    label: 'With currency format',
    controlName: 'price',
    placeholder: 'With currency format',
    currency: 'EGP',
    mode: 'currency',
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label="with currency format"  currency='EGP' mode='currency'
    placeholder="with currency format">
</assaf-input>`,
  },
  //   buttonLayout:'vertical',
  {
    title: 'Input Number with vertical buttonLayout ',
    label: ' with vertical buttonLayout',
    controlName: 'price',
    placeholder: 'With vertical buttonLayout',
    floatLabel: true,
    buttonLayout: 'vertical',
    showButtons: true,
    decrementButtonClass: 'p-button-secondary',
    incrementButtonClass: 'p-button-secondary',
    incrementButtonIcon: 'pi pi-plus',
    decrementButtonIcon: 'pi pi-minus',
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label=" with vertical buttonLayout"   buttonLayout='vertical'
    [showButtons]="true" buttonLayout="vertical"  
    decrementButtonClass="p-button-secondary" decrementButtonIcon="pi pi-minus"
    incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" 
    placeholder=" with vertical buttonLayout">
</assaf-input>`,
  },

  // Prefix
  {
    title: 'Input Number with Prefix',
    label: ' with Prefix',
    controlName: 'price',
    placeholder: 'With Prefix',
    floatLabel: true,
    prefix: 'cost : ',
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label="with Prefix"  prefix="cost : "
    placeholder="with Prefix">
</assaf-input>`,
  },
  // suffix
  {
    title: 'Input Number with suffix',
    label: ' with suffix',
    controlName: 'price',
    suffix: ' EGP',
    placeholder: 'With suffix',
    floatLabel: true,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
      label="with suffix" suffix=" EGP"
      placeholder="with suffix">
</assaf-input>`,
  },
  // mode
  {
    title: 'Input Number with decimal mode',
    label: 'With decimal mode',
    controlName: 'price',
    placeholder: 'With decimal mode',
    floatLabel: true,
    mode: 'decimal',
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label=" with decimal mode" mode='decimal'
    placeholder=" with decimal mode">
</assaf-input>`,
  },
  // readOnly
  {
    title: 'Input Number with readOnly',
    label: ' with readOnly',
    controlName: 'price',
    placeholder: 'readOnly Input ',
    floatLabel: true,
    readOnly: true,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label="with readOnly"  [readOnly]="true"
    placeholder="with readOnly">
</assaf-input>`,
  },
  // with minValue
  {
    title: 'Input Number with minValue',
    label: 'With minValue',
    controlName: 'price',
    placeholder: 'With minValue',
    floatLabel: true,
    minValue: 10,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label="With minValue"  [minValue]="10"
    placeholder="With minValue">
</assaf-input>`,
  },
  // with minFractionDigits
  {
    title: 'Input Number with minFractionDigits',
    label: 'With minFractionDigits',
    controlName: 'price',
    placeholder: 'With minFractionDigits',
    floatLabel: true,
    minFractionDigits: 2,
    mode: 'decimal',
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label="With minFractionDigits"  [minFractionDigits]="2" [mode]='decimal'
    placeholder="With minFractionDigits">
</assaf-input>`,
  },

  // with maxValue
  {
    title: 'Input Number with maxValue',
    label: 'With maxValue',
    controlName: 'price',
    placeholder: 'With maxValue',
    floatLabel: true,
    maxValue: 10,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label="With maxValue"     [maxValue]="10"
    placeholder="With maxValue">
</assaf-input>`,
  },
  // with maxFractionDigits
  {
    title: 'Input Number with maxFractionDigits',
    label: 'With maxFractionDigits',
    controlName: 'price',
    placeholder: 'With maxFractionDigits',
    floatLabel: true,
    mode: 'decimal',
    maxFractionDigits: 10,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
      label="With maxFractionDigits"  [maxFractionDigits]="2"  [mode]='decimal'
      placeholder="With maxFractionDigits">
</assaf-input>`,
  },
  // incrementButtonIcon & decrementButtonIcon
  {
    title: 'Input Number with incrementButtonIcon & decrementButtonIcon',
    label: 'With incrementButtonIcon & decrementButtonIcon',
    controlName: 'price',
    buttonLayout: 'horizontal',
    placeholder: 'with buttons',
    incrementButtonIcon: 'pi pi pi-plus',
    mode: 'decimal',
    showButtons: true,
    incrementButtonClass: 'bg-blue-500',
    decrementButtonIcon: 'pi pi pi-minus',
    decrementButtonClass: 'bg-red-500',
    step: 1,
    floatLabel: false,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
  label="With incrementButtonIcon"  incrementButtonIcon="pi pi pi-plus"
  incrementButtonClass="bg-blue-500" [showButtons]="true" [step]="1"
  decrementButtonIcon: 'pi pi pi-minus' decrementButtonClass: 'bg-red-500',
  placeholder="with buttons">
</assaf-input>`,
  },

  // localeMatcher
  {
    title: 'Input Number with localeMatcher',
    label: 'With localeMatcher',
    controlName: 'price',
    placeholder: 'With localeMatcher',
    floatLabel: true,
    mode: 'decimal',
    localeMatcher: 'lookup',
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label="With localeMatcher" localeMatcher='lookup'  mode='decimal'
    placeholder="With localeMatcher">
</assaf-input>`,
  },
  // locale="en-US"
  {
    title: 'Input Number with locale',
    label: 'With locale',
    controlName: 'price',
    placeholder: 'With locale',
    mode: 'decimal',
    floatLabel: true,
    locale: 'de-DE',
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
    label="With locale" locale="en-US" mode='decimal'
    placeholder="With locale">
</assaf-input>`,
  },
  // showClear
  {
    title: 'Input Number with showClear',
    label: 'With showClear',
    controlName: 'price',
    placeholder: 'With showClear',
    mode: 'decimal',
    floatLabel: true,
    showClear: true,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
      label="With showClear" [showClear]="true" mode='decimal'
      placeholder="With showClear">
</assaf-input>`,
  },
  // Size
  {
    title: 'Input Number with size',
    label: 'With size',
    controlName: 'price',
    placeholder: 'With size',
    floatLabel: true,
    size: 50,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
      label="With size" [size]="100" mode='decimal'
      placeholder="With size">
</assaf-input>`,
  },
  // useGrouping
  {
    title: 'Input Number with useGrouping',
    label: 'With useGrouping',
    controlName: 'price',
    placeholder: 'With useGrouping',
    floatLabel: true,
    useGrouping: true,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
        label="With useGrouping" [useGrouping]="true"
        placeholder="With useGrouping">
</assaf-input>`,
  },
  // priceWithErrorControll
  {
    title: 'Input Number with ErrorControll',
    label: 'With ErrorControll',
    controlName: 'priceWithErrorControll',
    placeholder: 'With ErrorControll',
    floatLabel: true,
    htmlCode: `<assaf-input controlName="formControl" [floatLabel]="true"
        label="With ErrorControll" [errorControll]="errors"
        placeholder="With ErrorControll">
</assaf-input>`,
  },
];
