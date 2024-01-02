
// Create Styled 'import text' To unify all import text in all components

import { ImportObject } from "../../@models/interfaces";

// takes 'Array of modules' and the 'name' of module
export const createImport = (
  modules: ImportObject[],
  moduleName: string = 'YourModule',
  ngModuleMetadata: string = 'imports'
): string => {
  //Modules name to add it in NgModule imports/ providers
  let modulesName: string = '';
  //styled Text
  let importText = '';
  if (ngModuleMetadata === 'imports') {
    // create boolean constant for existing of TranslateModule
    const TranslateModuleExisting = modules.some(
      (module) => module.import === 'TranslateModule, TranslateLoader'
    );
    // Generate import statements
    modules.map((module) => {
      //if conditin to add configuration of TranslateModule
      // modulesName is an array contains modules names to add it in 'imports'
      if (module.import.includes('TranslateModule')) {
        const arrayOfmodules = module.import.split(',');
        modulesName += `<br><span style="color: rgb(0, 168, 133);">&nbsp; &nbsp; TranslateModule</span>.<span style="color: rgb(243, 121, 52);">forRoot(</span>{&nbsp;<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; &nbsp; loader</span>: { &nbsp;<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; &nbsp; &nbsp; provide</span>: TranslateLoader, &nbsp;<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; &nbsp; &nbsp; useFactory</span>: HttpLoaderFactory, &nbsp;<br><span style="color: rgb(44, 130, 201);">&nbsp; &nbsp; &nbsp; &nbsp; deps</span>: [HttpClient] &nbsp;<br>&nbsp; &nbsp; &nbsp; }<br><span style="color: rgb(243, 121, 52);">&nbsp; &nbsp; )</span><span>,</span>`;
        modulesName += `<br>&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 168, 133);">${arrayOfmodules[1]}</span><span style="color: #169179;">,</span>`;
      } else if (
        module.import.includes('HttpClient') &&
        TranslateModuleExisting
      ) {
        // to avoid repeating HttpClient in 'imports'
        const arrayOfmodules = module.import.split(',');
        modulesName += `<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 168, 133);">${arrayOfmodules[0]}</span><span style="color: #169179;">,</span>`;
      } else {
        modulesName += `<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(0, 168, 133);">${module.import}</span><span style="color: #169179;">,</span>`;
      }
      importText += `<p><span style="color: #b96ad9;">import</span> { <span style="color: rgb(0, 168, 133);">${module.import}</span> } <span style="color: rgb(185, 106, 217);">from</span> <span style="color: rgb(224, 62, 45);">'${module.from}'</span>;</p>`;
    });
  } else {
    importText += `<p><span style="color: #b96ad9;">import</span> { <span style="color: rgb(0, 168, 133);">HTTP_INTERCEPTORS</span> } <span style="color: rgb(185, 106, 217);">from</span> <span style="color: rgb(224, 62, 45);">'@angular/common/http'</span>;</p>`;
    modules.map((module) => {
      modulesName += `<br>&nbsp; &nbsp; {&nbsp;<br>&nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">provide</span>: <span style="color: rgb(65, 168, 95);">HTTP_INTERCEPTORS</span>,<br>&nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">useClass</span>: <span style="color: rgb(65, 168, 95);">${module.import}</span>,<br>&nbsp; &nbsp; &nbsp; <span style="color: rgb(41, 105, 176);">multi</span>: <span style="color: rgb(184, 49, 47);">true</span>&nbsp;<br>&nbsp; &nbsp; }</br>`;
      importText += `<p><span style="color: #b96ad9;">import</span> { <span style="color: rgb(0, 168, 133);">${module.import}</span> } <span style="color: rgb(185, 106, 217);">from</span> <span style="color: rgb(224, 62, 45);">'${module.from}'</span>;</p>`;
    });
  }
  // add import statements to styledText
  importText += `
<p>&nbsp; &nbsp; &nbsp;<br>@<span style="color: #169179;">NgModule</span><span style="color: #b96ad9;">({</span><br>&nbsp; &nbsp;<span style="color: #3598db;">${ngModuleMetadata}: [</span>${modulesName}<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #169179;">//...</span><br>&nbsp;&nbsp;&nbsp;<span style="color: #3598db;">],</span><br><span style="color: #169179;">//...</span><br><span style="color: #b96ad9;">})</span><br><span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span> <span style="color: #169179;">${moduleName}</span> { }</p>`;
  return importText;
};
