import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeranjangService, ItemKeranjang } from '../services/keranjang';
import { ProdukService } from '../services/produk';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})

export class KeranjangPage implements OnInit {
  daftarKeranjang: ItemKeranjang[] = [];
  jenisPembayaran: string = 'Tunai';
  keranjangKosong: boolean = false;
  public alertButtons = ['OK'];

  constructor(
    private keranjangService: KeranjangService,
    private produkService: ProdukService,
    private router: Router
  ) { }

  ngOnInit() {
    this.muatKeranjang();
  }

  ionViewWillEnter() {
    this.muatKeranjang();
  }

  muatKeranjang() {
    this.daftarKeranjang = this.keranjangService.getDaftarItem();
  }

  tambahQty(produkId: number) {
    this.keranjangService.tambahQty(produkId);
  }

  kurangQty(produkId: number) {
    this.keranjangService.kurangQty(produkId);
  }

  hapusItem(produkId: number) {
    this.keranjangService.hapusItem(produkId);
  }

  getTotalHarga(): number {
    return this.keranjangService.hitungTotalHarga();
  }

  hitungTotalProduk(): number {
    return this.keranjangService.hitungTotalQuantity();
  }

  konfirmasiTransaksi() {
    if (this.daftarKeranjang.length === 0) {
      this.keranjangKosong = true;
      return;
    }

    this.daftarKeranjang.forEach(item => {
      this.produkService.kurangiStok(item.produkId, item.qty);
    });

    this.keranjangService.kosongkanKeranjang();
    this.router.navigate(['/list-produk']);
  }

  kembali() {
    this.router.navigate(['/list-produk']);
  }
}