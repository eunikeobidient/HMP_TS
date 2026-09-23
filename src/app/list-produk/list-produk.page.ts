import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private produkService: ProdukService,
    private keranjangService: KeranjangService,
    private router: Router
  ) { }

  ngOnInit() {
    this.muatProduk();
  }

  ionViewWillEnter() {
    this.muatProduk();
  }

  muatProduk() {
    this.filterProduk();
  }

  filterProduk() {
    const semuaProduk = this.produkService.getSemuaProduk();
    const keyword = this.kataKunciPencarian.trim().toLowerCase();

    this.produkTampil = semuaProduk.filter(produk => {
      const cocokNama = produk.nama.toLowerCase().includes(keyword);
      const cocokKategori = this.kategoriAktif === 'Semua' || produk.kategori === this.kategoriAktif;
      return cocokNama && cocokKategori;
    });
  }

  tambahAwal(produk: Produk) {
    this.keranjangService.tambahItem(produk);
  }

  tambahQty(produkId: number) {
    this.keranjangService.tambahQty(produkId);
  }

  kurangQty(produkId: number) {
    this.keranjangService.kurangQty(produkId);
  }

  getQty(produkId: number): number {
    return this.keranjangService.getQtyItem(produkId);
  }

  getTotalJenisBarang(): number {
    return this.keranjangService.hitungTotalJenisItem();
  }

  bukaKeranjang() {
    this.router.navigate(['/keranjang']);
  }

  tambahProdukBaru() {
    this.router.navigate(['/tambah-produk']);
  }

  bukaDetail(id: number) {
    this.router.navigate(['/detail-produk', id]);
  }
}
