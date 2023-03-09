import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBordComponent } from './components/dash-bord/dash-bord.component';
import { FavariteComponent } from './components/favarite/favarite.component';
import { ImportantComponent } from './components/important/important.component';

const routes: Routes = [
  {path:"",component:DashBordComponent},
  {path:'favorite',component:FavariteComponent},
  {path:'important',component:ImportantComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
