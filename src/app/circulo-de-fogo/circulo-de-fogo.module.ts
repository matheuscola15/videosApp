import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CirculoDeFogoPageRoutingModule } from './circulo-de-fogo-routing.module';

import { CirculoDeFogoPage } from './circulo-de-fogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CirculoDeFogoPageRoutingModule
  ],
  declarations: [CirculoDeFogoPage]
})
export class CirculoDeFogoPageModule {}
