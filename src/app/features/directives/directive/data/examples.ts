export const exampleDirective = {
  textArabic: `<assaf-input
  [arabicOnly]="true"
  controlName="arabicOnly"
  formControlName="arabicOnly"
  label="Input With Arabic Only"
  placeholder="Input With Arabic Only"
  [floatLabel]="true">
</assaf-input>`,
  textEnglish: `<assaf-input 
  [englishOnly]="true"
  controlName="englishOnly"
  formControlName="englishOnly"
  label="Input With English Only"
  placeholder="Input With English Only"
  [floatLabel]="true">
</assaf-input>`,
  englishWithoutSpace: `<assaf-input 
  [englishWithoutSpace]="true"
  controlName="englishWithoutSpace"
  formControlName="englishWithoutSpace"
  label="Input English Without Space"
  placeholder="Input English Without Space"
  [floatLabel]="true">
</assaf-input>`,
  textNumbersOnly: `<assaf-input 
  numberOnly
  [enableNumberOnly]="true"
  controlName="numberOnly"
  formControlName="numberOnly"
  label="Input numberOnly"
  placeholder="Input numberOnly"
  [floatLabel]="true">
</assaf-input>`,
  textNumbersWithSpetialCharacter: `<assaf-input 
  numberOnly
  [enableNumberOnly]="true"
  [specialCharacters]="['-', '#']"
  controlName="numberOnlyWithSpecialCharacters"
  formControlName="numberOnlyWithSpecialCharacters"
  label=" with special characters"
  placeholder=" with special characters"
  [floatLabel]="true">
</assaf-input>`,
  blockCopy: `<assaf-input blockCopy 
  controlName="basic"  
  placeholder="Input" 
  label="Input">
</assaf-input>`,
  blockCut: `<assaf-input blockCut 
  controlName="basic"  
  placeholder="Input" label="Input">
</assaf-input>`,
  blockPaste: `<assaf-input blockPaste 
  controlName="basic"  
  placeholder="Input" label="Input">
</assaf-input>`,
};
