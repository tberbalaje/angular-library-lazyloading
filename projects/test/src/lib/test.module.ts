
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { SharedModule} from 'core'
 
@NgModule({
  imports: [
    RouterModule.forChild([
      {
          path: '', pathMatch: 'full', component: TestComponent
      }
    ]), SharedModule
  ],
  declarations: [TestComponent],
  exports: [TestComponent]
})
export class TestModule { }

