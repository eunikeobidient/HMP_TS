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
  static produkList: Produk[] = [
    { id: 1, nama: 'Beras Premium 5kg', kategori: 'Sembako', harga_beli: 58000, harga_jual: 65000, stock: 15, url: 'https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1092483000&w=1920&q=75', terjual: 0 },
    { id: 2, nama: 'Minyak Goreng 2L', kategori: 'Sembako', harga_beli: 32000, harga_jual: 35000, stock: 0, url: 'https://down-id.img.susercontent.com/file/sg-11134201-23020-acjeupfkvinv60', terjual: 0 },
    { id: 3, nama: 'Gula Pasir 1kg', kategori: 'Sembako', harga_beli: 13500, harga_jual: 15000, stock: 5, url: 'https://pasarsegar.co.id/wp-content/uploads/2022/12/71faa2b0-05e0-4263-aa67-2b4b12ec9a95_Gulaku-Gula-Pasir-1-kg-11-1.jpeg', terjual: 0 },
    { id: 4, nama: 'Telur Ayam 1kg', kategori: 'Sembako', harga_beli: 25000, harga_jual: 28000, stock: 10, url: 'https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/08/300605.png?fit=1080%2C1080&ssl=1', terjual: 0 },
    { id: 5, nama: 'Indomie Goreng', kategori: 'Makanan', harga_beli: 2500, harga_jual: 3000, stock: 10, url: 'https://image.astronauts.cloud/product-images/2026/7/IndomieGorengSpesial_414accae-05bf-440a-b59f-b9b621dc486c_900x900.png', terjual: 0 },
    { id: 6, nama: 'Susu UHT 1L', kategori: 'Minuman', harga_beli: 15500, harga_jual: 18000, stock: 25, url: 'https://www.static-src.com/siva/asset/09_2024/SusuUHT-Ultra.jpg', terjual: 0 },
    { id: 7, nama: 'Kopi Bubuk 200g', kategori: 'Minuman', harga_beli: 12000, harga_jual: 15000, stock: 8, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYe34SD95nAz2uQ_V0CQ5NCXON5h3yunmKO_P6kejS9cB2-UAygBH8o6sv&s=10', terjual: 0 },
    { id: 8, nama: 'Teh Celup Kotak', kategori: 'Minuman', harga_beli: 5000, harga_jual: 7000, stock: 20, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p5Ohc3k7BJ1myF7kEdzQs-P0qkp9i4HsjLjxlDLFRSgP5vi7PcLC3O0&s=10', terjual: 0 },
    { id: 9, nama: 'Sabun Mandi Cair', kategori: 'Perlengkapan', harga_beli: 18000, harga_jual: 22000, stock: 12, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUrv4z41ICCZ13G9sViTtjxLWjetwpG6oQooAF_PLIzmqWAWIWYGNwuM&s=10', terjual: 0 },
    { id: 10, nama: 'Pasta Gigi 150g', kategori: 'Perlengkapan', harga_beli: 12000, harga_jual: 15000, stock: 15, url: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-173268282/pepsodent_pepsodent-pasta-gigi-ekonomis-150-g_full01.jpg', terjual: 0 }
  ];

  constructor() { }

  getProdukById(id: number): Produk {
    for (let i = 0; i < ProdukService.produkList.length; i++) {
      if (ProdukService.produkList[i].id == id) {
        return ProdukService.produkList[i];
      }
    }
    throw new Error('Produk tidak ditemukan');
  }

  tambahProduk(nama: string, kategori: string, harga_beli: number, harga_jual: number, stock: number, url: string) {
    let idBaru = 1;
    for (let i = 0; i < ProdukService.produkList.length; i++) {
      if (ProdukService.produkList[i].id >= idBaru) {
        idBaru = ProdukService.produkList[i].id + 1;
      }
    }
    ProdukService.produkList.push({
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
    for (let produk of ProdukService.produkList) {
      if (produk.id === id) {
        produk.nama = nama;
        produk.kategori = kategori;
        produk.harga_beli = harga_beli;
        produk.harga_jual = harga_jual;
        produk.stock = stock;
        produk.url = url;
        return true;
      }
    }
    return false;
  }

  hapusProduk(id: number){
    for (let i = 0; i < ProdukService.produkList.length; i++) {
      if (ProdukService.produkList[i].id == id) {
        ProdukService.produkList.splice(i,1);
        break;
      }
    }
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