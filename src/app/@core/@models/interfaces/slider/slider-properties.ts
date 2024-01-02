import { SliderOrientation } from 'assaf-prime-lib/@components/@slider';

export interface SliderProperties {
  title: string;
  value?: number;
  orientation?: SliderOrientation;
  styleClass?: string;
  step?: number;
  range?: boolean;
  controlName?: string;
  htmlCode?: string;
  tsCode?: string;
  type?: string;
}
