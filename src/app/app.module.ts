import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormBuilderComponent } from './form-builder/form-builder.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './form-builder/forms/forms.component'

@NgModule({
  declarations: [AppComponent, FormBuilderComponent, FormsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
