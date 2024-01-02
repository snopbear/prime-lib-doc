export const dividerArray = [
  {
    title: '',
    tag: `<assaf-divider></assaf-divider>`,
  },
  {
    title: ['Left', 'Center', 'Right'],
    align: ['left', 'center', 'right'],
    tag: `<assaf-divider 
    align="center" type="dashed"
    label="center" >
</assaf-divider>`,
  },
  {
    tag: `<assaf-divider label="Icon" 
    [mode]="'icon'" icon="pi-user" 
    iconPos="right" [align]="'center'" 
    styleClass="title-style"
></assaf-divider>`,
  },
  {
    tag: `<assaf-divider label="Badge" 
    [mode]="'badge'" [align]="'right'">
</assaf-divider>`,
  },
  {
    tag: `<assaf-divider mode='custom' [align]="'center'">
    <assaf-button btnIcon="pi-copy" 
    severity="success" label="Button"></assaf-button>
</assaf-divider>`,
  },
  {
    tag: `<assaf-divider layout="vertical" 
</assaf-divider>`,
  },
  {
    tag: `<assaf-divider layout="vertical" 
    label="or">
</assaf-divider>`,
  },
];
