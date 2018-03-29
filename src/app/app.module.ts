import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventchildComponent } from './eventchild/eventchild.component';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    AppComponent,

    EventchildComponent,

    ParentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}


