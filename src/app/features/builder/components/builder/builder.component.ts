import { Component, OnInit } from '@angular/core';
import { DndDropEvent, DndModule, DropEffect } from 'ngx-drag-drop';

import { Field } from '../../model/filed/i-field';
import { SharedModule } from '@shared-module/shared.module';
import { NgForm } from '@angular/forms';
import { CategoryFilterPipe } from '../../pipe/category-filter/category-filter.pipe';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
  imports: [DndModule, SharedModule, CategoryFilterPipe],
  standalone: true,
})
export class BuilderComponent implements OnInit {
  model: any = {
    fields: Array<Field>(),
  };

  value: any = {
    label: '',
    value: '',
  };
  fieldModels: Array<Field> = [
    {
      type: 'h1',
      icon: 'fas fa-heading',
      label: 'h1',
      category: 'typoGraphy',
    },
    {
      type: 'h2',
      icon: 'fas fa-heading',
      label: 'h2',
      category: 'typoGraphy',
    },
    {
      type: 'h3',
      icon: 'fas fa-heading',
      label: 'h3',
      category: 'typoGraphy',
    },
    {
      type: 'h4',
      icon: 'fas fa-heading',
      label: 'h4',
      category: 'typoGraphy',
    },
    {
      type: 'h5',
      icon: 'fas fa-heading',
      label: 'h5',
      category: 'typoGraphy',
    },
    {
      type: 'h6',
      icon: 'fas fa-heading',
      label: 'h6',
      category: 'typoGraphy',
    },
  ];
  constructor() {}

  ngOnInit() {}

  onDragStart(event: any): void {
    console.log('drag started', JSON.stringify(event, null, 2));
  }

  onDragEnd(event: any) {
    console.log('drag ended', JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: any) {
    console.log('draggable copied', JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: any) {
    console.log('draggable linked', JSON.stringify(event, null, 2));
  }

  onDragged(item: any, list: any[], effect: any) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragCanceled(event: any) {
    console.log('drag cancelled', JSON.stringify(event, null, 2));
  }

  onDragover(event: any) {
    console.log('dragover', JSON.stringify(event, null, 2));
  }

  onDrop(event: any, list?: any[]) {
    debugger;
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      if (event.dropEffect === 'copy')
        event.data.name = event.data.type + '-' + new Date().getTime();
      let index = event.index;
      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }
  addValue(values: any) {
    // debugger;
    // values.push(this.value);
    // this.value = { label: '', value: '' };
  }

  removeField(i: any, data: any) {
    // debugger;
    // swal({
    //   title: 'Are you sure?',
    //   text: 'Do you want to remove this field?',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#00B96F',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, remove!',
    // }).then((result) => {
    //   if (result.value) {
    //     debugger;
    //     this.model.tabs[this.selectedTabIndex].accordions.map(function (
    //       element
    //     ) {
    //       debugger;
    //       if (element.id == data.id) {
    //         element.fields.splice(i, 1);
    //       }
    //     });
    //   }
    // });
  }

  updateForm() {
    // debugger;
    // let input = new FormData();
    // input.append('id', this.model._id);
    // input.append('name', this.model.name);
    // input.append('description', this.model.description);
    // input.append('bannerImage', this.model.theme.bannerImage);
    // input.append('bgColor', this.model.theme.bgColor);
    // input.append('textColor', this.model.theme.textColor);
    // input.append('fields', JSON.stringify(this.model.fields));
    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }

  toggleValue(item: any) {
    item.selected = !item.selected;
  }

  setMinDate(item: any) {
    item.minDate = new Date(item);
  }

  setMaxDate(item: any) {
    item.maxDate = new Date(item);
  }

  reset(playlistForm: NgForm) {
    playlistForm.resetForm();
  }
  submit(item: any) {
    // debugger;
    // let valid = true;
    // let validationArray = JSON.parse(JSON.stringify(this.model.fields));
    // validationArray.reverse().forEach((field) => {
    //   console.log(field.label + '=>' + field.required + '=>' + field.value);
    //   if (field.required && !field.value && field.type != 'checkbox') {
    //     swal('Error', 'Please enter ' + field.label, 'error');
    //     valid = false;
    //     return false;
    //   }
    //   if (field.required && field.regex) {
    //     let regex = new RegExp(field.regex);
    //     if (regex.test(field.value) == false) {
    //       swal('Error', field.errorText, 'error');
    //       valid = false;
    //       return false;
    //     }
    //   }
    //   if (field.required && field.type == 'checkbox') {
    //     if (field.values.filter((r) => r.selected).length == 0) {
    //       swal('Error', 'Please enterrr ' + field.label, 'error');
    //       valid = false;
    //       return false;
    //     }
    //   }
    // });
    // if (!valid) {
    //   return false;
    // }
    // console.log('Save', this.model);
    // let input = new FormData();
    // input.append('fields', JSON.stringify(this.model.fields));
    // // input.append("formId", this.model._id);
    // // input.append("fields", JSON.stringify(this.model.fields));
    // this.http.post('http://localhost:50952/weatherforecast', input).subscribe(
    //   (r) => {
    //     debugger;
    //     console.log(r);
    //     swal('Success', 'You have contact sucessfully', 'success');
    //     this.success = true;
    //   },
    //   (error) => {
    //     swal('Error', error.message, 'error');
    //   }
    // );
  }

  copy(item: any) {
    // debugger;
    // document.addEventListener('copy', (e: ClipboardEvent) => {
    //   e.clipboardData.setData('text/plain', JSON.stringify(item));
    //   e.preventDefault();
    //   document.removeEventListener('copy', null);
    // });
    // document.execCommand('copy');
    // this.snackBar.openFromComponent(SnackBarComponent, {
    //   duration: 3000,
    // });
  }
}
