import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  jumlahProduk: number = 0;
  constructor() { }

  // bikin di transaksi utk hitung jumlah produk harian, total transaksi harian, dan produk terlaris hari itu

}
