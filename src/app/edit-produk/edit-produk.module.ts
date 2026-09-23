import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { EditProdukPageRoutingModule } from './edit-produk-routing.module';

import { EditProdukPage } from './edit-produk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProdukPageRoutingModule
  ],
  declarations: [EditProdukPage]
})
export class EditProdukPageModule {}
