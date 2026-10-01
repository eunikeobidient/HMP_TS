import { Injectable } from '@angular/core';
import { Produk } from './produk';

export interface ItemKeranjang {
  produkId: number;
  nama: string;
  harga_jual: number;
  qty: number;
  stokMaksimal: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class KeranjangService {
  listKeranjang: ItemKeranjang[] = [];

  constructor() { }

  getDaftarItem(): ItemKeranjang[] {
    return this.listKeranjang;
  }

  cekItemDiKeranjang(produkId: number): number {
    for (let i = 0; i < this.listKeranjang.length; i++) {
      if (this.listKeranjang[i].produkId === produkId) {
        return i;
      }
    }
    return -1;
  }

  tambahItem(produk: Produk) {
    const indexItem = this.cekItemDiKeranjang(produk.id);
    if (indexItem !== -1) {
      if (this.listKeranjang[indexItem].qty < produk.stock) {
        this.listKeranjang[indexItem].qty++;
      }
    }
    else {
      if (produk.stock > 0) {
        const newKeranjang: ItemKeranjang = {
          produkId: produk.id,
          nama: produk.nama,
          harga_jual: produk.harga_jual,
          qty: 1,
          stokMaksimal: produk.stock,
          url: produk.url
        }
        this.listKeranjang.push(newKeranjang);
      }
    }
  }

  tambahQty(produkId: number) {
    const indexItem = this.cekItemDiKeranjang(produkId);
    if (indexItem !== -1 && this.listKeranjang[indexItem].qty <
      this.listKeranjang[indexItem].stokMaksimal) {
      this.listKeranjang[indexItem].qty++;
    }
  }

  kurangQty(produkId: number) {
    const indexItem = this.cekItemDiKeranjang(produkId);
    if (indexItem !== -1) {
      this.listKeranjang[indexItem].qty--;
      if (this.listKeranjang[indexItem].qty === 0) {
        this.listKeranjang.splice(indexItem, 1);
      }
    }
  }

  hapusItem(produkId: number) {
    const indexItem = this.cekItemDiKeranjang(produkId);
    if (indexItem !== -1) {
      this.listKeranjang.splice(indexItem, 1);
    }
  }

  kosongkanKeranjang() {
    this.listKeranjang = [];
  }

  getQty(produkId: number): number {
    const indexItem = this.cekItemDiKeranjang(produkId);
    return indexItem !== -1 ? this.listKeranjang[indexItem].qty : 0;
  }

  hitungTotalHarga(): number {
    return this.listKeranjang.reduce((total, item) => total + (item.harga_jual * item.qty), 0);
  }

  hitungTotalJenisItem(): number {
    return this.listKeranjang.length;
  }

  hitungTotalQuantity(): number {
    return this.listKeranjang.reduce((total, item) => total + item.qty, 0);
  }
}
