import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
 
import { ContactComponent } from './auth/contact/contact.component';
import { EditComponent } from './auth/edit/edit.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {path:'edit/:editid', component:EditComponent},
  {path: 'contact/:contactid',
   
children:[
  {path:'addcontact', component:AddContactComponent},

  {path: 'contact', component: ContactComponent}
] 
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
