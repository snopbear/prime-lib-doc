import { IconPosition, InputMode } from 'assaf-prime-lib/@components/@input';
import { Size } from 'assaf-prime-lib/models';

export interface InputProperties {
  title: string;
  label: string;
  controlName: string;
  placeholder?: string;
  floatLabel?: boolean;
  icon?: string;
  iconPos?: IconPosition;
  toggleMask?: boolean;
  passwordFeedback?: boolean;
  type?: InputMode;
  size?: Size;
  htmlCode: string;
  controlErrors?: boolean;
  tsCode?: string;
}
