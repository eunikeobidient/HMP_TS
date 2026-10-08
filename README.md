# SIMOBILE - Aplikasi Kasir Toko Makmur Jaya
> **Project Ujian Tengah Semester (UTS)** — Mata Kuliah **Hybrid Mobile Programming (HMP)**

## 1. Tentang Aplikasi


### Apa itu SIMOBILE?
**SIMOBILE** adalah prototipe aplikasi kasir (*Point of Sale*) berbasis mobile yang dikembangkan menggunakan **Ionic Angular** dan TypeScript. Aplikasi ini dirancang khusus untuk berjalan secara *offline/local-first* tanpa memerlukan ketergantungan koneksi internet dan database eksternal.


### Mengapa Dibuat?
Aplikasi ini dibangun untuk membantu **Bu Marni**, pemilik usaha kelontong *"Toko Makmur Jaya"*, yang selama ini mengalami kendala dalam operasional tokonya:
- Pencatatan buku kas manual yang rentan hilang atau salah hitung.
- Kesulitan menghitung sisa stok barang secara cepat.
- Sering lupa pembaruan harga beli dan harga jual produk.
- Kesulitan memantau produk yang paling laris setiap harinya.
- Keterbatasan sinyal internet di lokasi toko yang tidak stabil.


Dengan SIMOBILE, seluruh proses pencatatan katalog, transaksi kasir, perhitungan omzet, dan laporan penjualan harian/bulanan dapat dilakukan langsung dari smartphone Bu Marni dengan cepat, akurat, dan mudah digunakan.

---

## 2. Fitur yang Berhasil Diimplementasikan
Berikut adalah daftar fitur lengkap yang telah selesai dibangun sesuai dengan ketentuan teknis UTS:
1. **Struktur Navigasi Tab & Side Drawer**:
   - 4 Navigasi Tab Utama di bagian bawah: **Dashboard**, **Produk**, **Transaksi**, dan **Profil**.
   - Side Menu (Drawer) geser dari samping untuk menu sekunder: **Pengaturan**, **Tentang Aplikasi**, dan **Logout**.
2. **Dashboard Real-Time**:
   - Ringkasan statistik jumlah total produk yang terdaftar.
   - Total nominal transaksi penjualan hari ini (menggunakan custom calculation logic).
   - Card informasi produk terlaris hari ini lengkap dengan foto, nama produk, dan jumlah unit terjual.
   - Menggunakan *String Interpolation Binding* dan *Angular Pipes* (`number`).
3. **Pencarian & Filter Produk Real-Time**:
   - Pencarian instan menggunakan *Two-Way Data Binding* (`ngModel`) dan event input tanpa memerlukan tombol submit cari.
   - Filter cepat berdasarkan kategori produk (*Sembako, Makanan, Minuman, Perlengkapan*).
4. **Detail Produk dengan Route Parameter**:
   - Navigasi dinamis menuju halaman detail berdasarkan route ID (`/detail-produk/:id`).
   - Menampilkan informasi lengkap: Nama, Kategori, Stok Sisa, Harga Beli, Harga Jual, dan Estimasi Margin Keuntungan.
5. **Data Binding & Validasi UI**:
   - *Property Binding* gambar default/fallback otomatis jika produk tidak memiliki URL foto.
   - *Property Binding* tombol *"Tambah ke Keranjang"* otomatis ter-disable (`disabled="true"`) jika stok produk habis (`stock === 0`).
   - *Event Binding* untuk penambahan, pengurangan kuantitas, dan penghapusan item.
6. **Manajemen Form Produk (Tambah & Edit)**:
   - Validasi data interaktif pada setiap field (Nama min. 3 karakter, Harga Beli > 0, Harga Jual > 0, Stok >= 0).
   - Pesan error spesifik per input field tanpa menghilangkan isian yang sudah benar sebelumnya.
7. **Arsitektur Angular Service**:
   - Logika bisnis dan manajemen state dipisahkan secara modular ke dalam service terpisah:
     - [Produk Service](src/app/produk.service.ts) — Pengelolaan data katalog, stok, dan mutasi produk.
     - [Keranjang Service](src/app/keranjang.service.ts) — Pengelolaan cart, quantity, dan kalkulasi subtotal/total belanja.
     - [Transaksi Service](src/app/transaksi.service.ts) — Pengelolaan rekap transaksi, riwayat nota, dan analitik penjualan.
     - [Auth Service](src/app/auth.ts) - Service untuk autentikasi dummy
     - [Auth Guard](src/app/auth.guard.ts) - Service yang digunakan untuk mengecek apakah autentikasi telah dilakukan (dipanggil di app routing dengan method canActivate)
8. **Kustomisasi Tema & Dark Mode**:
   - Custom styling palet warna toko khas (Nuansa Hijau & Kuning) pada `src/theme/variables.scss`.
   - Toggle switch mode Gelap (Dark Mode) dan mode Terang (Light Mode) pada menu Pengaturan.
9. **Animasi Halus & Interaktif**:
   - Animasi bumper screen & transisi halus pada *Splash Screen* menggunakan `AnimationController` di awal aplikasi.
   - Efek animasi bouncing (*Tuing*) pada Floating Cart Badge saat item ditambahkan ke keranjang.
   - Fitur swipe-to-delete item keranjang menggunakan `ion-item-sliding`.
10. **Keranjang Kasir & Simulasi Checkout**:
    - Perhitungan otomatis subtotal per item dan total harga keseluruhan.
    - Input nama pelanggan serta pilihan metode pembayaran (*Tunai, QRIS, Transfer Bank, E-Wallet*).
    - Konfirmasi transaksi otomatis memotong stok produk dan menyimpan nota baru.
    - Mengimplementasikan ChangeDetectorRef.detectChanges() untuk memaksa pembaruan (re-render) antarmuka HTML. Hal ini secara efektif mengatasi isu Change Detection Angular, sehingga layar dapat langsung menampilkan data terbaru meskipun referensi memori array di dalam Service tidak berubah.
11. **Riwayat Transaksi & Detail Nota**:
    - Tampilan rekap transaksi terkelompok per bulan dan tahun.
    - Tampilan rekap penjualan kuantitas per produk.
    - Halaman Detail Nota yang menampilkan rincian barang, kuantitas, subtotal, dan metode pembayaran.
12. **Dataset Dummy Awal**:
    - Dilengkapi minimal 10 item produk dummy beragam kategori dan stok untuk pengujian fitur.

---

## 3. Panduan Instalasi & Menjalankan Aplikasi
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi LTS) dan [Ionic CLI](https://ionicframework.com/docs/intro/cli) di perangkat Anda.

### 1. Clone Repository
```bash
git clone https://github.com/eunikeobidient/HMP_TS.git
cd HMP_TS
```

### 2. Install Dependensi
```bash
npm install -g @ionic/cli
npm install @angular/cli
```

### 3. Menjalankan Server Development
Jalankan dev-server lokal dengan perintah berikut:
```bash
ionic serve
```

Aplikasi akan terbuka otomatis di browser Anda pada alamat `http://localhost:8100/`.

### 4. Akun Login Default
- **Username**: `admin`
- **Password**: `admin123`

---

## 👥 Tim Pengembang (Team TS)
Aplikasi ini dikembangkan untuk Ujian Tengah Semester (UTS) mata kuliah **Hybrid Mobile Programming**:
| Nama Mahasiswa | NRP |
|---|---|
| **Soen Hizkia** | 160424017 |
| **Eunike Obidient Djuwari** | 160424019 |
| **Han Christian Gunawan** | 160424041 |

---

*Toko Makmur Jaya &copy; 2026 - SIMOBILE App*
