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

  constructor() {}

  getDaftarItem(): ItemKeranjang[] {
    return this.daftarItem;
  }

  tambahItem(produk: Produk): void {
    const itemExist = this.daftarItem.find(i => i.produkId === produk.id);
    if (itemExist) {
      if (itemExist.qty < produk.stock) {
        itemExist.qty++;
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
    const item = this.daftarItem.find(i => i.produkId === produkId);
    if (item && item.qty < item.stokMaksimal) {
      item.qty++;
    }
  }

  kurangQty(produkId: number): void {
    const index = this.daftarItem.findIndex(i => i.produkId === produkId);
    if (index !== -1) {
      this.daftarItem[index].qty--;
      if (this.daftarItem[index].qty === 0) {
        this.daftarItem.splice(index, 1);
      }
    }
  }

  hapusItem(produkId: number): void {
    const index = this.daftarItem.findIndex(i => i.produkId === produkId);
    if (index !== -1) {
      this.daftarItem.splice(index, 1);
    }
  }

  kosongkanKeranjang(): void {
    this.daftarItem = [];
  }

  getQtyItem(produkId: number): number {
    const item = this.daftarItem.find(i => i.produkId === produkId);
    return item ? item.qty : 0;
  }

  hitungTotalHarga(): number {
    return this.daftarItem.reduce((total, item) => total + (item.harga_jual * item.qty), 0);
  }

  hitungTotalJenisItem(): number {
    return this.daftarItem.length;
  }

  hitungTotalQuantity(): number {
    return this.daftarItem.reduce((total, item) => total + item.qty, 0);
  }
}
