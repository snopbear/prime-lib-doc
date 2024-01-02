import { Component } from '@angular/core';
import { DisplayService } from 'assaf-prime-lib/services';
import { AssafButtonUploaderModule } from 'assaf-prime-lib/@components/@button-uploader';
import { SharedModule } from '@shared-module/shared.module';
import { propertiesButton, buttonUploaderData } from '../data/index';

@Component({
  standalone: true,
  selector: 'assaf-documentation-button-uploader-examples',
  templateUrl: './button-uploader-examples.component.html',
  styleUrls: ['./button-uploader-examples.component.scss'],
  imports: [SharedModule, AssafButtonUploaderModule],
})
export class ButtonUploaderExamplesComponent {
  //#region Declerations
  get properties() {
    return propertiesButton;
  }
  get uploaderButtonsShapes() {
    return buttonUploaderData.uploaderButtonsShapes;
  }
  get uploaderButtonsSeverity() {
    return buttonUploaderData.btnSeverity;
  }
  get uploaderButtonsSizes() {
    return buttonUploaderData.uploaderButtonsSizes;
  }
  severityHTMLcode: string = this.uploaderButtonsSeverity[0].html;
  buttonSizeHTMLcode: string = this.uploaderButtonsSizes[0].html;
  //#endregion Declerations

  constructor(private __toaster: DisplayService) {}

  //#region Methods
  showSeverityCode(severity: string): void {
    switch (severity) {
      case 'success':
        this.severityHTMLcode = this.uploaderButtonsSeverity[0].html;
        break;
      case 'warning':
        this.severityHTMLcode = this.uploaderButtonsSeverity[1].html;
        break;
      case 'danger':
        this.severityHTMLcode = this.uploaderButtonsSeverity[2].html;
        break;
      case 'info':
        this.severityHTMLcode = this.uploaderButtonsSeverity[3].html;
        break;
      case 'help':
        this.severityHTMLcode = this.uploaderButtonsSeverity[4].html;
        break;
      case 'secondary':
        this.severityHTMLcode = this.uploaderButtonsSeverity[5].html;
        break;
    }
  }
  showSizeCode(size: string): void {
    switch (size) {
      case 'sm':
        this.buttonSizeHTMLcode = this.uploaderButtonsSizes[0].html;
        break;
      case 'normal':
        this.buttonSizeHTMLcode = this.uploaderButtonsSizes[1].html;
        break;
      case 'lg':
        this.buttonSizeHTMLcode = this.uploaderButtonsSizes[2].html;
        break;
    }
  }

  showToast(e: any): void {
    this.__toaster.displayToast('success', '', e.name + ' Uploaded');
  }
  //#endregion Methods
}
