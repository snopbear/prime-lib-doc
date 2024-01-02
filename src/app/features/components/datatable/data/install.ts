import { createImport } from '@factories/index';

export const tableInstall: DataTableInstall = {
  import: createImport([
    {
      import: 'AssafDataTableModule',
      from: 'assaf-prime-lib/@components/@datatable',
    },
  ]),
  htmlUse: `<assaf-data-table [tableColumns]='headers' [data]='users'></assaf-data-table>`,

  tsUse: `<div><span style="color: rgb(61, 142, 185);">headers</span>: <span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br>&nbsp;{ <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp;{ <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: { <span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp;{ <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp;{ <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; }, &nbsp;<br>&nbsp;{ <span style="color: rgb(61, 142, 185);">title</span>: &apos;URL&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;link&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;url&apos; }, &nbsp;<br>&nbsp;{ <span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;&nbsp;<br>&nbsp; &nbsp;<span style="color: rgb(61, 142, 185);">btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp;{ <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;, <span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp;{ <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, <span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, <span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp;],&nbsp;<br>&nbsp; &nbsp;},&nbsp;<br>&nbsp;]</div>`,

  search: `<assaf-data-table
  [tableColumns]="headers"
  [data]="users"
  [filterKeys]="['firstName', 'phone']" //Provide keys to be used in global search
>
  <ng-template #caption let-dataTable>
    <div class="flex flex-row-reverse">
      <assaf-data-table-search-input
        class="flex flex-col"
        label="Global search"
        [template]="dataTable"
      ></assaf-data-table-search-input>
    </div>
  </ng-template>
</assaf-data-table>`,
};

interface DataTableInstall {
  import: string;
  htmlUse: string;
  tsUse: string;
  search: string;
}
