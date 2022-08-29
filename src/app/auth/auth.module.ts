import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    ContactComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContactComponent,
    EditComponent
  ]
})
export class AuthModule { }
