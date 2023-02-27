import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { OneAComponent } from './one-a/one-a.component';
import { OneBComponent } from './one-b/one-b.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    OneAComponent,
    OneBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
