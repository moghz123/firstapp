import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav/nav.component';
import { ToggrlDirective } from './toggrl.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToggrlDirective
  ],
  imports: [
    BrowserModule,FormsModule,RouterTestingModule,
    AppRoutingModule,UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
