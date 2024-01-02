import { createBasicClass, createImport } from "@factories/index";

export const localStorageInstall = {
  import: createBasicClass(
    [{ import: 'LocalStorageService', from: 'assaf-prime-lib/services' }],
    `<div style="margin: 5px 0;"><div class="textBasic"><code><span style="color: #3598db;">constructor</span>(<span style="color: #e03e2d;">private</span> <span style="color: #b96ad9;">__localStorage</span>:<span style="color: #169179;">LocalStorageService</span>){}</code></div></div>`
  ),
};