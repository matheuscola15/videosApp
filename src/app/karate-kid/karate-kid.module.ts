import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarateKidPageRoutingModule } from './karate-kid-routing.module';

import { KarateKidPage } from './karate-kid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarateKidPageRoutingModule
  ],
  declarations: [KarateKidPage]
})
export class KarateKidPageModule {}
