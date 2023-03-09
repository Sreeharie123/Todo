import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBordComponent } from './components/dash-bord/dash-bord.component';

const routes: Routes = [
  {path:"",component:DashBordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
