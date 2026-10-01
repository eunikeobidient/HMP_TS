import { Component } from '@angular/core';
import { Produk, ProdukService } from '../services/produk';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  jumlahProduk: number = 0;
  constructor(private produkService: ProdukService, private transaksiService: Transaksi) { }

  // bikin di transaksi utk hitung jumlah produk harian, total transaksi harian, dan produk terlaris hari itu

}
