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

    const hasil: Produk[] = [];
    for (let i = 0; i < semuaProduk.length; i++) {
      const produk = semuaProduk[i];
      const cocokNama = produk.nama.toLowerCase().includes(keyword);
      const cocokKategori = this.kategoriAktif === 'Semua' || produk.kategori === this.kategoriAktif;
      if (cocokNama && cocokKategori) {
        hasil.push(produk);
      }
    }
    this.produkTampil = hasil;
  }

  tambahKeKeranjang(produk: Produk) {
    this.keranjangService.tambahKeKeranjang(produk);
  }

  isItemInKeranjang(produkId: number): boolean {
    return this.keranjangService.getQtyItem(produkId) > 0;
  }

  getWarnaTombol(produkId: number): string {
    if (this.isItemInKeranjang(produkId)) {
      return 'medium';
    } else {
      return 'primary';
    }
  }

  getIkonTombol(produkId: number): string {
    if (this.isItemInKeranjang(produkId)) {
      return 'checkmark-outline';
    } else {
      return 'add-outline';
    }
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