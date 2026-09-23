import { Injectable } from '@angular/core';

export interface Produk {
  id: number;
  nama: string;
  kategori: string;
  harga_beli: number;
  harga_jual: number;
  stock: number;
  url: string;
  terjual: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProdukService {
  produkList: Produk[] = [
    { id: 1, nama: 'Beras Sania 5kg', kategori: 'Sembako', harga_beli: 58000, harga_jual: 65000, stock: 15, url: 'https://placehold.co/600x400/png', terjual: 0 },
    { id: 2, nama: 'Minyak Goreng Bimoli 2L', kategori: 'Sembako', harga_beli: 32000, harga_jual: 35000, stock: 0, url: 'https://placehold.co/600x400/png', terjual: 0 },
    { id: 3, nama: 'Gula Pasir 1kg', kategori: 'Sembako', harga_beli: 13500, harga_jual: 15000, stock: 5, url: 'https://placehold.co/600x400/png', terjual: 0 },
    { id: 4, nama: 'Telur Ayam Omega 3', kategori: 'Sembako', harga_beli: 25000, harga_jual: 28000, stock: 10, url: 'https://placehold.co/600x400/png', terjual: 0 },
    { id: 5, nama: 'Indomie Goreng', kategori: 'Makanan', harga_beli: 2500, harga_jual: 3000, stock: 10, url: 'https://placehold.co/600x400/png', terjual: 0 },
    { id: 6, nama: 'Susu Greenfiled 1L', kategori: 'Minuman', harga_beli: 15500, harga_jual: 18000, stock: 25, url: 'https://placehold.co/600x400/png', terjual: 0 },
    { id: 7, nama: 'Kopi Bubuk Kapal Api', kategori: 'Minuman', harga_beli: 12000, harga_jual: 15000, stock: 8, url: 'https://placehold.co/600x400/png', terjual: 0 },
    { id: 8, nama: 'Teh Sariwangi', kategori: 'Minuman', harga_beli: 5000, harga_jual: 7000, stock: 20, url: 'https://placehold.co/600x400/png', terjual: 0 },
    { id: 9, nama: 'Sabun Dettol', kategori: 'Perlengkapan', harga_beli: 18000, harga_jual: 22000, stock: 12, url: 'https://placehold.co/600x400/png', terjual: 0 },
    { id: 10, nama: 'Pasta Gigi Pepsodent', kategori: 'Perlengkapan', harga_beli: 12000, harga_jual: 15000, stock: 15, url: 'https://placehold.co/600x400/png', terjual: 0 }
  ];

  constructor() { }

  getSemuaProduk(): Produk[] {
    return this.produkList;
  }

  getProdukById(id: number): Produk {
    for (let i = 0; i < this.produkList.length; i++) {
      if (this.produkList[i].id === id) {
        return this.produkList[i];
      }
    }
    throw new Error('Produk tidak ditemukan');
  }

  tambahProduk(nama: string, kategori: string, harga_beli: number, harga_jual: number, stock: number, url: string): void {
    let idBaru = 1;
    for (let i = 0; i < this.produkList.length; i++) {
      if (this.produkList[i].id >= idBaru) {
        idBaru = this.produkList[i].id + 1;
      }
    }
    this.produkList.push({
      id: idBaru,
      nama: nama,
      kategori: kategori,
      harga_beli: harga_beli,
      harga_jual: harga_jual,
      stock: stock,
      url: url,
      terjual: 0
    });
  }

  editProduk(id: number, nama: string, kategori: string, harga_beli: number, harga_jual: number, stock: number, url: string): boolean {
    for (let i = 0; i < this.produkList.length; i++) {
      if (this.produkList[i].id === id) {
        this.produkList[i].nama = nama;
        this.produkList[i].kategori = kategori;
        this.produkList[i].harga_beli = harga_beli;
        this.produkList[i].harga_jual = harga_jual;
        this.produkList[i].stock = stock;
        this.produkList[i].url = url;
        return true;
      }
    }
    return false;
  }

  hapusProduk(id: number): boolean {
    let ditemukan = false;
    const listBaru: Produk[] = [];
    for (let i = 0; i < this.produkList.length; i++) {
      if (this.produkList[i].id === id) {
        ditemukan = true;
      } else {
        listBaru.push(this.produkList[i]);
      }
    }
    this.produkList = listBaru;
    return ditemukan;
  }

  kurangiStok(id: number, jumlah: number): boolean {
    const produk = this.getProdukById(id);
    if (produk && produk.stock >= jumlah) {
      produk.stock -= jumlah;
      produk.terjual += jumlah;
      return true;
    }
    return false;
  }

}