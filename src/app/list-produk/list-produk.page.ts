import { Component, OnInit } from '@angular/core';
import { ProdukService, Produk } from '../services/produk';
import { KeranjangService } from '../services/keranjang';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.page.html',
  styleUrls: ['./list-produk.page.scss'],
  standalone: false,
})
export class ListProdukPage implements OnInit {
  kataKunciPencarian: string = '';
  kategoriAktif: string = 'Semua';
  produkTampil: Produk[] = [];
  totalKeranjang: number = 0;

  constructor(
    private produkService: ProdukService, private keranjangService: KeranjangService) { }

  ngOnInit() {
    this.muatProduk();
    this.updateTotalKeranjang();
  }

  ionViewWillEnter() {
    this.muatProduk();
    this.updateTotalKeranjang();
  }

  muatProduk() {
    const semuaProduk = ProdukService.produkList;
    const keyword = this.kataKunciPencarian.trim().toLowerCase();

    this.produkTampil = semuaProduk.filter(produk => {
      const cocokNama = produk.nama.toLowerCase().includes(keyword);
      const cocokKategori = this.kategoriAktif === 'Semua' || produk.kategori === this.kategoriAktif;
      return cocokNama && cocokKategori;
    });
  }

  tambahItem(produk: Produk) {
    this.keranjangService.tambahItem(produk);
    this.updateTotalKeranjang();
  }

  tambahQty(produkId: number) {
    this.keranjangService.tambahQty(produkId);
    this.updateTotalKeranjang();
  }

  kurangQty(produkId: number) {
    this.keranjangService.kurangQty(produkId);
    this.updateTotalKeranjang();
  }

  getQty(produkId: number): number {
    return this.keranjangService.getQty(produkId);
  }

  updateTotalKeranjang() {
    this.totalKeranjang = this.keranjangService.hitungTotalJenisItem();
  }
}
