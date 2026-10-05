import { Service } from '@angular/core';
import { Produk_Temp } from './produk';

export interface ItemKeranjang {
    produkId: number;
    nama: string;
    harga_jual: number;
    qty: number;
    stokMaksimal: number;
    url: string;
}

@Service()
export class Keranjang {
    static listKeranjang: ItemKeranjang[] = [];

    cekItemDiKeranjang(produkId: number): number {
        for (let i = 0; i < Keranjang.listKeranjang.length; i++) {
            if (Keranjang.listKeranjang[i].produkId === produkId) {
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
            Keranjang.listKeranjang.push(newKeranjang);
        }
    }

    hapusItem(produkId: number) {
        const indexItem = this.cekItemDiKeranjang(produkId);
        if (indexItem !== -1) {
            Keranjang.listKeranjang.splice(indexItem, 1);
        }
    }

    tambahQty(produkId: number) {
        const indexItem = this.cekItemDiKeranjang(produkId);
        if (indexItem !== -1) {
            if (Keranjang.listKeranjang[indexItem].qty < Keranjang.listKeranjang[indexItem].stokMaksimal) {
                Keranjang.listKeranjang[indexItem].qty++;
            }
        }
    }

    kurangQty(produkId: number) {
        const indexItem = this.cekItemDiKeranjang(produkId);
        if (indexItem !== -1) {
            Keranjang.listKeranjang[indexItem].qty--;
            if (Keranjang.listKeranjang[indexItem].qty <= 0) {
                Keranjang.listKeranjang.splice(indexItem, 1);
            }
        }
    }

    kosongkanKeranjang() {
        Keranjang.listKeranjang.splice(0, Keranjang.listKeranjang.length);
    }

    getQty(produkId: number): number {
        const indexItem = this.cekItemDiKeranjang(produkId);
        if (indexItem !== -1) {
            return Keranjang.listKeranjang[indexItem].qty;
        } else {
            return 0;
        }
    }

    hitungTotalHarga(): number {
        let total = 0;
        for (let i = 0; i < Keranjang.listKeranjang.length; i++) {
            total += Keranjang.listKeranjang[i].harga_jual * Keranjang.listKeranjang[i].qty;
        }
        return total;
    }

    hitungTotalJenisItem(): number {
        return Keranjang.listKeranjang.length;
    }

    hitungTotalQuantity(): number {
        let total = 0;
        for (let i = 0; i < Keranjang.listKeranjang.length; i++) {
            total += Keranjang.listKeranjang[i].qty
        }
        return total;
    }
}
