import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UmLugarSilenciosoPage } from './um-lugar-silencioso.page';

const routes: Routes = [
  {
    path: '',
    component: UmLugarSilenciosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmLugarSilenciosoPageRoutingModule {}
