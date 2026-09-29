import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-detail-transaksi',
  templateUrl: './detail-transaksi.page.html',
  styleUrls: ['./detail-transaksi.page.scss'],
  standalone: false,
})
export class DetailTransaksiPage implements OnInit {

  index=0;
  constructor(private route: ActivatedRoute, private transaksiService:Transaksi) { }
  riwayatTransaksi:any[]=[];

  ngOnInit() {
    this.route.params.subscribe(params => {this.index = params['id'];})
    this.riwayatTransaksi = this.transaksiService.riwayatTransaksi;
  }
  
  showBulan(bulan:number):string{
    return this.transaksiService.showBulan(bulan);
  }
}
