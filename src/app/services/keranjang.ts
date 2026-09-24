import { Injectable } from '@angular/core';
import { Produk } from './produk';

export interface ItemKeranjang {
  produkId: number;
  nama: string;
  harga_jual: number;
  qty: number;
  stok: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class KeranjangService {
  private daftarItemDiKeranjang: ItemKeranjang[] = [];

  constructor() { }

  getDaftarItem(): ItemKeranjang[] {
    return this.daftarItemDiKeranjang;
  }

  tambahKeKeranjang(produk: Produk): void {
    let sudahDiKeranjang: boolean = false;
    let index: number = -1;

    for (let i = 0; i < this.daftarItemDiKeranjang.length; i++) {
      if (this.daftarItemDiKeranjang[i].produkId === produk.id) {
        sudahDiKeranjang = true;
        index = i;
      }
    }

    if (sudahDiKeranjang) {
      if (this.daftarItemDiKeranjang[index].qty < produk.stock) {
        this.daftarItemDiKeranjang[index].qty++;
      }
    } else {
      if (produk.stock > 0) { //jika stok 0 maka tidak bisa di add ke keranjang
        this.daftarItemDiKeranjang.push({ //masukkan ke keranjang
          produkId: produk.id,
          nama: produk.nama,
          harga_jual: produk.harga_jual,
          qty: 1,
          stok: produk.stock,
          url: produk.url
        });
      }
    }
  }

  tambahQty(produkId: number): void {
    for (let i = 0; i < this.daftarItemDiKeranjang.length; i++) {
      if (this.daftarItemDiKeranjang[i].produkId === produkId) {
        if (this.daftarItemDiKeranjang[i].qty < this.daftarItemDiKeranjang[i].stok) {
          this.daftarItemDiKeranjang[i].qty++;
        }
      }
    }
  }

  kurangQty(produkId: number): void {
    for (let i = 0; i < this.daftarItemDiKeranjang.length; i++) {
      if (this.daftarItemDiKeranjang[i].produkId === produkId) {
        this.daftarItemDiKeranjang[i].qty--;
        if (this.daftarItemDiKeranjang[i].qty <= 0) {
          this.hapusPadaIndex(i);
        }
        break;
      }
    }
  }

  hapusItem(produkId: number): void {
    for (let i = 0; i < this.daftarItemDiKeranjang.length; i++) {
      if (this.daftarItemDiKeranjang[i].produkId === produkId) {
        this.hapusPadaIndex(i);
        break;
      }
    }
  }

  private hapusPadaIndex(index: number): void {
    for (let i = index; i < this.daftarItemDiKeranjang.length - 1; i++) {
      this.daftarItemDiKeranjang[i] = this.daftarItemDiKeranjang[i + 1];
    }
    this.daftarItemDiKeranjang.length = this.daftarItemDiKeranjang.length - 1;
  }

  kosongkanKeranjang(): void {
    this.daftarItemDiKeranjang.length = 0;
  }

  getQtyItem(produkId: number): number {
    for (let i = 0; i < this.daftarItemDiKeranjang.length; i++) {
      if (this.daftarItemDiKeranjang[i].produkId === produkId) {
        return this.daftarItemDiKeranjang[i].qty;
      }
    }
    return 0;
  }

  hitungTotalHarga(): number {
    let total = 0;
    for (let i = 0; i < this.daftarItemDiKeranjang.length; i++) {
      total += this.daftarItemDiKeranjang[i].harga_jual * this.daftarItemDiKeranjang[i].qty;
    }
    return total;
  }

  hitungTotalJenisItem(): number {
    return this.daftarItemDiKeranjang.length;
  }

}