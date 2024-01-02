export const ChipsExample = {
    Basic:{
    title: 'Basic Chip',
    html: `<assaf-chip label='Chips'></assaf-chip>`,
  },
  withIcon:{
    title: 'Chip with Icon',
    html: 
`<assaf-chip  label='Chips'>
    chipIcon='pi-facebook'  
</assaf-chip>`,
  },
  removable:{
    title: 'Removable Chip',
    html: 
`<assaf-chip label='Chips'
    [removable]='true' >
</assaf-chip>`,
  },
  removableCustom:{
    title: 'Removable Chip with Custom Icon',
    html: 
`<assaf-chip label='Chips'
    removeIcon="pi-times"
    [removable]='true' >
</assaf-chip>`,
  },
  withImage:{
    title: 'Chip with Image',
    html: 
`<assaf-chip label="Chips" 
    image="assets/image/user.jpeg">
</assaf-chip>`,
  },
  customStyle:{
    title: 'Chip with Custom style',
    html: 
`<assaf-chip label="Chips"
    styleClass="custom-chip">
</assaf-chip>`,
  },
  withTitle:{
    title: 'Chip with Title',
    html: 
`<assaf-chip label="Chips" 
    image="assets/image/user.jpeg"  
    title="name" [removable]="true" >
</assaf-chip>`,
  },
  customTitleStyle:{
    title: 'Chip with Styled Title',
    html: 
`<assaf-chip label="Chips" 
    image="assets/image/user.jpeg" removeIcon="pi-times" 
    title="name" titleClass="custom-title-chip" >
</assaf-chip>`
  },
  mix:{
    title: 'Demo Chip',
    html: 
`<assaf-chip label="Chips" 
    image="assets/image/user.jpeg" removeIcon="pi-times" 
    styleClass="custom-chip" [removable]="true" >
</assaf-chip>`,
  }
};
