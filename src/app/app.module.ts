import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { DesignerComponent } from './designer/designer.component';
import { DeveloperComponent } from './developer/developer.component';
import { ProjectmanagerComponent } from './projectmanager/projectmanager.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignerComponent,
    DeveloperComponent,
    ProjectmanagerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
