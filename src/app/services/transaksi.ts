import { Service } from '@angular/core';

export interface RiwayatTransaksi {
    no_nota: string;
    tanggal: number;
    customer: string;
    bulan: number;
    tahun: number;
    list_produk: DetailTransaksi[];
    harga_total: number;
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

    riwayatTransaksi: RiwayatTransaksi[] = [
        {
            no_nota: 'TRX-001',
            tanggal: 10,
            customer: 'Budi Santoso',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Beras Premium 5kg', quantity: 2, subtotal: 130000 },
                { nama_produk: 'Minyak Goreng 2L', quantity: 1, subtotal: 35000 }
            ],
            harga_total: 165000
        },
        {
            no_nota: 'TRX-002',
            tanggal: 12,
            customer: 'Siti Rahma',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Indomie Goreng', quantity: 10, subtotal: 30000 },
                { nama_produk: 'Susu UHT 1L', quantity: 2, subtotal: 36000 },
                { nama_produk: 'Teh Celup Kotak', quantity: 1, subtotal: 7000 }
            ],
            harga_total: 73000
        },
        {
            no_nota: 'TRX-003',
            tanggal: 15,
            customer: 'Agus Pratama',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Gula Pasir 1kg', quantity: 3, subtotal: 45000 },
                { nama_produk: 'Kopi Bubuk 200g', quantity: 2, subtotal: 30000 }
            ],
            harga_total: 75000
        },
        {
            no_nota: 'TRX-004',
            tanggal: 18,
            customer: 'Dewi Lestari',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Telur Ayam 1kg', quantity: 2, subtotal: 56000 },
                { nama_produk: 'Sabun Mandi Cair', quantity: 1, subtotal: 22000 },
                { nama_produk: 'Pasta Gigi 150g', quantity: 1, subtotal: 15000 }
            ],
            harga_total: 93000
        },
        {
            no_nota: 'TRX-005',
            tanggal: 22,
            customer: 'Eko Wijaya',
            bulan: 1,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Beras Premium 5kg', quantity: 1, subtotal: 65000 },
                { nama_produk: 'Indomie Goreng', quantity: 5, subtotal: 15000 }
            ],
            harga_total: 80000
        },
        {
            no_nota: 'TRX-006',
            tanggal: 2,
            customer: 'Rina Kusumah',
            bulan: 2,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Minyak Goreng 2L', quantity: 2, subtotal: 70000 },
                { nama_produk: 'Gula Pasir 1kg', quantity: 2, subtotal: 30000 },
                { nama_produk: 'Susu UHT 1L', quantity: 1, subtotal: 18000 }
            ],
            harga_total: 118000
        },
        {
            no_nota: 'TRX-007',
            tanggal: 5,
            customer: 'Hadi Kurniawan',
            bulan: 2,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Kopi Bubuk 200g', quantity: 1, subtotal: 15000 },
                { nama_produk: 'Teh Celup Kotak', quantity: 2, subtotal: 14000 }
            ],
            harga_total: 29000
        },
        {
            no_nota: 'TRX-008',
            tanggal: 8,
            customer: 'Maya Putri',
            bulan: 2,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Sabun Mandi Cair', quantity: 2, subtotal: 44000 },
                { nama_produk: 'Pasta Gigi 150g', quantity: 2, subtotal: 30000 },
                { nama_produk: 'Telur Ayam 1kg', quantity: 1, subtotal: 28000 }
            ],
            harga_total: 102000
        },
        {
            no_nota: 'TRX-009',
            tanggal: 14,
            customer: 'Fajar Nugraha',
            bulan: 2,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Beras Premium 5kg', quantity: 3, subtotal: 195000 }
            ],
            harga_total: 195000
        },
        {
            no_nota: 'TRX-010',
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
            harga_total: 164000
        },
        {
            no_nota: 'TRX-011',
            tanggal: 1,
            customer: 'Rizky Febian',
            bulan: 3,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Telur Ayam 1kg', quantity: 3, subtotal: 84000 },
                { nama_produk: 'Beras Premium 5kg', quantity: 1, subtotal: 65000 }
            ],
            harga_total: 149000
        },
        {
            no_nota: 'TRX-012',
            tanggal: 4,
            customer: 'Sari Indah',
            bulan: 3,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Kopi Bubuk 200g', quantity: 3, subtotal: 45000 },
                { nama_produk: 'Indomie Goreng', quantity: 5, subtotal: 15000 }
            ],
            harga_total: 60000
        },
        {
            no_nota: 'TRX-013',
            tanggal: 9,
            customer: 'Dian Sastro',
            bulan: 3,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Sabun Mandi Cair', quantity: 1, subtotal: 22000 },
                { nama_produk: 'Teh Celup Kotak', quantity: 3, subtotal: 21000 },
                { nama_produk: 'Susu UHT 1L', quantity: 2, subtotal: 36000 }
            ],
            harga_total: 79000
        },
        {
            no_nota: 'TRX-014',
            tanggal: 15,
            customer: 'Aris Munandar',
            bulan: 3,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Pasta Gigi 150g', quantity: 1, subtotal: 15000 },
                { nama_produk: 'Gula Pasir 1kg', quantity: 2, subtotal: 30000 }
            ],
            harga_total: 45000
        },
        {
            no_nota: 'TRX-015',
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
            harga_total: 256000
        },
        {
            no_nota: 'TRX-016',
            tanggal: 3,
            customer: 'Tono Sucipto',
            bulan: 4,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Beras Premium 5kg', quantity: 2, subtotal: 130000 },
                { nama_produk: 'Gula Pasir 1kg', quantity: 1, subtotal: 15000 }
            ],
            harga_total: 145000
        },
        {
            no_nota: 'TRX-017',
            tanggal: 11,
            customer: 'Ayu Tingting',
            bulan: 4,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Susu UHT 1L', quantity: 4, subtotal: 72000 },
                { nama_produk: 'Indomie Goreng', quantity: 15, subtotal: 45000 },
                { nama_produk: 'Kopi Bubuk 200g', quantity: 1, subtotal: 15000 }
            ],
            harga_total: 132000
        },
        {
            no_nota: 'TRX-018',
            tanggal: 19,
            customer: 'Bambang Pamungkas',
            bulan: 4,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Minyak Goreng 2L', quantity: 2, subtotal: 70000 },
                { nama_produk: 'Sabun Mandi Cair', quantity: 2, subtotal: 44000 }
            ],
            harga_total: 114000
        },
        {
            no_nota: 'TRX-019',
            tanggal: 25,
            customer: 'Citra Kirana',
            bulan: 4,
            tahun: 2024,
            list_produk: [
                { nama_produk: 'Telur Ayam 1kg', quantity: 1, subtotal: 28000 },
                { nama_produk: 'Teh Celup Kotak', quantity: 1, subtotal: 7000 },
                { nama_produk: 'Pasta Gigi 150g', quantity: 2, subtotal: 30000 }
            ],
            harga_total: 65000
        },
        {
            no_nota: 'TRX-020',
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
            harga_total: 163000
        }
    ];
    riwayatProduk: RiwayatProduk[] = [
        // Bulan 1 Tahun 2024
        { id: 1, nama_produk: 'Beras Premium 5kg', jumlah_terjual: 3, bulan: 1, tahun: 2024, url: "https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1092483000&w=1920&q=75" },
        { id: 2, nama_produk: 'Minyak Goreng 2L', jumlah_terjual: 1, bulan: 1, tahun: 2024, url: "https://down-id.img.susercontent.com/file/sg-11134201-23020-acjeupfkvinv60" },
        { id: 3, nama_produk: 'Indomie Goreng', jumlah_terjual: 15, bulan: 1, tahun: 2024, url: "https://image.astronauts.cloud/product-images/2026/7/IndomieGorengSpesial_414accae-05bf-440a-b59f-b9b621dc486c_900x900.png" },
        { id: 4, nama_produk: 'Susu UHT 1L', jumlah_terjual: 2, bulan: 1, tahun: 2024, url: "https://www.static-src.com/siva/asset/09_2024/SusuUHT-Ultra.jpg" },
        { id: 5, nama_produk: 'Teh Celup Kotak', jumlah_terjual: 1, bulan: 1, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p5Ohc3k7BJ1myF7kEdzQs-P0qkp9i4HsjLjxlDLFRSgP5vi7PcLC3O0&s=10" },
        { id: 6, nama_produk: 'Gula Pasir 1kg', jumlah_terjual: 3, bulan: 1, tahun: 2024, url: "https://pasarsegar.co.id/wp-content/uploads/2022/12/71faa2b0-05e0-4263-aa67-2b4b12ec9a95_Gulaku-Gula-Pasir-1-kg-11-1.jpeg" },
        { id: 7, nama_produk: 'Kopi Bubuk 200g', jumlah_terjual: 2, bulan: 1, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYe34SD95nAz2uQ_V0CQ5NCXON5h3yunmKO_P6kejS9cB2-UAygBH8o6sv&s=10" },
        { id: 8, nama_produk: 'Telur Ayam 1kg', jumlah_terjual: 2, bulan: 1, tahun: 2024, url: "https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/08/300605.png?fit=1080%2C1080&ssl=1" },
        { id: 9, nama_produk: 'Sabun Mandi Cair', jumlah_terjual: 1, bulan: 1, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUrv4z41ICCZ13G9sViTtjxLWjetwpG6oQooAF_PLIzmqWAWIWYGNwuM&s=10" },
        { id: 10, nama_produk: 'Pasta Gigi 150g', jumlah_terjual: 1, bulan: 1, tahun: 2024, url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-173268282/pepsodent_pepsodent-pasta-gigi-ekonomis-150-g_full01.jpg" },

        // Bulan 2 Tahun 2024
        { id: 11, nama_produk: 'Minyak Goreng 2L', jumlah_terjual: 3, bulan: 2, tahun: 2024, url: "https://down-id.img.susercontent.com/file/sg-11134201-23020-acjeupfkvinv60" },
        { id: 12, nama_produk: 'Gula Pasir 1kg', jumlah_terjual: 3, bulan: 2, tahun: 2024, url: "https://pasarsegar.co.id/wp-content/uploads/2022/12/71faa2b0-05e0-4263-aa67-2b4b12ec9a95_Gulaku-Gula-Pasir-1-kg-11-1.jpeg" },
        { id: 13, nama_produk: 'Susu UHT 1L', jumlah_terjual: 4, bulan: 2, tahun: 2024, url: "https://www.static-src.com/siva/asset/09_2024/SusuUHT-Ultra.jpg" },
        { id: 14, nama_produk: 'Kopi Bubuk 200g', jumlah_terjual: 1, bulan: 2, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYe34SD95nAz2uQ_V0CQ5NCXON5h3yunmKO_P6kejS9cB2-UAygBH8o6sv&s=10" },
        { id: 15, nama_produk: 'Teh Celup Kotak', jumlah_terjual: 2, bulan: 2, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p5Ohc3k7BJ1myF7kEdzQs-P0qkp9i4HsjLjxlDLFRSgP5vi7PcLC3O0&s=10" },
        { id: 16, nama_produk: 'Sabun Mandi Cair', jumlah_terjual: 2, bulan: 2, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUrv4z41ICCZ13G9sViTtjxLWjetwpG6oQooAF_PLIzmqWAWIWYGNwuM&s=10" },
        { id: 17, nama_produk: 'Pasta Gigi 150g', jumlah_terjual: 2, bulan: 2, tahun: 2024, url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-173268282/pepsodent_pepsodent-pasta-gigi-ekonomis-150-g_full01.jpg" },
        { id: 18, nama_produk: 'Telur Ayam 1kg', jumlah_terjual: 1, bulan: 2, tahun: 2024, url: "https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/08/300605.png?fit=1080%2C1080&ssl=1" },
        { id: 19, nama_produk: 'Beras Premium 5kg', jumlah_terjual: 3, bulan: 2, tahun: 2024, url: "https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1092483000&w=1920&q=75" },
        { id: 20, nama_produk: 'Indomie Goreng', jumlah_terjual: 20, bulan: 2, tahun: 2024, url: "https://image.astronauts.cloud/product-images/2026/7/IndomieGorengSpesial_414accae-05bf-440a-b59f-b9b621dc486c_900x900.png" },

        // Bulan 3 Tahun 2024
        { id: 21, nama_produk: 'Telur Ayam 1kg', jumlah_terjual: 5, bulan: 3, tahun: 2024, url: "https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/08/300605.png?fit=1080%2C1080&ssl=1" },
        { id: 22, nama_produk: 'Beras Premium 5kg', jumlah_terjual: 2, bulan: 3, tahun: 2024, url: "https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1092483000&w=1920&q=75" },
        { id: 23, nama_produk: 'Kopi Bubuk 200g', jumlah_terjual: 3, bulan: 3, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYe34SD95nAz2uQ_V0CQ5NCXON5h3yunmKO_P6kejS9cB2-UAygBH8o6sv&s=10" },
        { id: 24, nama_produk: 'Indomie Goreng', jumlah_terjual: 15, bulan: 3, tahun: 2024, url: "https://image.astronauts.cloud/product-images/2026/7/IndomieGorengSpesial_414accae-05bf-440a-b59f-b9b621dc486c_900x900.png" },
        { id: 25, nama_produk: 'Sabun Mandi Cair', jumlah_terjual: 1, bulan: 3, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUrv4z41ICCZ13G9sViTtjxLWjetwpG6oQooAF_PLIzmqWAWIWYGNwuM&s=10" },
        { id: 26, nama_produk: 'Teh Celup Kotak', jumlah_terjual: 3, bulan: 3, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p5Ohc3k7BJ1myF7kEdzQs-P0qkp9i4HsjLjxlDLFRSgP5vi7PcLC3O0&s=10" },
        { id: 27, nama_produk: 'Susu UHT 1L', jumlah_terjual: 2, bulan: 3, tahun: 2024, url: "https://www.static-src.com/siva/asset/09_2024/SusuUHT-Ultra.jpg" },
        { id: 28, nama_produk: 'Pasta Gigi 150g', jumlah_terjual: 1, bulan: 3, tahun: 2024, url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-173268282/pepsodent_pepsodent-pasta-gigi-ekonomis-150-g_full01.jpg" },
        { id: 29, nama_produk: 'Gula Pasir 1kg', jumlah_terjual: 2, bulan: 3, tahun: 2024, url: "https://pasarsegar.co.id/wp-content/uploads/2022/12/71faa2b0-05e0-4263-aa67-2b4b12ec9a95_Gulaku-Gula-Pasir-1-kg-11-1.jpeg" },
        { id: 30, nama_produk: 'Minyak Goreng 2L', jumlah_terjual: 3, bulan: 3, tahun: 2024, url: "https://down-id.img.susercontent.com/file/sg-11134201-23020-acjeupfkvinv60" },

        // Bulan 4 Tahun 2024
        { id: 31, nama_produk: 'Beras Premium 5kg', jumlah_terjual: 3, bulan: 4, tahun: 2024, url: "https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1092483000&w=1920&q=75" },
        { id: 32, nama_produk: 'Gula Pasir 1kg', jumlah_terjual: 3, bulan: 4, tahun: 2024, url: "https://pasarsegar.co.id/wp-content/uploads/2022/12/71faa2b0-05e0-4263-aa67-2b4b12ec9a95_Gulaku-Gula-Pasir-1-kg-11-1.jpeg" },
        { id: 33, nama_produk: 'Susu UHT 1L', jumlah_terjual: 5, bulan: 4, tahun: 2024, url: "https://www.static-src.com/siva/asset/09_2024/SusuUHT-Ultra.jpg" },
        { id: 34, nama_produk: 'Indomie Goreng', jumlah_terjual: 20, bulan: 4, tahun: 2024, url: "https://image.astronauts.cloud/product-images/2026/7/IndomieGorengSpesial_414accae-05bf-440a-b59f-b9b621dc486c_900x900.png" },
        { id: 35, nama_produk: 'Kopi Bubuk 200g', jumlah_terjual: 1, bulan: 4, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYe34SD95nAz2uQ_V0CQ5NCXON5h3yunmKO_P6kejS9cB2-UAygBH8o6sv&s=10" },
        { id: 36, nama_produk: 'Minyak Goreng 2L', jumlah_terjual: 3, bulan: 4, tahun: 2024, url: "https://down-id.img.susercontent.com/file/sg-11134201-23020-acjeupfkvinv60" },
        { id: 37, nama_produk: 'Sabun Mandi Cair', jumlah_terjual: 2, bulan: 4, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUrv4z41ICCZ13G9sViTtjxLWjetwpG6oQooAF_PLIzmqWAWIWYGNwuM&s=10" },
        { id: 38, nama_produk: 'Telur Ayam 1kg', jumlah_terjual: 1, bulan: 4, tahun: 2024, url: "https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/08/300605.png?fit=1080%2C1080&ssl=1" },
        { id: 39, nama_produk: 'Teh Celup Kotak', jumlah_terjual: 1, bulan: 4, tahun: 2024, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p5Ohc3k7BJ1myF7kEdzQs-P0qkp9i4HsjLjxlDLFRSgP5vi7PcLC3O0&s=10" },
        { id: 40, nama_produk: 'Pasta Gigi 150g', jumlah_terjual: 2, bulan: 4, tahun: 2024, url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-173268282/pepsodent_pepsodent-pasta-gigi-ekonomis-150-g_full01.jpg" }
    ];
    
    listBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    showBulan(bulan: number): string {
        return this.listBulan[bulan];
    }
}
