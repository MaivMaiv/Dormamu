import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegotiatePage } from './negotiate.page';

const routes: Routes = [
  {
    path: '',
    component: NegotiatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegotiatePageRoutingModule {}
