import { createBasicClass } from '@factories/index';

export const datatableExamples = {
  basic: {
    html: `<assaf-data-table
    [tableColumns]="headers"
    [data]="users"
    (stateChange)="stateClicked($event)"
  ></assaf-data-table>
  `,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: 'assaf-prime-lib/@components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; headers</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp; },&nbsp;<br>&nbsp; &nbsp; &nbsp;]</div>`
    ),
  },

  expanded: {
    html: `<assaf-data-table
    [tableColumns]="headers"
    [data]="users"
    (stateChange)="stateClicked($event)"
    rowExpansionDataKey="id" //Must be provided for the expansion to work
  >
    <!-- Add ng-tamplate tag with #expandedRow -->
    <ng-template #expandedRow let-item>
      <assaf-data-table
        [data]="item.details"
        [tableColumns]="subHeaders"
      ></assaf-data-table>
    </ng-template>
  </assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; headers</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br>&nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; }, &nbsp;<br>&nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;],&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp;},&nbsp;<br>&nbsp; &nbsp; &nbsp;]</div>
<p><br></p>
<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; subHeaders</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; },<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Last Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;lastName&apos; },<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; },<br>&nbsp; &nbsp; &nbsp;];</div>
`
    ),
  },

  captionSummary: {
    html: `<assaf-data-table
    [tableColumns]="headers"
    [data]="users"
    (stateChange)="stateClicked($event)"
  >
    <!-- Add ng-tamplate tag with #caption to show caption -->
    <ng-template #caption>
      <p>Hello from caption</p>
    </ng-template>

    <!-- Add ng-tamplate tag with #summary to show summary -->
    <ng-template #summary>
      <p>Hello from summary</p>
    </ng-template>
  </assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; headers</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br> &nbsp; &nbsp;&nbsp;&nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp; },&nbsp;<br>&nbsp; &nbsp;]</div>`
    ),
  },

  gridHeader: {
    html: `<assaf-data-table
    [tableColumns]="headers"
    [data]="users"
    [gridLines]="true" //Set to true to show grid lines
    [showTableHeader]="false" //Set to false to hide table header
    (stateChange)="stateClicked($event)"
  ></assaf-data-table>`,

    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; headers</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; },&nbsp;&nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp; },&nbsp;<br>&nbsp; &nbsp; ]</div>`
    ),
  },

  checkbox: {
    html: `<assaf-data-table
    [tableColumns]="checkboxHeaders"
    [data]="users"
    (stateChange)="stateClicked($event)"
    (selectionChange)="selected($event)"
  ></assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; checkboxHeaders</span>: <span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;</div>
      <div>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">type</span>: &apos;checkbox&apos; },</div>
      <div>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{ <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{ <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp;],&nbsp;<br>&nbsp; &nbsp; &nbsp;},&nbsp;<br>&nbsp; &nbsp; ]</div>`
    ),
  },

  sizeFreeze: {
    html: `<assaf-data-table
    [tableColumns]="headers"
    [data]="users"
    [freezeHeader]="true" //To freeze header set to true  
    size="sm" //Use it to change table size
    (stateChange)="stateClicked($event)"
  ></assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; headers</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; },&nbsp;&nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp; },&nbsp;<br>&nbsp; &nbsp; ]</div>`
    ),
  },

  pagination: {
    html: `<assaf-data-table
    [tableColumns]="headers"
    [data]="users"
    [paginate]="true" //To enable pagination set to true
    [rowsCountPerPage]="2" //Sets number of rows per page (use in case of single fixed option)
    [rowsPerPageOptions]="[2, 3, 4]" //Sets different number of rows options
    (stateChange)="stateClicked($event)"
  ></assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; headers</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; },&nbsp;&nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp; },&nbsp;<br>&nbsp; &nbsp; ]</div>`
    ),
  },

  scroll: {
    html: ` <assaf-data-table
    [tableColumns]="headers"
    [data]="users"
    [isScrollable]="true" //Enables scrolling inside table
    scrollHeight="250px" //Sets scrolling height
    (stateChange)="stateClicked($event)"
  ></assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; headers</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; },&nbsp;&nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp; },&nbsp;<br>&nbsp; &nbsp; ]</div>`
    ),
  },
  responsive: {
    html: ` <assaf-data-table
    [tableColumns]="headers"
    responsiveBreakPoint="1200px"
    [data]="users"
    (stateChange)="stateClicked($event)"
  ></assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp;headers</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos;,<span style="color: rgb(61, 142, 185);">mobileHeaderStyleClass</span>:&apos;newStyle&apos;}, &nbsp;<br><span style="color: rgb(124, 112, 107);">&nbsp; &nbsp; &nbsp; // mobileHeaderStyleClass allows you to change the style &nbsp; in mobile view</span><br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp; },<br>&nbsp; &nbsp; ]</div>`
    ),
  },

  sort: {
    html: `<assaf-data-table
    [tableColumns]="sortable"
    [data]="users"
    (stateChange)="stateClicked($event)"
  ></assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; sortable</span>: <span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;</div>
      <div>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">sortable</span>: true }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">sortable</span>: true }, &nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{ <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp; },&nbsp;<br>&nbsp; &nbsp; ]</div>`
    ),
  },

  globalDrop: {
    html: `<assaf-data-table
    [tableColumns]="dropdowns"
    [data]="users"
    [filterKeys]="['firstName', 'phone']" //Provide keys to be used in global search
    (stateChange)="dropdownChanged($event)"
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
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; dropdowns</span>: <span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;</div>
      <div>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">sortable</span>: true }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos;, <span style="color: rgb(61, 142, 185);">sortable</span>: true }, &nbsp;</div>
      <div>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">title</span>: &apos;City&apos;,<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; type</span>: &apos;dropdown&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; dataKey</span>: &apos;city&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; dropDownConfig</span>: {<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; event</span>: &apos;dropdown&apos;,<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; placeholder</span>: &apos;Select City&apos;,<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; data</span>: [<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">key</span>: &apos;Cairo&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">value</span>: &apos;cairo&apos; },<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">key</span>: &apos;France&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">value</span>: &apos;france&apos; },<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">key</span>: &apos;Saudi Arabia&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">value</span>: &apos;sa&apos; },<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">key</span>: &apos;UAE&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">value</span>: &apos;uae&apos; },<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">key</span>: &apos;Germany&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">value</span>: &apos;germany&apos; },<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; },<br>&nbsp; &nbsp; &nbsp; },</div>
      <div>&nbsp; &nbsp; ]</div>`
    ),
  },

  lazy: {
    html: `<!-- For lazy loading to work you need to enable lazyLoad & paginate -->
    <!-- Then update data array with new content -->
    <assaf-data-table
      [tableColumns]="headers"
      [data]="lazyData"
      [lazyLoad]="true"
      [paginate]="true"
      [rowsCountPerPage]="2"
      (onLazyLoad)="paginate($event)"
      (stateChange)="stateClicked($event)"
      [totalRecords]="totalRecords"
      [loading]="isLoading"
    ></assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; headers</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;</span> = [ &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;switch&apos;, <span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;active&apos;, <span style="color: rgb(61, 142, 185);">switchConfig</span>: {&nbsp;<span style="color: rgb(61, 142, 185);">event</span>: &apos;activeState&apos; }}, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; }, &nbsp;<br>&nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; },&nbsp;&nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; {&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;button&apos;, &nbsp;<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; btnConfig</span>: [&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-pencil&apos;, <span style="color: rgb(61, 142, 185);">event</span>: &apos;edit&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;warning&apos; },&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">icon</span>: &apos;pi-trash&apos;, &nbsp; <span style="color: rgb(61, 142, 185);">event</span>: &apos;delete&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">severity</span>: &apos;danger&apos;, &nbsp;<span style="color: rgb(61, 142, 185);">class</span>: &apos;delete-btn&apos;},&nbsp;<br>&nbsp; &nbsp; &nbsp; ],&nbsp;<br>&nbsp; &nbsp; &nbsp; },&nbsp;<br>&nbsp; &nbsp; ]</div>`
    ),
  },
  pipes: {
    html: `<assaf-data-table
    [tableColumns]="userHeaders"
    [data]="users"
    (stateChange)="stateClicked($event)"
  ></assaf-data-table>`,
    ts: createBasicClass(
      [
        {
          import: 'TableColumn',
          from: '@assaf-garage/assaf-core-library/components/@datatable',
        },
      ],
      `<div><span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; userHeaders</span>:&nbsp;<span style="color: rgb(65, 168, 95);">Array&lt;TableColumn&gt;&nbsp;</span>= [<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;First Name&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;firstName&apos; },<br>&nbsp; &nbsp; &nbsp; {<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(61, 142, 185);">title</span>: &apos;Active&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,<br> <span style="color: rgb(61, 142, 185);">&nbsp; &nbsp; &nbsp; &nbsp; dataKey</span>: &apos;activeText&apos;,<br><span style="color: rgb(65, 168, 95);">&nbsp; &nbsp; &nbsp; &nbsp; // Use style pipe to apply conditional styling</span><br> <span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; &nbsp; &nbsp; stylePipe</span>: (<span style="color: rgb(61, 142, 185);">value</span>: <span style="color: rgb(65, 168, 95);">any</span>):&nbsp;<span style="color: rgb(65, 168, 95);">string</span> =&gt; {<br> <span style="color: rgb(147, 101, 184);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return</span> <span style="color: rgb(61, 142, 185);">value.active</span> ? <span style="color: rgb(235, 107, 86);">&apos;text-green-500 font-bold&apos;</span> :&nbsp;<span style="color: rgb(235, 107, 86);">&apos;text-red-500 font-bold&apos;</span>;<br>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; },<br>&nbsp; &nbsp; &nbsp; },<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Image&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;image&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;image&apos; },<br> &nbsp; &nbsp; &nbsp; { <span style="color: rgb(61, 142, 185);">title</span>: &apos;Phone Number&apos;, <span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;phone&apos; },<br>&nbsp; &nbsp; &nbsp; {<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(61, 142, 185);">title</span>: &apos;Salary&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(61, 142, 185);">type</span>: &apos;text&apos;,<br>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="color: rgb(61, 142, 185);">dataKey</span>: &apos;salary&apos;,<br><span style="color: rgb(65, 168, 95);">&nbsp; &nbsp; &nbsp; &nbsp; /&nbsp; / Use textpipe to transform text of each cell in the column</span><br> <span style="color: rgb(251, 160, 38);">&nbsp; &nbsp; &nbsp; &nbsp; textPipe</span>: (<span style="color: rgb(61, 142, 185);">value</span>: <span style="color: rgb(65, 168, 95);">any</span>):&nbsp;<span style="color: rgb(65, 168, 95);">string</span> =&gt; {<br> <span style="color: rgb(147, 101, 184);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return</span> <span style="color: rgb(61, 142, 185);">this.__pipes.</span><span style="color: rgb(251, 160, 38);">number</span>(<span style="color: rgb(84, 172, 210);">value</span>);<br>&nbsp; &nbsp; &nbsp; &nbsp; },<br>&nbsp; &nbsp; &nbsp; },<br>&nbsp; &nbsp; ];</div>`
    ),
  },
};
