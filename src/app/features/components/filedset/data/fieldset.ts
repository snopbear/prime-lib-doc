import { createBasicClass } from '@factories/index';

export const fieldSetArray = [
  {
    title: 'Basic Fieldset',
    data: {
      header: 'Basic FieldSet',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis ab ratione similique iste laboriosam quasi error illum optio corporis   `,
    },
    tag: `<assaf-fieldset [data]="data" 
styleClass="legend">
</assaf-fieldset>
            `,
    ts: createBasicClass(
      [{ import: 'FieldSetData', from: 'assaf-prime-lib' }],
      `<p><p><span style="color: #169179;">   data</span> : <span style="color: #169179;">Array &lt;FieldSetData &gt;</span> = [
        { 
            <span style='color: rgb(61, 142, 185)'>header</span>: <span>'Toggleable FieldSet'</span>,
            <span style='color:rgb(61, 142, 185)'>content</span>: <span>'Lorem ipsum dolor sit amet consectetur'</span> 
        }
    ]`
    ),
  },
  {
    title: 'Toggleable FieldSet',
    data: {
      header: 'Toggleable FieldSet',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis ab ratione similique iste laboriosam quasi error illum optio corporis`,
      isToggleable: true,
    },
    tag: `<assaf-fieldset [data]="toggleableData" 
styleClass="legend">
</assaf-fieldset>
            `,
    ts: createBasicClass(
      [{ import: 'FieldSetData', from: '@assaf-garage/assaf-core-library' }],
      `<p><p><span style="color: #169179;">   data</span> : <span style="color: #169179;">Array &lt;FieldSetData &gt;</span> = [
    { 
        <span style='color: rgb(61, 142, 185)'>header</span>: <span>'Toggleable FieldSet'</span>,
        <span style='color:rgb(61, 142, 185)'>content</span>: <span>'Lorem ipsum dolor sit amet consectetur'</span>,
        <span style='color:rgb(61, 142, 185)'>isToggleable</span>: <span>true</span>,
    }
]`
    ),
  },
  {
    title: 'Array of FieldSet',
    data: [
      {
        header: 'FieldSet 1',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis ab ratione similique iste laboriosam quasi error illum optio corporis`,
      },
      {
        header: 'FieldSet 2 with toggleable',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur aliquid illum laudantium quo incidunt quibusdam assumenda sed similique reprehenderit cum expedita, autem modi aut dolor praesentium obcaecati fugit voluptatibus mollitia quisquam at delectus ea dolorem? Amet ut quam deleniti error neque? Saepe magnam quos totam cumque quod harum quo?`,
        isToggleable: true,
      },
    ],
    tag: `<assaf-fieldset [data]="fieldsetArray" 
styleClass="legend">
</assaf-fieldset>
            `,
    ts: createBasicClass(
      [{ import: 'FieldSetData', from: '@assaf-garage/assaf-core-library' }],
      `<p><p><span style="color: #169179;">   data</span> : <span style="color: #169179;">Array &lt;FieldSetData &gt;</span> = [
      { 
        <span style='color: rgb(61, 142, 185)'>header</span>: <span>'Toggleable FieldSet'</span>,
        <span style='color:rgb(61, 142, 185)'>content</span>: <span>'Lorem ipsum dolor sit amet consectetur'</span> 
      },
      { 
        <span style='color: rgb(61, 142, 185)'>header</span>: <span>'Toggleable FieldSet'</span>,
        <span style='color:rgb(61, 142, 185)'>content</span>: <span>'Lorem ipsum dolor sit amet consectetur'</span>,
        <span style='color:rgb(61, 142, 185)'>isToggleable</span>: <span>true</span>,
      }
  ]`
    ),
  },
];
    
    
