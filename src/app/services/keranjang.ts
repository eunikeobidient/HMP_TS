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
  static listKeranjang: ItemKeranjang[] = [];

  constructor() { }

  cekItemDiKeranjang(produkId: number): number {
    for (let i = 0; i < KeranjangService.listKeranjang.length; i++) {
      if (KeranjangService.listKeranjang[i].produkId === produkId) {
        return i;
      }
    }
    return -1;
  }

  tambahItem(produk: Produk) {
    const indexItem = this.cekItemDiKeranjang(produk.id);
    if (indexItem !== -1) {
      if (KeranjangService.listKeranjang[indexItem].qty < produk.stock) {
        KeranjangService.listKeranjang[indexItem].qty++;
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
        KeranjangService.listKeranjang.push(newKeranjang);
      }
    }
  }

  tambahQty(produkId: number) {
    const indexItem = this.cekItemDiKeranjang(produkId);
    if (indexItem !== -1 && KeranjangService.listKeranjang[indexItem].qty <
      KeranjangService.listKeranjang[indexItem].stokMaksimal) {
      KeranjangService.listKeranjang[indexItem].qty++;
    }
  }

  kurangQty(produkId: number) {
    const indexItem = this.cekItemDiKeranjang(produkId);
    if (indexItem !== -1) {
      KeranjangService.listKeranjang[indexItem].qty--;
      if (KeranjangService.listKeranjang[indexItem].qty === 0) {
        KeranjangService.listKeranjang.splice(indexItem, 1);
      }
    }
  }

  hapusItem(produkId: number) {
    const indexItem = this.cekItemDiKeranjang(produkId);
    if (indexItem !== -1) {
      KeranjangService.listKeranjang.splice(indexItem, 1);
    }
  }

  kosongkanKeranjang() {
    KeranjangService.listKeranjang = [];
  }

  getQty(produkId: number): number {
    const indexItem = this.cekItemDiKeranjang(produkId);
    return indexItem !== -1 ? KeranjangService.listKeranjang[indexItem].qty : 0;
  }

  hitungTotalHarga(): number {
    return KeranjangService.listKeranjang.reduce((total, item) => total + (item.harga_jual * item.qty), 0);
  }

  hitungTotalJenisItem(): number {
    return KeranjangService.listKeranjang.length;
  }

  hitungTotalQuantity(): number {
    return KeranjangService.listKeranjang.reduce((total, item) => total + item.qty, 0);
  }
}
