import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdukService } from '../produk.service';

@Component({
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.page.html',
  styleUrls: ['./tambah-produk.page.scss'],
  standalone: false,
})

export class TambahProdukPage implements OnInit {

  produkBaru = {
    nama: '',
    kategori: 'Sembako',
    harga_beli: 0,
    harga_jual: 0,
    stock: 0,
    url: ''
  };

  isSubmitted = false;
  showAlert = false;
  public alertButtons = ['OK'];

  constructor(
    private produkService: ProdukService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  isInvalidNama(): boolean {
    return this.isSubmitted && (this.produkBaru.nama.trim().length < 3);
  }

  isInvalidKategori(): boolean {
    return this.isSubmitted && (!this.produkBaru.kategori || this.produkBaru.kategori.trim() === '');
  }

  isInvalidHargaBeli(): boolean {
    return this.isSubmitted && this.produkBaru.harga_beli <= 0;
  }

  isInvalidHargaJual(): boolean {
    return this.isSubmitted && this.produkBaru.harga_jual <= 0;
  }

  isInvalidStock(): boolean {
    return this.isSubmitted && this.produkBaru.stock < 0;
  }

  isFormValid(): boolean {
    return !this.isInvalidNama() &&
      !this.isInvalidKategori() &&
      !this.isInvalidHargaBeli() &&
      !this.isInvalidHargaJual() &&
      !this.isInvalidStock();
  }

  simpanProduk() {
    this.isSubmitted = true;

    if (this.isFormValid()) {
      this.produkService.tambahProduk(
        this.produkBaru.nama,
        this.produkBaru.kategori,
        Number(this.produkBaru.harga_beli),
        Number(this.produkBaru.harga_jual),
        Number(this.produkBaru.stock),
        this.produkBaru.url || 'https://placehold.co/600x400/png'
      );
      this.showAlert = true;
    }
  }

  onAlertDismiss() {
    this.showAlert = false;
    this.isSubmitted = false;
    this.router.navigate(['/list-produk']);
  }

  batal() {
    this.router.navigate(['/list-produk']);
  }
}