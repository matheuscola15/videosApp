import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarateKidPage } from './karate-kid.page';

const routes: Routes = [
  {
    path: '',
    component: KarateKidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarateKidPageRoutingModule {}
