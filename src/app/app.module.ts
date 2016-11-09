import { SubModule } from './sub/sub.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { SubComponent } from './sub/sub.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    Child1Component,
    Child2Component,
    // SubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
