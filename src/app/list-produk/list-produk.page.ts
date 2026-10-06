import { Component, OnInit } from '@angular/core';
import { ProdukService, Produk_Temp } from '../produk.service';
import { KeranjangService } from '../keranjang.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.page.html',
  styleUrls: ['./list-produk.page.scss'],
  standalone: false,
})

export class ListProdukPage {
  kataKunciPencarian: string = '';
  kategoriAktif: string = 'Semua';
  produkTampil: Produk_Temp[] = [];

  constructor(private produkService: ProdukService, private keranjangService: KeranjangService) { }

  ngOnInit() {
    this.muatProduk();
  }

  ionViewWillEnter(){
    this.muatProduk();
  }

  muatProduk() {
    const keyword = this.kataKunciPencarian.trim();
    this.filterProduk(keyword, this.kategoriAktif);
  }

  filterProduk(nama: string = "", kategori: string = "Semua") {
    if (nama === "") {
      if (kategori === "Semua") {
        this.produkTampil = this.produkService.produkList;
      } else {
        let temporaryArray = [];
        for (let produk of this.produkService.produkList) {
          if (produk.kategori === kategori) {
            temporaryArray.push(produk);
          }
        }
        this.produkTampil = temporaryArray;
      }
    } else {
      let temporaryArray = [];
      if (kategori === "Semua") {
        for (let produk of this.produkService.produkList) {
          if (produk.nama.toLowerCase().includes(nama.toLowerCase())) {
            temporaryArray.push(produk);
          }
        }
      } else {
        for (let produk of this.produkService.produkList) {
          if (produk.nama.toLowerCase().includes(nama.toLowerCase()) && produk.kategori === kategori) {
            temporaryArray.push(produk);
          }
        }
      }
      this.produkTampil = temporaryArray;
    }
  }

  tambahItem(produk: Produk_Temp) {
    this.keranjangService.tambahItem(produk);
  }

  tambahQty(produkId: number) {
    this.keranjangService.tambahQty(produkId);
  }

  kurangQty(produkId: number) {
    this.keranjangService.kurangQty(produkId);
  }

  getQty(produkId: number): number {
    return this.keranjangService.getQty(produkId);
  }

  hitungTotalKeranjang(): number{
    return this.keranjangService.hitungTotalJenisItem();
  }
}

