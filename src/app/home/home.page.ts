import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ProdukService } from '../produk.service';
import { TransaksiService } from '../transaksi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  jumlahProduk: number = 0;
  totalTransaksiHariIni: number = 0;
  produkTerlaris: any = null;

  constructor(
    private produkService: ProdukService,
    private transaksiService: TransaksiService,
    private cdr: ChangeDetectorRef
  ) { }

  ionViewWillEnter() {
    this.jumlahProduk = this.produkService.produkList.length;
    this.totalTransaksiHariIni = this.hitungTotalTransaksiHariIni();
    this.produkTerlaris = this.hitungProdukTerlaris();
    this.cdr.detectChanges();
  }

  hitungTotalTransaksiHariIni(): number {
    const now = new Date();
    const tglHariIni = now.getDate();
    const blnHariIni = now.getMonth() + 1;
    const thnHariIni = now.getFullYear();

    let totalUang = 0;
    for (let transaksi of this.transaksiService.riwayatTransaksi) {
      if (transaksi.tanggal === tglHariIni && transaksi.bulan === blnHariIni && transaksi.tahun === thnHariIni) {
        totalUang += transaksi.harga_total;
      }
    }
    return totalUang;
  }

  hitungProdukTerlaris(): any {
    const now = new Date();
    const tglHariIni = now.getDate();
    const blnHariIni = now.getMonth() + 1;
    const thnHariIni = now.getFullYear();

    let rekapTerjual: { [key: string]: number } = {};

    for (let transaksi of this.transaksiService.riwayatTransaksi) {
      if (transaksi.tanggal === tglHariIni && transaksi.bulan === blnHariIni && transaksi.tahun === thnHariIni) {
        for (let item of transaksi.list_produk) {
          if (rekapTerjual[item.nama_produk]) {
            rekapTerjual[item.nama_produk] += item.quantity;
          } else {
            rekapTerjual[item.nama_produk] = item.quantity;
          }
        }
      }
    }

    let qtyTerbanyak = 0;
    let namaTerlaris = "";

    for (let namaProduk in rekapTerjual) {
      if (rekapTerjual[namaProduk] > qtyTerbanyak) {
        qtyTerbanyak = rekapTerjual[namaProduk];
        namaTerlaris = namaProduk;
      }
    }

    if (namaTerlaris !== "") {
      let urlGambar = '';
      for (let produk of this.produkService.produkList) {
        if (produk.nama === namaTerlaris) {
          urlGambar = produk.url;
          break;
        }
      }
      return { nama: namaTerlaris, jumlah: qtyTerbanyak, url: urlGambar };
    }
    return null;
  }
}