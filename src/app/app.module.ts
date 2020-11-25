import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DesignerComponent } from './designer/designer.component';
import { DeveloperComponent } from './developer/developer.component';
import { ProjectmanagerComponent } from './projectmanager/projectmanager.component';
import { FormComponent } from './form/form.component';
import { FormDataComponent } from './form-data/form-data.component';
import { GetColor } from './color';

@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    DeveloperComponent,
    ProjectmanagerComponent,
    FormComponent,
    FormDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GetColor],
  bootstrap: [AppComponent]
})
export class AppModule { }
