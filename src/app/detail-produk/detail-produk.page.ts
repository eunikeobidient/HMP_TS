import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produk_Temp, ProdukService } from '../produk.service';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.page.html',
  styleUrls: ['./detail-produk.page.scss'],
  standalone: false,
})
export class DetailProdukPage implements OnInit {
  produkId = -1;
  produk: Produk_Temp = {
    id: -1,
    nama: "",
    kategori: "",
    harga_beli: 0,
    harga_jual: 0,
    stock: 0,
    url: "",
    terjual: 0,
  }

  showAlert = false;
  public alertButtons = [
    {
      text: 'TIDAK',
      role: 'cancel',
    },
    {
      text: 'YA',
      handler: () => {
        this.hapusProduk();
      }
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router, private produkService: ProdukService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.produkId = Number(params['id']));
    this.produk = this.produkService.getProdukById(this.produkId);
  }

  showAlertHapus() {
    this.showAlert = true;
  }

  hapusProduk() {
    this.showAlert = false;
    this.produkService.hapusProduk(this.produkId);
    this.router.navigate(['/list-produk']);
  }

  onAlertDismiss(){
    this.showAlert = false;
  }

}
