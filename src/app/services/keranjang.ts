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
  private daftarItem: ItemKeranjang[] = [];

  constructor() { }

  getDaftarItem(): ItemKeranjang[] {
    return this.daftarItem;
  }

  tambahItem(produk: Produk): void {
    let sudahAda: boolean = false;
    let indexDitemukan: number = -1;

    for (let i = 0; i < this.daftarItem.length; i++) {
      if (this.daftarItem[i].produkId === produk.id) {
        sudahAda = true;
        indexDitemukan = i;
      }
    }

    if (sudahAda) {
      if (this.daftarItem[indexDitemukan].qty < produk.stock) {
        this.daftarItem[indexDitemukan].qty++;
      }
    } else {
      if (produk.stock > 0) {
        this.daftarItem.push({
          produkId: produk.id,
          nama: produk.nama,
          harga_jual: produk.harga_jual,
          qty: 1,
          stokMaksimal: produk.stock,
          url: produk.url
        });
      }
    }
  }

  tambahQty(produkId: number): void {
    for (let i = 0; i < this.daftarItem.length; i++) {
      if (this.daftarItem[i].produkId === produkId) {
        if (this.daftarItem[i].qty < this.daftarItem[i].stokMaksimal) {
          this.daftarItem[i].qty++;
        }
      }
    }
  }

  kurangQty(produkId: number): void {
    for (let i = 0; i < this.daftarItem.length; i++) {
      if (this.daftarItem[i].produkId === produkId) {
        this.daftarItem[i].qty--;
        if (this.daftarItem[i].qty <= 0) {
          this.hapusPadaIndex(i);
        }
        break;
      }
    }
  }

  hapusItem(produkId: number): void {
    for (let i = 0; i < this.daftarItem.length; i++) {
      if (this.daftarItem[i].produkId === produkId) {
        this.hapusPadaIndex(i);
        break;
      }
    }
  }

  private hapusPadaIndex(index: number): void {
    for (let i = index; i < this.daftarItem.length - 1; i++) {
      this.daftarItem[i] = this.daftarItem[i + 1];
    }
    this.daftarItem.length = this.daftarItem.length - 1;
  }

  kosongkanKeranjang(): void {
    this.daftarItem.length = 0;
  }

  getQtyItem(produkId: number): number {
    for (let i = 0; i < this.daftarItem.length; i++) {
      if (this.daftarItem[i].produkId === produkId) {
        return this.daftarItem[i].qty;
      }
    }
    return 0;
  }

  hitungTotalHarga(): number {
    let total = 0;
    for (let i = 0; i < this.daftarItem.length; i++) {
      total += this.daftarItem[i].harga_jual * this.daftarItem[i].qty;
    }
    return total;
  }

  hitungTotalJenisItem(): number {
    return this.daftarItem.length;
  }

}