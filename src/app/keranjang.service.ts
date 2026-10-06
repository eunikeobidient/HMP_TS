import { Inject, Injectable } from '@angular/core';
import { Produk_Temp } from './produk.service';

export interface ItemKeranjang {
    produkId: number;
    nama: string;
    harga_jual: number;
    qty: number;
    stokMaksimal: number;
    url: string;
}

@Injectable({
    providedIn: 'root'
})

export class KeranjangService {
    listKeranjang: ItemKeranjang[] = [];

    cekItemDiKeranjang(produkId: number): number {
        for (let i = 0; i < this.listKeranjang.length; i++) {
            if (this.listKeranjang[i].produkId === produkId) {
                return i;
            }
        }
        return -1;
    }

    tambahItem(produk: Produk_Temp) {
        if (produk.stock > 0) {
            const newKeranjang: ItemKeranjang = {
                produkId: produk.id,
                nama: produk.nama,
                harga_jual: produk.harga_jual,
                qty: 1,
                stokMaksimal: produk.stock,
                url: produk.url
            }
            this.listKeranjang.push(newKeranjang);
        }
    }

    hapusItem(produkId: number) {
        const indexItem = this.cekItemDiKeranjang(produkId);
        if (indexItem !== -1) {
            this.listKeranjang.splice(indexItem, 1);
        }
    }

    tambahQty(produkId: number) {
        const indexItem = this.cekItemDiKeranjang(produkId);
        if (indexItem !== -1) {
            if (this.listKeranjang[indexItem].qty < this.listKeranjang[indexItem].stokMaksimal) {
                this.listKeranjang[indexItem].qty++;
            }
        }
    }

    kurangQty(produkId: number) {
        const indexItem = this.cekItemDiKeranjang(produkId);
        if (indexItem !== -1) {
            this.listKeranjang[indexItem].qty--;
            if (this.listKeranjang[indexItem].qty <= 0) {
                this.listKeranjang.splice(indexItem, 1);
            }
        }
    }

    kosongkanKeranjang() {
        this.listKeranjang.splice(0, this.listKeranjang.length);
    }

    getQty(produkId: number): number {
        const indexItem = this.cekItemDiKeranjang(produkId);
        if (indexItem !== -1) {
            return this.listKeranjang[indexItem].qty;
        } else {
            return 0;
        }
    }

    hitungTotalHarga(): number {
        let total = 0;
        for (let i = 0; i < this.listKeranjang.length; i++) {
            total += this.listKeranjang[i].harga_jual * this.listKeranjang[i].qty;
        }
        return total;
    }

    hitungTotalJenisItem(): number {
        return this.listKeranjang.length;
    }

    hitungTotalQuantity(): number {
        let total = 0;
        for (let i = 0; i < this.listKeranjang.length; i++) {
            total += this.listKeranjang[i].qty
        }
        return total;
    }
}

