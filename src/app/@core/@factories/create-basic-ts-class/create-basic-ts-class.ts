import { ImportObject } from "@models/interfaces";
// Create Styled 'Class Component' To unify styles in all components  
// takes 'Array of imports' and the 'content' of class 
export const createBasicClass =(importArray?:ImportObject[],content?:string,LifecycleHooks?:string):string=>{
    let styledText = '';
    // Generate import statements
    importArray?.map((importObject:ImportObject)=>{
        styledText += `<p><span style="color: #b96ad9;">import</span> { <span style="color: rgb(0, 168, 133);">${importObject.import}</span> } <span style="color: rgb(185, 106, 217);">from</span> <span style="color: rgb(224, 62, 45);">'${importObject.from}'</span>;</p>`
    })
    // add import statements to styledText
    styledText += `<p><span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span><br>&nbsp; &nbsp; ...<br><span style="color: #b96ad9;">})</span><br><span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span> <span style="color: #169179;">YourComponent</span>${LifecycleHooks? '<span> <span style="color: rgb(85, 57, 130);">implements </span>' + LifecycleHooks +'</span>': ''} {<br>${content}<br>}</p>`;
    return styledText;
    }
