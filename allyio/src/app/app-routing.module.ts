import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayOkrComponent } from './display-okr/display-okr.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'okr',
    pathMatch: 'full'
  },
  {
    path: "okr",
    component: DisplayOkrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
