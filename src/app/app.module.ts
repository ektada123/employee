import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { FontsDirective } from './fonts.directive';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AddComponent } from './add/add.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    FontsDirective,
    AddComponent,
    AddContactComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    RouterModule,
    FormsModule,
    
  ],
  providers: [{provide: LocationStrategy, useClass:  PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
