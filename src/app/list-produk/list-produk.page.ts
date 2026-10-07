import { Component, OnInit, DoCheck } from '@angular/core';
import { ProdukService, Produk_Temp } from '../produk.service';
import { KeranjangService } from '../keranjang.service';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.page.html',
  styleUrls: ['./list-produk.page.scss'],
  standalone: false,
})

export class ListProdukPage implements DoCheck {
  kataKunciPencarian: string = '';
  kategoriAktif: string = 'Semua';
  produkTampil: Produk_Temp[] = [];

  constructor(private produkService: ProdukService, private keranjangService: KeranjangService, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.muatProduk();
  }

  totalKeranjangSebelumnya: number = 0;

  ngDoCheck() {
    const totalSekarang = this.hitungTotalKeranjang();
    if (totalSekarang !== this.totalKeranjangSebelumnya) {
      this.totalKeranjangSebelumnya = totalSekarang;
      this.animasiTuing()
    }
  }

  animasiTuing() {
    const badgeElement = document.querySelector('#badgeKeranjang') as HTMLElement;
    const tuingAnim = this.animationCtrl.create()
      .addElement(badgeElement)
      .duration(400)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.4, transform: 'scale(1.6)' },
        { offset: 0.7, transform: 'scale(0.85)' },
        { offset: 1, transform: 'scale(1)' }
      ]);
    tuingAnim.play();
  }

  ionViewWillEnter() {
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

  hitungTotalKeranjang(): number {
    return this.keranjangService.hitungTotalJenisItem();
  }
}

