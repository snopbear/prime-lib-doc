import {
  InputNumberButtonLayout,
  InputNumberMode,
  LocaleMatcher,
} from 'assaf-prime-lib/@components/@input-number';

export interface InputNumberProperties {
  title: string;
  label: string;
  controlName: string;
  placeholder?: string;
  floatLabel?: boolean;
  locale?: string;

  localeMatcher?: LocaleMatcher;
  currency?: string;
  mode?: InputNumberMode;
  size?: number;
  buttonLayout?: InputNumberButtonLayout;
  prefix?: string;
  suffix?: string;
  minFractionDigits?: number;
  maxFractionDigits?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
  inputStyleClass?: string;
  readOnly?: boolean;
  showClear?: boolean;
  showButtons?: boolean;
  incrementButtonClass?: string;
  decrementButtonClass?: string;
  incrementButtonIcon?: string;
  decrementButtonIcon?: string;
  allowEmpty?: boolean;
  labelClass?: string;
  useGrouping?: boolean;
  controlErrors?: boolean;
  htmlCode: string;
  tsCode?: string;
}
