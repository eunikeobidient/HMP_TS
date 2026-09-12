import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransaksiPage } from './transaksi.page';

const routes: Routes = [
  {
    path: '',
    component: TransaksiPage
  },  {
    path: 'detailtransaksi',
    loadChildren: () => import('./detailtransaksi/detailtransaksi.module').then( m => m.DetailtransaksiPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaksiPageRoutingModule {}
