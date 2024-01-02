export const progressBarExample = {
    basicTag:'<assaf-progress-bar [value]="50"></assaf-progress-bar>',
    showValueTag:'<assaf-progress-bar [value]="50" [showValue]="true" height="20px"></assaf-progress-bar>',
    bgTag:'<assaf-progress-bar [value]="50" backgroundColor="red"></assaf-progress-bar>',
    indeterminateModeTag:'<assaf-progress-bar mode="indeterminate"></assaf-progress-bar>',
    unitTag:'<assaf-progress-bar [value]="28" unit="°C" [showValue]="true" height="20px"></assaf-progress-bar>',
    styleClassTag:`<assaf-progress-bar 
    [value]="50" 
    unit="°C" 
    [showValue]="true" height="20px" 
    styleClass="bg-orange-400 black-text bg-sky-blue"
></assaf-progress-bar>`,
}