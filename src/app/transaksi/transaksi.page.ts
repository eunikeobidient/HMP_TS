import { Component, OnInit } from '@angular/core';
import { RiwayatProduk, TransaksiService } from '../transaksi.service';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  jenisTampilan: string = "semua";
  filterBulan: number = 0;
  filterTahun: number = 0;

  constructor(private transaksiService: TransaksiService) { }

  ngOnInit() { }

  // Ambil list bulan langsung dari Service
  get listBulan(): any[] {
    return this.transaksiService.listBulan;
  }

  // Langsung me-return memori dari Service tanpa penampung lokal
  ambilSemuaTransaksi(): any[] {
    return this.transaksiService.riwayatTransaksi;
  }

  showHeaderBulanTahun(bulan: number, tahun: number): string {
    return this.showBulan(bulan) + " " + tahun;
  }

  showBulan(bulan: number): string {
    return this.transaksiService.showBulan(bulan);
  }

  isNewMonthYear(index: number): boolean {
    const riwayat = this.ambilSemuaTransaksi();
    if (index === 0) return true;

    const prev = riwayat[index - 1];
    const curr = riwayat[index];
    return prev.bulan !== curr.bulan || prev.tahun !== curr.tahun;
  }

  listBulanTahun(): any[] {
    const result: any[] = [];
    let lastBulan = 0;
    let lastTahun = 0;

    for (let produk of this.filterRiwayatProduk(this.filterBulan, this.filterTahun)) {
      if (this.filterBulan != 0 && this.filterBulan != produk.bulan) continue;
      if (this.filterTahun != 0 && this.filterTahun != produk.tahun) continue;

      if (lastBulan != produk.bulan || lastTahun != produk.tahun) {
        lastBulan = produk.bulan;
        lastTahun = produk.tahun;
        result.push({ bulan: lastBulan, tahun: lastTahun });
      }
    }
    return result;
  }

  filterRiwayatProduk(bulan: number = 0, tahun: number = 0): RiwayatProduk[] {
    return this.transaksiService.showRiwayatProduk(bulan, tahun);
  }

  hapusFilterBulanTahun() {
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