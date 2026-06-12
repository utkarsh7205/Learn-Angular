import { Routes } from '@angular/router';
import { ForLoopContxVarComponent } from './for-loop-contx-var/for-loop-contx-var.component';
import { SignalsComponent } from './signals/signals.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DynamicStylingComponent } from './dynamic-styling/dynamic-styling.component';
import { DirectivesComponent } from './directives/directives.component';

export const routes: Routes = [

       {
              path: 'forloopcontxvar',
              component: ForLoopContxVarComponent
       },
       {
              path: 'signal',
              component: SignalsComponent
       },
       {
              path: 'twoWayBinding',
              component: TwoWayBindingComponent
       },
       {
              path: 'todolist',
              component: ToDoListComponent
       },
       {
              path: 'dynamicStyling',
              component: DynamicStylingComponent
       },
       {
              path: 'directives',
              component: DirectivesComponent
       },
       {
              path: '',
              redirectTo: 'directives',
              pathMatch: 'full'
       },
]

