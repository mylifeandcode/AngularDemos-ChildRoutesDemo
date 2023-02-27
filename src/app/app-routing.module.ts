import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OneAComponent } from './one-a/one-a.component';
import { OneBComponent } from './one-b/one-b.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: 'one', 
        component: OneComponent, 
        children: [
          {
            path: 'one-a',
            component: OneAComponent
          },
          {
            path: 'one-b',
            component: OneBComponent
          }
        ]
      },
      {
        path: 'two',
        component: TwoComponent, 
      },
      {
        path: 'three',
        component: ThreeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
