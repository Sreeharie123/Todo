import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBordComponent } from './components/dash-bord/dash-bord.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FavariteComponent } from './components/favarite/favarite.component';
import { ImportantComponent } from './components/important/important.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBordComponent,
    NavComponent,
    FavariteComponent,
    ImportantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
