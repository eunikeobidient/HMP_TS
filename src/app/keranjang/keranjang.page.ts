import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemKeranjang, Keranjang } from '../keranjang';
import { Produk } from '../produk';
import { DetailTransaksi, RiwayatTransaksi, Transaksi } from '../transaksi';

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
    private keranjang: Keranjang,
    private produkService: Produk,
    private transaksiService: Transaksi,
    private router: Router
  ) { }

  ngOnInit() {
    this.keranjangItem = Keranjang.listKeranjang;
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

    if(this.customerName == ""){
      this.namaKosong = true;
      return;
    }

    if (Keranjang.listKeranjang.length === 0) {
      this.keranjangKosong = true;
      return;
    }

    const detailTransaksi: DetailTransaksi[] = []
    for (let item of Keranjang.listKeranjang) {
      this.produkService.kurangiStok(item.produkId, item.qty);
      let newDetailTransaksi = {
        nama_produk: item.nama,
        quantity: item.qty,
        subtotal: item.harga_jual * item.qty
      };
      detailTransaksi.push(newDetailTransaksi);
    }

    const tanggal = this.currentDate.getDate();
    const bulan = this.currentDate.getMonth() + 1;
    const tahun = this.currentDate.getFullYear();

    const noTransaksi = String(this.transaksiService.hitungJumlahTransaksiHariIni() + 1).padStart(3,'0');
    const dd = String(tanggal).padStart(2,'0');
    const mm = String(bulan).padStart(2,'0');

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
    Transaksi.riwayatTransaksi.unshift(newTransaksi);

    this.keranjang.kosongkanKeranjang();
    this.hapusCustomerName();
    this.router.navigate(['/detail-transaksi', 0]);
  }

  hapusCustomerName(){
    this.customerName = "";
    this.jenisPembayaran = "Tunai";
  }
}