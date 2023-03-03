import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegotiatePageRoutingModule } from './negotiate-routing.module';

import { NegotiatePage } from './negotiate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegotiatePageRoutingModule
  ],
  declarations: [NegotiatePage]
})
export class NegotiatePageModule {}
