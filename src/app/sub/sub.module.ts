import { SubRoutingModule } from './sub-routing.module';
import { SubComponent } from './sub.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SubChild1Component } from './sub-child1/sub-child1.component';
import { SubChild2Component } from './sub-child2/sub-child2.component';



@NgModule({
  declarations: [
  SubChild1Component,
  SubChild2Component,
  SubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SubRoutingModule
  ],
  providers: [

  ],
  exports:[
    SubComponent
  ]
})
export class SubModule { }
