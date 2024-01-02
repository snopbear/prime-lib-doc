import { createBasicClass, createImport } from '@factories/index';

export const displayInstall: Display = {
  import: createImport([
    { import: 'DisplayService', from: 'assaf-prime-lib/services' },
  ]),
  importMessage: createBasicClass(
    [],
    `<p><span style="font-size: 12pt;"><span style="color: #3598db;">constructor</span>(<span style="color: #b96ad9;">private </span>__display:<span style="color: #169179;">DisplayService</span>){}</span></p>
 <p><span style="font-size: 12pt;"><span style="color: #3598db;">this</span>.__display.<span style="color: #3598db;">displayMessage</span>('<span style="color: #169179;">success</span>','<span style="color: #169179;">Hello</span>','<span style="color: #169179;">msgKey</span>','<span style="color: #169179;">Hello from message</span>')</span></p>`
  ),
  importToast: createBasicClass(
    [],
    `<p><span style="font-size: 12pt;"><span style="color: #3598db;">constructor</span>(<span style="color: #b96ad9;">private </span>__display:<span style="color: #169179;">DisplayService</span>){}</span></p>
  <p><span style="font-size: 12pt;"><span style="color: #3598db;">this</span>.__display.<span style="color: #3598db;">displayToast</span>('<span style="color: #2dc26b;">info</span>','<span style="color: #2dc26b;">Hello</span>','<span style="color: #2dc26b;">Hello from message</span>','<span style="color: #2dc26b;">toastKey</span>')</span></p>`
  ),
};
export interface Display {
  import: string;
  importMessage: string;
  importToast: string;
}
