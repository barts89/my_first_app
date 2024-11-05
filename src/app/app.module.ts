import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*import { FormsModule } from '@angular/forms';*/

import { AppComponent } from './app.component';
import { Serializer } from '@angular/compiler';
import {HeaderComponent} from './header/header.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
