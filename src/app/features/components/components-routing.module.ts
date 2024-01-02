import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  // Button route
  {
    path: 'button',
    loadComponent: () =>
      import('./button/button/button.component').then(
        (component) => component.ButtonComponent
      ),
  },
  // Input Route
  {
    path: 'input',
    loadComponent: () =>
      import('./Input/input/input.component').then(
        (component) => component.InputComponent
      ),
  },
  // Message Route
  {
    path: 'message',
    loadComponent: () =>
      import('./message/message/message.component').then(
        (component) => component.MessageComponent
      ),
  },
  // Toaster Route
  {
    path: 'toaster',
    loadComponent: () =>
      import('./Toaster/toaster/toaster.component').then(
        (component) => component.ToasterComponent
      ),
  },
  // TabView Route
  {
    path: 'tabView',
    loadComponent: () =>
      import('./tab-view/tab-view/tab-view.component').then(
        (Component) => Component.TabViewComponent
      ),
  },
  // Slider Route
  {
    path: 'slider',
    loadComponent: () =>
      import('./slider/slider/slider.component').then(
        (component) => component.SliderComponent
      ),
  },
  //Spinner Route
  {
    path: 'spinner',
    loadComponent: () =>
      import('./spinner/spinner/spinner.component').then(
        (component) => component.SpinnerComponent
      ),
  },
  // Profile DropDown
  {
    path: 'profile-dropDown',
    loadComponent: () =>
      import(
        './profile-dropDown/profile-drop-down/profile-drop-down.component'
      ).then((component) => component.ProfileDropDownComponent),
  },
  // Phone Number
  {
    path: 'phone-number',
    loadComponent: () =>
      import('./phone-number/phone-number/phone-number.component').then(
        (component) => component.PhoneNumberComponent
      ),
  },
  {
    path: 'button-uploader',
    loadComponent: () =>
      import(
        './button-uploader/button-uploader/button-uploader.component'
      ).then((component) => component.ButtonUploaderComponent),
  },
  // Datatable route
  {
    path: 'datatable',
    loadComponent: () =>
      import('./datatable/datatable/datatable.component').then(
        (component) => component.DatatableComponent
      ),
  },
  // Checkbox component
  {
    path: 'checkbox',
    loadComponent: () =>
      import('./checkbox/checkbox/checkbox.component').then(
        (component) => component.CheckboxComponent
      ),
  },
  //Image Uploader
  {
    path: 'image-uploader',
    loadComponent: () =>
      import('./image-uploader/image-uploader/image-uploader.component').then(
        (component) => component.ImageUploaderComponent
      ),
  },
  //Carousel
  {
    path: 'carousel',
    loadComponent: () =>
      import('./carousel/carousel/carousel.component').then(
        (component) => component.CarouselComponent
      ),
  },

  //Radio Button Component
  {
    path: 'radioButton',
    loadComponent: () =>
      import('./radio-button/radio-button/radio-button.component').then(
        (component) => component.RadioButtonComponent
      ),
  },
  // Dropdown
  {
    path: 'dropdown',
    loadComponent: () =>
      import('./dropdown/dropdown/dropdown.component').then(
        (component) => component.DropdownComponent
      ),
  },

  // Badge route
  {
    path: 'badge',
    loadComponent: () =>
      import('./badge/badge/badge.component').then(
        (component) => component.BadgeComponent
      ),
  },
  // Rating route
  {
    path: 'rating',
    loadComponent: () =>
      import('./rating/rating/rating.component').then(
        (component) => component.RatingComponent
      ),
  },
  // Knob route
  {
    path: 'knob',
    loadComponent: () =>
      import('./knob/knob/knob.component').then(
        (component) => component.KnobComponent
      ),
  },
  // Image route
  {
    path: 'image',
    loadComponent: () =>
      import('./image/image/image.component').then(
        (component) => component.ImageComponent
      ),
  },
  // Charts route
  // {
  //   path: 'charts',
  //   loadComponent: () =>
  //     import('./charts/charts/charts.component').then(
  //       (component) => component.ChartsComponent
  //     ),
  // },
  // Chips route
  {
    path: 'chips',
    loadComponent: () =>
      import('./chips/chips/chips.component').then(
        (component) => component.ChipsComponent
      ),
  },

  // Charts Skeleton
  {
    path: 'skeleton',
    loadComponent: () =>
      import('./skeleton/skeleton/skeleton.component').then(
        (component) => component.SkeletonComponent
      ),
  },
  // fieldset route
  {
    path: 'fieldset',
    loadComponent: () =>
      import('./filedset/fieldset/fieldset.component').then(
        (component) => component.FieldsetComponent
      ),
  },
  //divider route
  {
    path: 'divider',
    loadComponent: () =>
      import('./divider/divider/divider.component').then(
        (component) => component.DividerComponent
      ),
  },
  // calendar route
  {
    path: 'calendar',
    loadComponent: () =>
      import('./calendar/calendar/calendar.component').then(
        (component) => component.CalendarComponent
      ),
  },
  // input-number route
  {
    path: 'input-number',
    loadComponent: () =>
      import('./Input-number/input-number/input-number.component').then(
        (component) => component.InputNumberComponent
      ),
  },
  // Progress bar route
  {
    path: 'progress-bar',
    loadComponent: () =>
      import('./progress-bar/progress-bar/progress-bar.component').then(
        (component) => component.ProgressBarComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
