import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeranjangService, ItemKeranjang } from '../services/keranjang';
import { ProdukService } from '../services/produk';
import { DetailTransaksi, RiwayatTransaksi, Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})

export class KeranjangPage implements OnInit {
  daftarKeranjang: ItemKeranjang[] = []
  jenisPembayaran: string = 'Tunai';
  customerName = "";
  keranjangKosong: boolean = false;
  public alertButtons = ['OK'];

  currentDate = new Date();

  constructor(
    private keranjangService: KeranjangService,
    private produkService: ProdukService,
    private transaksiService: Transaksi,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadListKeranjang();
  }

  ionViewWillEnter(){
    this.loadListKeranjang();
  }

  loadListKeranjang() {
    this.daftarKeranjang = KeranjangService.listKeranjang;
  }

  tambahQty(produkId: number) {
    this.keranjangService.tambahQty(produkId);
    this.loadListKeranjang();
  }

  kurangQty(produkId: number) {
    this.keranjangService.kurangQty(produkId);
    this.loadListKeranjang();
  }

  hapusItem(produkId: number) {
    this.keranjangService.hapusItem(produkId);
    this.loadListKeranjang();
  }

  getTotalHarga(): number {
    return this.keranjangService.hitungTotalHarga();
  }

  hitungTotalProduk(): number {
    this.loadListKeranjang();
    return this.keranjangService.hitungTotalQuantity();
  }

  konfirmasiTransaksi() {
    if (KeranjangService.listKeranjang.length === 0) {
      this.keranjangKosong = true;
      return;
    }

    const detailTransaksi: DetailTransaksi[] = []
    for (let item of KeranjangService.listKeranjang) {
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

    const nota = "TMJ" + dd + mm + noTransaksi;

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
    Transaksi.riwayatTransaksi.push(newTransaksi);

    this.keranjangService.kosongkanKeranjang();
    this.hapusCustomerName();
    this.router.navigate(['/list-produk']);
  }

  hapusCustomerName(){
    this.customerName = "";
  }
}