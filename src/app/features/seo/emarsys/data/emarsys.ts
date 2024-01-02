import { createBasicClass } from "@factories/index";

export const emarsysStep = {
  tsconfig: ` <p><span style="font-size: 17px;"><span style="color: rgb(61, 142, 185);">&quot;allowJs&quot;</span>: <span style="color: rgb(147, 101, 184);">true</span>,&nbsp;</span>/*for emarsys implementions*/</p>`,
  teHtml: `&lt;script type="text/javascript" defer &gt;
  var ScarabQueue = ScarabQueue || [];
  (function (id) {
    if (document.getElementById(id)) return;
    var js = document.createElement("script");
    js.id = id;
   <p>    js.src = <span style="font-size: 17px; color: rgb(84, 172, 210);">"Emarsys Url In The Cloud"</span>
    var fs = document.getElementsByTagName("script")[0];
    fs.parentNode.insertBefore(js, fs);
  })("scarab-js-api");
  &lt;/script &gt;</p>`,
  emarstsFile: `<p><span style="font-size: 16px;"><span style="color: rgb(84, 172, 210);">function&nbsp;</span><span style="color: rgb(97, 189, 109);">go</span>() { &nbsp;</span></p>
  <p><span style="font-size: 16px; color: rgb(243, 121, 52);">// Firing the ScarabQueue. Should be the last **** on the page, called only once. &nbsp;</span></p>
  <p>&nbsp;<span style="color: rgb(26, 188, 156);">ScarabQueue</span>.<span style="color: rgb(84, 172, 210);">push</span>([]);&nbsp;</p>}
  <p>
  <span style="color: rgb(84, 172, 210);">function </span><span style="color: rgb(97, 189, 109);">customerData</span>():void {&nbsp;</p>
  <p>&nbsp;<span style="color: rgb(26, 188, 156);">ScarabQueue</span>.<span style="color: rgb(84, 172, 210);">push</span>([]);&nbsp;</p>
  <p>}</p>
  <p>
  <span style="color: rgb(84, 172, 210);">function </span><span style="color: rgb(97, 189, 109);">emarsysCart</span>():void {&nbsp;</p>
  <p>&nbsp;<span style="color: rgb(26, 188, 156);">ScarabQueue</span>.<span style="color: rgb(84, 172, 210);">push</span>([]);&nbsp;</p>
  <p>}</p>
  <p>
  <span style="color: rgb(84, 172, 210);">function </span><span style="color: rgb(97, 189, 109);">emarsysCurrency</span>():void {&nbsp;</p>
  <p>&nbsp;<span style="color: rgb(26, 188, 156);">ScarabQueue</span>.<span style="color: rgb(84, 172, 210);">push</span>([]);&nbsp;</p>
  <p>}</p>
  <p>
  <span style="color: rgb(84, 172, 210);">function </span><span style="color: rgb(97, 189, 109);">emarsysView</span>():void {&nbsp;</p>
  <p>&nbsp;<span style="color: rgb(26, 188, 156);">ScarabQueue</span>.<span style="color: rgb(84, 172, 210);">push</span>([]);&nbsp;</p>
  <p>}</p>
  <p>
  <span style="color: rgb(84, 172, 210);">function </span><span style="color: rgb(97, 189, 109);">emarsysPurchase</span>():void {&nbsp;</p>
  <p>&nbsp;<span style="color: rgb(26, 188, 156);">ScarabQueue</span>.<span style="color: rgb(84, 172, 210);">push</span>([]);&nbsp;</p>
  <p>}</p>
  <p>
  <span style="color: rgb(84, 172, 210);">function </span><span style="color: rgb(97, 189, 109);">emarsysEmail</span>():void {&nbsp;</p>
  <p>&nbsp;<span style="color: rgb(26, 188, 156);">ScarabQueue</span>.<span style="color: rgb(84, 172, 210);">push</span>([]);&nbsp;</p>
  <p>}</p>
`,
  declare: `declare function emarsysView(value): void;
declare function emarsysCart(): void;
declare function go(): void;

function(value){
  emarsysView(value.name)

}
`,
howToUse:createBasicClass([{ import: 'EmarsysService', from: '@assaf-garage/assaf-core-library/services' }] , `<div style="margin: 5px 0;">
<div><div><div><span style="color: #e25041;">cartEvent</span>:<span style="color: #169179;">EmarsysCommand</span><span style="color: #000000;"> =['cart' , [{item:'bike' , quantity:3 , price:19.2}]] ;</span></div><div><span style="color: #e25041;">availabilityZoneEvent</span>:<span style="color: #169179;">EmarsysCommand </span><span style="color: #000000;">= ['availabilityZone' , 'Available'];</span></div><div><span style="color: #e25041;">categoryEvent</span>:<span style="color: #169179;">EmarsysCommand</span> <span style="color: #000000;">= ['category' , 'Phone'];</span></div><div><span style="color: #e25041;">displayCurrencyEvent</span>:<span style="color: #169179;">EmarsysCommand</span> <span style="color: #000000;">= ['displayCurrency','$'];</span></div><div><span style="color: #e25041;">languageEvent</span>:<span style="color: #169179;">EmarsysCommand</span> <span style="color: #000000;">= ['language', 'ar'];</span></div><div><span style="color: #e25041;">purchaseEvent</span>:<span style="color: #169179;">EmarsysCommand</span> <span style="color: #000000;">= ['purchase',{</span></div><div><span style="color: #000000;">&nbsp; &nbsp; orderId:'1',</span></div><div><span style="color: #000000;">&nbsp; &nbsp; items:[{</span></div><div><span style="color: #000000;">&nbsp; &nbsp; &nbsp; item:'nokia',quantity:1,price:200</span></div><div><span style="color: #000000;">&nbsp; &nbsp; },</span></div><div><span style="color: #000000;">&nbsp; &nbsp; {</span></div><div><span style="color: #000000;">&nbsp; &nbsp; &nbsp; item:'iPhone',quantity:2,price:1200</span></div><div><span style="color: #000000;">&nbsp; &nbsp; }]</span></div><div><span style="color: #000000;">&nbsp; }]</span></div><div><span style="color: #e25041;">searchTerm</span>:<span style="color: #169179;">EmarsysCommand</span> <span style="color: #000000;">= ['searchTerm', 'healthy food'];</span></div><div><span style="color: #e25041;">setCustomerIdEvent</span>:<span style="color: #169179;">EmarsysCommand </span><span style="color: #000000;">= ['setCustomerId', '102'];</span></div><div><span style="color: #e25041;">setEmailEvent</span>:<span style="color: #169179;">EmarsysCommand</span> <span style="color: #000000;">= ['setEmail', 'example@gmail.com'];</span></div><div><span style="color: #e25041;">testModeEvent</span>:<span style="color: #169179;">EmarsysCommand</span> <span style="color: #000000;">= ['testMode'];</span></div><div><span style="color: #e25041;">viewEvent</span>:<span style="color: #169179;">EmarsysCommand</span><span style="color: #000000;"> = ['view','300'];</span></div><div><span style="color: #e25041;">includeEvent</span>:<span style="color: #169179;">EmarsysCommand</span><span style="color: #000000;"> = ['include','healthy food','has','supplements'];</span></div><div><span style="color: #e25041;">excludeEvent</span>:<span style="color: #169179;">EmarsysCommand</span> <span style="color: #000000;">= ['exclude','iPhone','in','mobiles'];</span></div></div></div><div>&nbsp;</div><div><span style="color: #e25041;">constructor</span>(<span style="color: #54acd2;">private</span> <span style="color: #169179;">__emarsys</span>:<span style="color: #e25041;">EmarsysService</span>) {}</div><div><div>ngOnInit() {</div><div><span style="color: #999999;"> //Loads emarsys script in html document</span></div><div><span style="color: #999999;"> //emarsysUrl url of script to be loaded</span></div><div><span style="color: #169179;">this.__emarsys</span>.<span style="color: #54acd2;">addEmarsysScript</span>(<span style="color: #e25041;">emarsysUrl</span>:<span style="color: #169179;">string</span>);</div> <div>&nbsp;</div><div><span style="color: #999999;">//Adds emarsys go command to ScarabQueue</span></div><div><span style="color: #999999;"><span style="color: #169179;">this.__emarsys</span>.<span style="color: #54acd2;">go()</span>;</span></div><div>&nbsp;</div><div><span style="color: #999999;">//Adds a new event to ScarabQueue when a certain action gets performed</span></div><div><span style="color: #999999;"><span style="color: #999999;"><span style="color: #169179;">this.__emarsys</span>.</span></span><span style="color: #54acd2;">addEmarsysEvent</span>(<span style="color: #e25041;">event</span>: <span style="color: #169179;">EmarsysCommand</span>): void</div>
`
),
};
  