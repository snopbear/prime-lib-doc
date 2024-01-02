import { createBasicClass, createImport } from '@factories/index';

export const TabviewInstall = {
  import: createImport([
    {
      import: 'assafTabviewModule',
      from: 'assaf-prime-lib/@components/@tabview',
    },
  ]),
  htmlUse: '<assaf-tabview [items]="data"></assaf-tabview>',
  tsUse: createBasicClass(
    [
      {
        import: 'AssafTabviewModule  , TabViewItem',
        from: 'assaf-prime-lib/@components/@tabview',
      },
    ],
    "<div><div>&nbsp; <span style='color: #ba372a;'><strong>tabViewItems</strong></span>: Array&lt;TabViewItem&gt; = [</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; <span style='color: #169179;'>component</span>: () =&gt;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #3598db;'>import</span>('../test1/test1.component')<span style='color: #3598db;'>.then</span>(</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (<span style='color: #7e8c8d;'>component</span>) <span style='color: #666666;'>=&gt;</span> <span style='color: #666666;'>component.Test1Component</span></div><div>&nbsp; &nbsp; &nbsp; &nbsp; ),</div><div>&nbsp; &nbsp; &nbsp; <span style='color: #e03e2d;'>header:</span><span style='color: #9e9e9e;'> 'text One',</span></div><div>&nbsp; &nbsp; &nbsp; <span style='color: #e03e2d;'>leftIcon:</span> <span style='color: #9e9e9e;'>'pi pi-inbox'</span>,</div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; <span style='color: #169179;'>component</span>: () =&gt;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #3598db;'>import</span>('../test2/test2.component')<span style='color: #3598db;'>.then</span>(</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (<span style='color: #9e9e9e;'>component</span>) <span style='color: #666666;'>=&gt; component.Test2Component</span></div><div>&nbsp; &nbsp; &nbsp; &nbsp; ),</div><div>&nbsp; &nbsp; &nbsp; <span style='color: #e03e2d;'>header:</span> <span style='color: #9e9e9e;'>'text Two',</span></div><div>&nbsp; &nbsp; &nbsp;<span style='color: #e03e2d;'> rightIcon:</span> <span style='color: #9e9e9e;'>'pi pi-pause',</span></div><div>&nbsp; &nbsp; },</div><div>&nbsp; &nbsp; {</div><div>&nbsp; &nbsp; &nbsp; <span style='color: #169179;'>component</span>: () =&gt;</div><div>&nbsp; &nbsp; &nbsp; &nbsp; <span style='color: #3598db;'>import</span>('../test3/test3.component')<span style='color: #3598db;'>.then</span>(</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (<span style='color: #9e9e9e;'>component</span>) <span style='color: #666666;'>=&gt; component.Test3Component</span></div><div>&nbsp; &nbsp; &nbsp; &nbsp; ),</div><div>&nbsp; &nbsp; &nbsp;<span style='color: #e03e2d;'> header:</span> <span style='color: #9e9e9e;'>'text Three',</span></div><div>&nbsp; &nbsp; &nbsp; <span style='color: #e03e2d;'>leftIcon:</span> <span style='color: #9e9e9e;'>'pi pi-star',</span></div><div>&nbsp; &nbsp; &nbsp; <span style='color: #e03e2d;'>rightIcon:</span> <span style='color: #9e9e9e;'>'pi pi-star-fill',</span></div><div>&nbsp; &nbsp; &nbsp; <span style='color: #e03e2d;'>headerStyleClass:</span> <span style='color: #9e9e9e;'>'green-400',</span></div><div>&nbsp; &nbsp; },</div><div>&nbsp; ];</div></div>"
  ),
};
