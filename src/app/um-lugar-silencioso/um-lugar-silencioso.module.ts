import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UmLugarSilenciosoPageRoutingModule } from './um-lugar-silencioso-routing.module';

import { UmLugarSilenciosoPage } from './um-lugar-silencioso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UmLugarSilenciosoPageRoutingModule
  ],
  declarations: [UmLugarSilenciosoPage]
})
export class UmLugarSilenciosoPageModule {}
