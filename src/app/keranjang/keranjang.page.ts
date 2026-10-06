import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemKeranjang, KeranjangService } from '../keranjang.service';
import { ProdukService } from '../produk.service';
import { DetailTransaksi, RiwayatTransaksi, TransaksiService } from '../transaksi.service';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})

export class KeranjangPage {
  keranjangItem: ItemKeranjang[] = [];
  jenisPembayaran: string = 'Tunai';
  customerName = "";
  keranjangKosong: boolean = false;
  namaKosong: boolean = false;
  public alertButtons = ['OK'];

  currentDate = new Date();

  constructor(
    private keranjang: KeranjangService,
    private produkService: ProdukService,
    private transaksiService: TransaksiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.keranjangItem = this.keranjang.listKeranjang;
  }

  tambahQty(produkId: number) {
    this.keranjang.tambahQty(produkId);
  }

  kurangQty(produkId: number) {
    this.keranjang.kurangQty(produkId);
  }

  hapusItem(produkId: number) {
    this.keranjang.hapusItem(produkId);
  }

  getTotalHarga(): number {
    return this.keranjang.hitungTotalHarga();
  }

  hitungTotalProduk(): number {
    return this.keranjang.hitungTotalQuantity();
  }

  konfirmasiTransaksi() {
    this.customerName = this.customerName.trim();

    if (this.customerName == "") {
      this.namaKosong = true;
      return;
    }

    if (this.keranjang.listKeranjang.length === 0) {
      this.keranjangKosong = true;
      return;
    }

    const detailTransaksi: DetailTransaksi[] = []
    for (let item of this.keranjang.listKeranjang) {
      this.produkService.kurangiStok(item.produkId, item.qty);
      let newDetailTransaksi = {
        nama_produk: item.nama,
        quantity: item.qty,
        subtotal: item.harga_jual * item.qty
      };
      detailTransaksi.push(newDetailTransaksi);
    }

    const now = new Date();
    const tanggal = now.getDate();
    const bulan = now.getMonth() + 1;
    const tahun = now.getFullYear();

    const noTransaksi = String(this.transaksiService.hitungJumlahTransaksiHariIni() + 1).padStart(3, '0');
    const dd = String(tanggal).padStart(2, '0');
    const mm = String(bulan).padStart(2, '0');

    const nota = "TMJ" + dd + mm + tahun + noTransaksi;

    const newTransaksi: RiwayatTransaksi = {
      no_nota: nota,
      tanggal: tanggal,
      customer: this.customerName,
      bulan: bulan,
      tahun: tahun,
      list_produk: detailTransaksi,
      harga_total: this.getTotalHarga(),
      jenis_transaksi: this.jenisPembayaran
    }

    this.transaksiService.tambahTotalTerjual(newTransaksi);
    this.transaksiService.riwayatTransaksi.unshift(newTransaksi);

    this.keranjang.kosongkanKeranjang();
    this.hapusCustomerName();
    this.router.navigate(['/detail-transaksi', 0]);
  }

  hapusCustomerName() {
    this.customerName = "";
    this.jenisPembayaran = "Tunai";
  }
}
