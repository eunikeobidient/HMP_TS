import { Component, OnInit } from '@angular/core';

interface Product {
  nama: string
  stock: number
  harga_jual: number
  harga_beli: number
  url: string
}

interface CartItem{
  productIndex: number;
  qty: number;
}

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.page.html',
  styleUrls: ['./list-produk.page.scss'],
  standalone: false,
})

export class ListProdukPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products: Product[] = [
    {
      nama: 'Indomie Goreng',
      stock: 10,
      harga_jual: 3000,
      harga_beli: 2500,
      url: 'https://placehold.co/600x400/png'
    },
    {
      nama: 'Minyak Goreng 2L',
      stock: 0,
      harga_jual: 35000,
      harga_beli: 32000,
      url: 'https://placehold.co/600x400/png'
    },
    {
      nama: 'Susu UHT 1L',
      stock: 25,
      harga_jual: 18000,
      harga_beli: 15500,
      url: 'https://placehold.co/600x400/png'
    },
    {
      nama: 'Beras Premium 5kg',
      stock: 15,
      harga_jual: 65000,
      harga_beli: 58000,
      url: 'https://placehold.co/600x400/png'
    },
    {
      nama: 'Gula Pasir 1kg',
      stock: 5,
      harga_jual: 15000,
      harga_beli: 13500,
      url: 'https://placehold.co/600x400/png'
    }
  ];

  keranjang: CartItem[] = [];

  // menambahkan barang pertama kali ke array keranjang
  tambahAwal(index:number){
    if(this.products[index].stock > 0){
      this.keranjang.push({ productIndex: index, qty: 1})
    }
  }

  // menambahkan qty barang yang sudah ada di keranjang
  tambahQty(index:number){
    const item = this.keranjang.find(k => k.productIndex === index)
    if(item && item.qty < this.products[index].stock){
      item.qty++;
    }
  }

  // mengurangi qty barang yang sudah ada di keranjang
  // jika qty mencapai 0, maka item akan di splice (hapus) dari array keranjang
  kurangQty(index:number){
    const itemIndex = this.keranjang.findIndex(k => k.productIndex === index);
    if(itemIndex > -1){
      this.keranjang[itemIndex].qty--;

      if(this.keranjang[itemIndex].qty === 0){
        this.keranjang.splice(itemIndex, 1);
      }
    }
  }

  // mengambil jumlah (qty) produk di dalam keranjang
  // berdasarkan indexnya, untuk pengecekan tombol plus yang awal
  getQty(index: number): number{
    const item = this.keranjang.find(k => k.productIndex === index)
    if(item){
      return item.qty
    } else{
      return 0
    }
  }

  // Menghitung jumlah jenis barang di dalam keranjang
  // untuk indikator angka floating di button keranjang
  getTotalJenisBarang():number{
    return this.keranjang.length
  }

  keywordSearch: string = ""
  filteredProducts: Product[] = this.products;

  searchProducts(){
    const normalizedKeyword = this.keywordSearch.trim().toLowerCase();

    if(normalizedKeyword === ""){
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = this.products.filter(product =>
      product.nama.toLowerCase().includes(normalizedKeyword)
    );
  }
}
