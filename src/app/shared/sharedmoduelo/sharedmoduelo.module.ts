import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadercomponentComponent } from './components/loadercomponent/loadercomponent.component';



@NgModule({
  declarations: [
    LoadercomponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoadercomponentComponent]
})
export class SharedModule { }
