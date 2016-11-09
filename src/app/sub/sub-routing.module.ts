import { SubComponent } from './sub.component';
import { SubChild2Component } from './sub-child2/sub-child2.component';
import { SubChild1Component } from './sub-child1/sub-child1.component';

import { Router, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'subs/sub1', pathMatch: 'full'},
      { path: 'subs', component: SubComponent, children:[
        { path: 'sub1', component: SubChild1Component},
        { path: 'sub2', component: SubChild2Component },
      ]}
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class SubRoutingModule { }