import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})

export class TransaksiPage{
  jenisTampilan:string = "harian";

  constructor() { 
  }

  ngOnInit() {
  }

}
