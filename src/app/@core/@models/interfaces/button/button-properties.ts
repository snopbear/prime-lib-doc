import {
  ButtonIconPosition,
  ButtonMode,
} from 'assaf-prime-lib/@components/@button';
import { Severity, Size } from 'assaf-prime-lib/models';

export interface ButtonProperties {
  label?: string;
  severity?: Severity;
  isText?: boolean;
  isOutline?: boolean;
  isRounded?: boolean;
  isRaised?: boolean;
  htmlCode?: string;
  size?: Size;
  mode?: ButtonMode;
  badgeValue?: string;
  btnIcon?: string;
  badgeSeverity?: Severity;
  iconPos?: ButtonIconPosition;
}
