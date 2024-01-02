export const phoneNumberExample = {
  html: {
    Basic: `<div [formGroup]="form">
  <assaf-phonenumber controlName="phoneNumber"></assaf-phonenumber>
</div>`,
    Label: `<div [formGroup]="form">
  <assaf-phonenumber label="Phone Number :" labelStyleClass="styleLabel"
  controlName="phoneNumber"></assaf-phonenumber>
</div>`,
    CountryCode: `<div [formGroup]="form">
    <assaf-phonenumber controlName="phoneNumber" [pereferedCountry]="setCountryCode"
    ></assaf-phonenumber>
</div>`,
  },
  ts: {
    CountryCode: `<p><span style="color: #b96ad9;">import</span>  {<span style="color: #169179;"> CountryCode </span>} <span style="color: #b96ad9;">from</span> <span style="color: #e03e2d;"> '@assaf-garage/assaf-core-library/components/@phone-number'</span>;
<span style="color: #169179;">@Component</span><span style="color: #b96ad9;">({</span>
...
<span style="color: #b96ad9;">})</span>
<span style="color: #b96ad9;">export</span> <span style="color: #3598db;">class</span>  <span style="color: #169179;">YourComponent</span> {
  setCountryCode: any;
<p><span style="color: #b96ad9;">constructor () {
 <span style="color:#6c6cdf"> this.setCountryCode = CountryCode.Malawi</span>
}</span>`,
  },
};
