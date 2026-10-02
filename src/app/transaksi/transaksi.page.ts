import { Component, OnInit } from '@angular/core';
import { RiwayatProduk, Transaksi } from '../services/transaksi';
import { Produk, ProdukService } from '../services/produk';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})

export class TransaksiPage {

  riwayatTransaksi: any[] = [];
  riwayatProduk: any[] = [];
  listProduk: any[] = [];

  jenisTampilan: string = "harian";

  listBulan: any[] = [];
  bulanSaatIni: number = 0;
  tahunSaatIni: number = 0;
  filterBulan: number = 0;
  filterTahun: number = 0;

  constructor(private transaksiService: Transaksi) {
  }

  ngOnInit() {
    this.riwayatTransaksi = Transaksi.riwayatTransaksi;
    this.listProduk = ProdukService.produkList;
    this.listBulan = this.transaksiService.listBulan;
  }

  showHeaderBulanTahun(bulan: number, tahun: number): string {
    this.bulanSaatIni = bulan;
    this.tahunSaatIni = tahun;
    return this.transaksiService.showBulan(this.bulanSaatIni) + " " + this.tahunSaatIni;
  }

  showBulan(bulan: number): string {
    return this.transaksiService.showBulan(bulan);
  }

  listBulanTahun(): any[] {
    const result: any[] = [];
    let lastBulan = 0;
    let lastTahun = 0;

    for (let produk of this.filterRiwayatProduk(this.filterBulan, this.filterTahun)) {
      if (this.filterBulan != 0 && this.filterBulan != produk.bulan) {
        continue;
      }
      if (this.filterTahun != 0 && this.filterTahun != produk.tahun) {
        continue;
      }
      if (lastBulan != produk.bulan || lastTahun != produk.tahun) {
        lastBulan = produk.bulan;
        lastTahun = produk.tahun;
        result.push({ bulan: lastBulan, tahun: lastTahun });
      }
    }

    return result;
  }

  filterRiwayatProduk(bulan:number=0,tahun:number=0):RiwayatProduk[]{
    return this.transaksiService.showRiwayatProduk(bulan,tahun);
  }

  hapusFilterBulanTahun(){
    this.filterBulan = 0;
    this.filterTahun = 0;
  }

  listTahun(): any[] {
    let listTahun: any[] = [];
    for (let i = 0; i < 10; i++) {
      listTahun.push(2020 + i);
    }
    return listTahun;
  }

}
