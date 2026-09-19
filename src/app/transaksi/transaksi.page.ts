import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})

export class TransaksiPage implements OnInit {

  // Dummy data
  cartProduk = [
    {
      nama: 'Beras Rojolele 5kg',
      harga_jual: 65000,
      qty: 2,
      url: 'https://placehold.co/600x400/png'
    },
    {
      nama: 'Minyak Goreng Bimoli 2L',
      harga_jual: 38000,
      qty: 1,
      url: 'https://placehold.co/600x400/png'
    },
    {
      nama: 'Gula Pasir Gulaku 1kg',
      harga_jual: 16000,
      qty: 3,
      url: 'https://placehold.co/600x400/png'
    }
  ];

  totalItems: number = 0;
  totalBelanja: number = 0;
  metodePembayaran: string = 'tunai';

  keywordSearch: string = '';
  filteredProduk = this.cartProduk;

  constructor() { }

  ngOnInit() {
  }

  tambahQty(item: any) {

  }

  kurangQty(item: any) {

  }

  hapusSemua() {
    this.cartProduk = [];
    this.filteredProduk = [];
  }

  hitungTotal() {
    this.totalItems = this.cartProduk.reduce((acc, curr) => acc + curr.qty, 0);
    this.totalBelanja = this.cartProduk.reduce((acc, curr) => acc + (curr.harga_jual * curr.qty), 0);
  }

  cariProduk() {
    const keyword = this.keywordSearch.trim().toLowerCase();
    if (keyword === '') {
      this.filteredProduk = this.cartProduk;
      return;
    }
    this.filteredProduk = this.cartProduk.filter(item =>
      item.nama.toLowerCase().includes(keyword)
    );
  }

}
