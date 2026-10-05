import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Produk } from '../produk';

@Component({
  selector: 'app-edit-produk',
  templateUrl: './edit-produk.page.html',
  styleUrls: ['./edit-produk.page.scss'],
  standalone: false,
})
export class EditProdukPage implements OnInit {

  produk = {
    id: -1,
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

  constructor(private route: ActivatedRoute, private router: Router, private produkService: Produk) { }
  produkId = -1;
  ngOnInit() {
    this.route.params.subscribe(params => this.produkId = Number(params['id']));
    this.produk = this.produkService.getProdukById(this.produkId);
  }

  isInvalidNama(): boolean {
    return this.isSubmitted && (this.produk.nama.trim().length < 3);
  }

  isInvalidKategori(): boolean {
    return this.isSubmitted && (!this.produk.kategori || this.produk.kategori.trim() === '');
  }

  isInvalidHargaBeli(): boolean {
    return this.isSubmitted && this.produk.harga_beli <= 0;
  }

  isInvalidHargaJual(): boolean {
    return this.isSubmitted && this.produk.harga_jual <= 0;
  }

  isInvalidStock(): boolean {
    return this.isSubmitted && this.produk.stock < 0;
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
      this.produkService.editProduk(
        this.produk.id,
        this.produk.nama,
        this.produk.kategori,
        this.produk.harga_beli,
        this.produk.harga_jual,
        this.produk.stock,
        this.produk.url || 'https://placehold.co/600x400/png'
      );
      this.showAlert = true;
    }
  }

  onAlertDismiss() {
    this.showAlert = false;
    this.isSubmitted = false;
    this.router.navigate(['/list-produk']);
  }

}
