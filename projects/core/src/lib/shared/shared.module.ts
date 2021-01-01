import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';



@NgModule({
  declarations: [FormInputComponent, FormSelectComponent],
  imports: [
    CommonModule
  ],
  exports:[FormInputComponent, FormSelectComponent]
})
export class SharedModule { }

 