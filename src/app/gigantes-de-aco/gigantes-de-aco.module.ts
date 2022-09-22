import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GigantesDeAcoPageRoutingModule } from './gigantes-de-aco-routing.module';

import { GigantesDeAcoPage } from './gigantes-de-aco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GigantesDeAcoPageRoutingModule
  ],
  declarations: [GigantesDeAcoPage]
})
export class GigantesDeAcoPageModule {}
