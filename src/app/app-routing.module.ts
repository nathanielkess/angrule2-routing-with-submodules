import { SubComponent } from './sub/sub.component';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './child1/child1.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'child1', pathMatch: 'full' },
      { path: 'child1', component: Child1Component},
      { path: 'child2', component: Child2Component },
      { path: 'subs', component: SubComponent}
    ])
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }