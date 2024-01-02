import { CalendarMode } from 'assaf-prime-lib/@components/@calendar';
import { ToastPosition } from 'assaf-prime-lib/@components/@toast/models/toast-model';
import { Severity, Size } from 'assaf-prime-lib/models';

//Convert string type to Severity type
export const getSeverity = (severity: Severity): Severity => severity;
//Convert string type to Size type
export const getSize = (Size: Size): Size => Size;
//Convert string type to CalenderMode type
export const getMode = (mode: CalendarMode): CalendarMode => mode;

//Convert string type to ToastPosition type
export const getToastPosition = (position: ToastPosition): ToastPosition =>
  position;
