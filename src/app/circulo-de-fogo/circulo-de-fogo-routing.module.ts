import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CirculoDeFogoPage } from './circulo-de-fogo.page';

const routes: Routes = [
  {
    path: '',
    component: CirculoDeFogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CirculoDeFogoPageRoutingModule {}
