import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetonaRalphPage } from './detona-ralph.page';

const routes: Routes = [
  {
    path: '',
    component: DetonaRalphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetonaRalphPageRoutingModule {}
