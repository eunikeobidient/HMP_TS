import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.page.html',
  styleUrls: ['./detail-produk.page.scss'],
  standalone: false,
})
export class DetailProdukPage implements OnInit {
  index=0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.index = params['id']);
  }

}
