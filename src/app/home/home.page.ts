import { Component } from '@angular/core';
import { ProdukService } from '../produk.service';
import { TransaksiService } from '../transaksi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private produkService: ProdukService, private transaksiService: TransaksiService) { }

  // Gunakan 'get' agar data selalu ter-update otomatis
  get jumlahProduk(): number {
    return this.produkService.produkList.length;
  }

  get totalTransaksiHariIni(): number {
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

  get produkTerlaris(): any {
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
      return {
        nama: namaTerlaris,
        jumlah: qtyTerbanyak,
        url: urlGambar
      };
    }
    return null;
  }
}