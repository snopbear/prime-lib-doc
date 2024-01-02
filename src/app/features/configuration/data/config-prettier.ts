export const prettierStep = {
  installESLint: `ng add @angular-eslint/schematics`,
  ngLint: `ng lint --fix`,
  installPrettier: `npm install prettier --save-dev`,
  prettierWrite: `npx prettier --write`,
  prettierJson: `<p>{</p>
  <p><span style="color: #22863a;"> <span class="pl-ent">"tabWidth"</span></span>:<span style="color: #3598db;"> <span class="pl-c1">2</span></span>,</p>
  <p>&nbsp;<span class="pl-ent" style="color: #22863a;">"useTabs"</span>: <span class="pl-c1" style="color: #236fa1;">false</span>,</p>
  <p><span style="color: #22863a;">&nbsp;<span class="pl-ent">"singleQuote"</span></span>: <span class="pl-c1" style="color: #236fa1;">true</span>,</p>
  <p><span style="color: #22863a;">&nbsp;<span class="pl-ent">"semi"</span></span>: <span class="pl-c1" style="color: #236fa1;">true</span>,</p>
  <p><span style="color: #22863a;">&nbsp;<span class="pl-ent">"bracketSpacing"</span></span>: <span class="pl-c1" style="color: #236fa1;">true</span>,</p>
  <p><span style="color: #22863a;">&nbsp;<span class="pl-ent">"arrowParens"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span style="color: #34495e;">avoid</span><span class="pl-pds">"</span></span>,</p>
  <p>&nbsp;<span class="pl-ent" style="color: #22863a;">"trailingComma"</span>: <span class="pl-s"><span class="pl-pds">"</span><span style="color: #34495e;">es5</span><span class="pl-pds">"</span></span>,</p>
  <p><span style="color: #22863a;">&nbsp;<span class="pl-ent">"bracketSameLine"</span></span>: <span class="pl-c1" style="color: #236fa1;">true</span>,</p>
  <p><span style="color: #22863a;">&nbsp;<span class="pl-ent">"printWidth"</span></span>: <span class="pl-c1" style="color: #3598db;">80</span></p>
  <p>}</p>`,
  installMax: `npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev`,
  eslintrcJson: `    {
    "files": ["*.ts"],
    "extends": [
      ...
      "plugin:prettier/recommended" // put this line
    ],
  },`,
};
