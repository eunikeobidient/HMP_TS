import { Component, OnInit } from '@angular/core';
import { Transaksi } from '../services/transaksi';
import { Produk, ProdukService } from '../services/produk';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})

export class TransaksiPage {

  riwayatTransaksi:any[]=[];
  riwayatProduk:any[]=[];
  listProduk:any[]=[];

  jenisTampilan:string = "harian";

  bulanSaatIni:number = 0;
  tahunSaatIni:number = 0;

  constructor(private transaksiService:Transaksi, private produkService:ProdukService) {
   }

  ngOnInit() {
    this.riwayatTransaksi = this.transaksiService.riwayatTransaksi;
    this.riwayatProduk = this.transaksiService.riwayatProduk;
    this.listProduk = this.produkService.produkList;
  }

  showHeaderBulanTahun(bulan:number,tahun:number):string{
    this.bulanSaatIni = bulan;
    this.tahunSaatIni = tahun;
    return this.transaksiService.showBulan(this.bulanSaatIni) + " " + this.tahunSaatIni;
  }

  showBulan(bulan:number):string{
    return this.transaksiService.showBulan(bulan);
  }
  
  resetBulanTahunSaatIni(){
    this.bulanSaatIni = 0;
    this.tahunSaatIni = 0;
  }

  

}
