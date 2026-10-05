import { Service } from '@angular/core';
import { Produk } from './produk';

export interface RiwayatTransaksi {
    no_nota: string;
    tanggal: number;
    customer: string;
    bulan: number;
    tahun: number;
    list_produk: DetailTransaksi[];
    harga_total: number;
    jenis_transaksi: string;
}

export interface RiwayatProduk {
    id: number;
    nama_produk: string;
    jumlah_terjual: number;
    bulan: number;
    tahun: number;
    url: string;
}

export interface DetailTransaksi {
    nama_produk: string;
    quantity: number;
    subtotal: number;
}

@Service()
export class Transaksi {
    static riwayatTransaksi: RiwayatTransaksi[] = [
        {
            no_nota: 'TMJ10012024001',
            tanggal: 10,
            customer: 'Budi Santoso',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Beras Premium 5kg', quantity: 2, subtotal: 130000 },
                { nama_produk: 'Minyak Goreng 2L', quantity: 1, subtotal: 35000 }
            ],
            harga_total: 165000,
            jenis_transaksi: "QRIS",
        },
        {
            no_nota: 'TMJ12012024002',
            tanggal: 12,
            customer: 'Siti Rahma',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Indomie Goreng', quantity: 10, subtotal: 30000 },
                { nama_produk: 'Susu UHT 1L', quantity: 2, subtotal: 36000 },
                { nama_produk: 'Teh Celup Kotak', quantity: 1, subtotal: 7000 }
            ],
            harga_total: 73000,
            jenis_transaksi: "Tunai",
        },
        {
            no_nota: 'TMJ15012024003',
            tanggal: 15,
            customer: 'Agus Pratama',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Gula Pasir 1kg', quantity: 3, subtotal: 45000 },
                { nama_produk: 'Kopi Bubuk 200g', quantity: 2, subtotal: 30000 }
            ],
            harga_total: 75000,
            jenis_transaksi: "E-wallet",
        },
        {
            no_nota: 'TMJ18012024004',
            tanggal: 18,
            customer: 'Dewi Lestari',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Telur Ayam 1kg', quantity: 2, subtotal: 56000 },
                { nama_produk: 'Sabun Mandi Cair', quantity: 1, subtotal: 22000 },
                { nama_produk: 'Pasta Gigi 150g', quantity: 1, subtotal: 15000 }
            ],
            harga_total: 93000,
            jenis_transaksi: "Transfer Bank",
        },
        {
            no_nota: 'TMJ22012024005',
            tanggal: 22,
            customer: 'Eko Wijaya',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Beras Premium 5kg', quantity: 1, subtotal: 65000 },
                { nama_produk: 'Indomie Goreng', quantity: 5, subtotal: 15000 }
            ],
            harga_total: 80000,
            jenis_transaksi: "QRIS",
        },
        {
            no_nota: 'TMJ02022024006',
            tanggal: 2,
            customer: 'Rina Kusumah',
            bulan: 2,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Minyak Goreng 2L', quantity: 2, subtotal: 70000 },
                { nama_produk: 'Gula Pasir 1kg', quantity: 2, subtotal: 30000 },
                { nama_produk: 'Susu UHT 1L', quantity: 1, subtotal: 18000 }
            ],
            harga_total: 118000,
            jenis_transaksi: "QRIS",
        },
        {
            no_nota: 'TMJ05022024007',
            tanggal: 5,
            customer: 'Hadi Kurniawan',
            bulan: 2,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Kopi Bubuk 200g', quantity: 1, subtotal: 15000 },
                { nama_produk: 'Teh Celup Kotak', quantity: 2, subtotal: 14000 }
            ],
            harga_total: 29000,
            jenis_transaksi: "QRIS",
        },
        {
            no_nota: 'TMJ08022024008',
            tanggal: 8,
            customer: 'Maya Putri',
            bulan: 2,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Sabun Mandi Cair', quantity: 2, subtotal: 44000 },
                { nama_produk: 'Pasta Gigi 150g', quantity: 2, subtotal: 30000 },
                { nama_produk: 'Telur Ayam 1kg', quantity: 1, subtotal: 28000 }
            ],
            harga_total: 102000,
            jenis_transaksi: "Transfer Bank"
        },
        {
            no_nota: 'TMJ14022024009',
            tanggal: 14,
            customer: 'Fajar Nugraha',
            bulan: 2,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Beras Premium 5kg', quantity: 3, subtotal: 195000 }
            ],
            harga_total: 195000,
            jenis_transaksi: "E-Wallet",
        },
        {
            no_nota: 'TMJ20022024010',
            tanggal: 20,
            customer: 'Nia Ramadhani',
            bulan: 2,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Indomie Goreng', quantity: 20, subtotal: 60000 },
                { nama_produk: 'Minyak Goreng 2L', quantity: 1, subtotal: 35000 },
                { nama_produk: 'Gula Pasir 1kg', quantity: 1, subtotal: 15000 },
                { nama_produk: 'Susu UHT 1L', quantity: 3, subtotal: 54000 }
            ],
            harga_total: 164000,
            jenis_transaksi: "E-Wallet"
        },
        {
            no_nota: 'TMJ01032024011',
            tanggal: 1,
            customer: 'Rizky Febian',
            bulan: 3,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Telur Ayam 1kg', quantity: 3, subtotal: 84000 },
                { nama_produk: 'Beras Premium 5kg', quantity: 1, subtotal: 65000 }
            ],
            harga_total: 149000,
            jenis_transaksi: "E-Wallet",
        },
        {
            no_nota: 'TMJ04032024012',
            tanggal: 4,
            customer: 'Sari Indah',
            bulan: 3,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Kopi Bubuk 200g', quantity: 3, subtotal: 45000 },
                { nama_produk: 'Indomie Goreng', quantity: 5, subtotal: 15000 }
            ],
            harga_total: 60000,
            jenis_transaksi: "Transfer Bank"
        },
        {
            no_nota: 'TMJ09032024013',
            tanggal: 9,
            customer: 'Dian Sastro',
            bulan: 3,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Sabun Mandi Cair', quantity: 1, subtotal: 22000 },
                { nama_produk: 'Teh Celup Kotak', quantity: 3, subtotal: 21000 },
                { nama_produk: 'Susu UHT 1L', quantity: 2, subtotal: 36000 }
            ],
            harga_total: 79000,
            jenis_transaksi: "Transfer Bank"
        },
        {
            no_nota: 'TMJ15032024014',
            tanggal: 15,
            customer: 'Aris Munandar',
            bulan: 3,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Pasta Gigi 150g', quantity: 1, subtotal: 15000 },
                { nama_produk: 'Gula Pasir 1kg', quantity: 2, subtotal: 30000 }
            ],
            harga_total: 45000,
            jenis_transaksi: "Tunai",
        },
        {
            no_nota: 'TMJ22032024015',
            tanggal: 22,
            customer: 'Lia Ananda',
            bulan: 3,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Minyak Goreng 2L', quantity: 3, subtotal: 105000 },
                { nama_produk: 'Telur Ayam 1kg', quantity: 2, subtotal: 56000 },
                { nama_produk: 'Beras Premium 5kg', quantity: 1, subtotal: 65000 },
                { nama_produk: 'Indomie Goreng', quantity: 10, subtotal: 30000 }
            ],
            harga_total: 256000,
            jenis_transaksi: "QRIS",
        },
        {
            no_nota: 'TMJ03042024016',
            tanggal: 3,
            customer: 'Tono Sucipto',
            bulan: 4,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Beras Premium 5kg', quantity: 2, subtotal: 130000 },
                { nama_produk: 'Gula Pasir 1kg', quantity: 1, subtotal: 15000 }
            ],
            harga_total: 145000,
            jenis_transaksi: "E-Wallet",
        },
        {
            no_nota: 'TMJ11042024017',
            tanggal: 11,
            customer: 'Ayu Tingting',
            bulan: 4,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Susu UHT 1L', quantity: 4, subtotal: 72000 },
                { nama_produk: 'Indomie Goreng', quantity: 15, subtotal: 45000 },
                { nama_produk: 'Kopi Bubuk 200g', quantity: 1, subtotal: 15000 }
            ],
            harga_total: 132000,
            jenis_transaksi: "E-Wallet",
        },
        {
            no_nota: 'TMJ19042024018',
            tanggal: 19,
            customer: 'Bambang Pamungkas',
            bulan: 4,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Minyak Goreng 2L', quantity: 2, subtotal: 70000 },
                { nama_produk: 'Sabun Mandi Cair', quantity: 2, subtotal: 44000 }
            ],
            harga_total: 114000,
            jenis_transaksi: "QRIS"
        },
        {
            no_nota: 'TMJ25042024019',
            tanggal: 25,
            customer: 'Citra Kirana',
            bulan: 4,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Telur Ayam 1kg', quantity: 1, subtotal: 28000 },
                { nama_produk: 'Teh Celup Kotak', quantity: 1, subtotal: 7000 },
                { nama_produk: 'Pasta Gigi 150g', quantity: 2, subtotal: 30000 }
            ],
            harga_total: 65000,
            jenis_transaksi: "Transfer Bank",
        },
        {
            no_nota: 'TMJ28042024020',
            tanggal: 28,
            customer: 'Doni Salmanan',
            bulan: 4,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Beras Premium 5kg', quantity: 1, subtotal: 65000 },
                { nama_produk: 'Minyak Goreng 2L', quantity: 1, subtotal: 35000 },
                { nama_produk: 'Gula Pasir 1kg', quantity: 2, subtotal: 30000 },
                { nama_produk: 'Indomie Goreng', quantity: 5, subtotal: 15000 },
                { nama_produk: 'Susu UHT 1L', quantity: 1, subtotal: 18000 }
            ],
            harga_total: 163000,
            jenis_transaksi: "Tunai"
        }
    ];

    currentDate = new Date();

    listBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    showBulan(bulan: number): string {
        return this.listBulan[bulan - 1];
    }

    hitungJumlahTransaksiHariIni(): number {
        const tanggalHariini = this.currentDate.getDate();
        const bulanHariini = this.currentDate.getMonth() + 1;
        const tahunHariini = this.currentDate.getFullYear();
        let count = 0;
        for (let transaksi of Transaksi.riwayatTransaksi) {
            if (transaksi.tanggal === tanggalHariini && transaksi.bulan === bulanHariini && transaksi.tahun === tahunHariini) {
                count++;
            }
        }
        return count;
    }

    tambahTotalTerjual(newTransaksi: RiwayatTransaksi) {
        for (let produkBeli of newTransaksi.list_produk) {
            for (let produk of Produk.produkList) {
                if (produk.nama == produkBeli.nama_produk) {
                    produk.terjual += produkBeli.quantity;
                }
            }
        }
    }

    showRiwayatProduk(bulan: number, tahun: number): RiwayatProduk[] {
        let riwayatProduk: RiwayatProduk[] = [];

        for (let transaksi of Transaksi.riwayatTransaksi) {
            if (bulan != 0 && (transaksi.bulan != bulan || transaksi.tahun != tahun)) {
                continue;
            }
            for (let produkBeli of transaksi.list_produk) {
                let isInRiwayatProduk = false;

                for (let item of riwayatProduk) {
                    if (item.nama_produk === produkBeli.nama_produk &&
                        item.bulan === transaksi.bulan &&
                        item.tahun === transaksi.tahun) {
                        item.jumlah_terjual += produkBeli.quantity;
                        isInRiwayatProduk = true;
                        break;
                    }
                }

                if(!isInRiwayatProduk){
                    let newRiwayatProduk: RiwayatProduk = {
                        id: riwayatProduk.length + 1,
                        nama_produk: produkBeli.nama_produk,
                        jumlah_terjual: produkBeli.quantity,
                        bulan: transaksi.bulan,
                        tahun: transaksi.tahun,
                        url: this.findProdukUrl(produkBeli.nama_produk)
                    }
                    riwayatProduk.push(newRiwayatProduk);
                    isInRiwayatProduk = true;
                }
            }
        }

        return riwayatProduk;
    }

    findProdukUrl(namaProduk: string): string{
        let url = ""
        for (let produk of Produk.produkList){
            if(produk.nama === namaProduk){
                url = produk.url;
                break;
            }
        }
        return url;
    }
}