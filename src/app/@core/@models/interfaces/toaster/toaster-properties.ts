import { ToastPosition } from 'assaf-prime-lib/@components/@toast/models/toast-model';
import { MessageSeverity, Severity } from 'assaf-prime-lib/models';
export interface ToasterProperties {
  title: string;
  key: string;
  messageSeverity: MessageSeverity;
  severity: Severity;
  message: string;
  position?: ToastPosition;
  htmlCode: string;
  tsCode: string;
}
