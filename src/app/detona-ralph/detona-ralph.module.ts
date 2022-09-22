import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetonaRalphPageRoutingModule } from './detona-ralph-routing.module';

import { DetonaRalphPage } from './detona-ralph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetonaRalphPageRoutingModule
  ],
  declarations: [DetonaRalphPage]
})
export class DetonaRalphPageModule {}
