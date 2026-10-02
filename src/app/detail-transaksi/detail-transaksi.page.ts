import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaksi } from '../services/transaksi';
import { Produk, ProdukService } from '../services/produk';

@Component({
  selector: 'app-detail-transaksi',
  templateUrl: './detail-transaksi.page.html',
  styleUrls: ['./detail-transaksi.page.scss'],
  standalone: false,
})
export class DetailTransaksiPage implements OnInit {

  index = 0;
  constructor(private route: ActivatedRoute, private transaksiService: Transaksi) { }
  riwayatTransaksi: any[] = [];
  listProduk: any[] = [];
  
  ngOnInit() {
    this.route.params.subscribe(params => { this.index = params['id']; })
    this.riwayatTransaksi = Transaksi.riwayatTransaksi;
    this.listProduk = ProdukService.produkList;
  }

  showBulan(bulan: number): string {
    return this.transaksiService.showBulan(bulan);
  }

  findGambarProduk(produk: string): string {
    let url = "";
    for (let i = 0; i < this.listProduk.length; i++) {
      if(this.listProduk[i].nama == produk){
        url = this.listProduk[i].url;
      }
    }
    return url;
  }
}
