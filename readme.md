# 🏭 Sistem Penjadwalan Prioritas Karyawan (Metode SAW)

**Sistem Penjadwalan Prioritas Karyawan** adalah aplikasi berbasis **Node.js + Express + Sequelize (SQLite)** yang dirancang untuk membantu tim HRD menentukan prioritas penjadwalan shift dan insentif karyawan secara objektif.

Sistem ini menerapkan algoritma **Simple Additive Weighting (SAW)** untuk menghitung skor prioritas berdasarkan kriteria kinerja utama: **Jabatan, Performa, Lama Kerja, dan Fleksibilitas**.

Aplikasi ini dibuat sebagai **Final Project / Tugas Besar Mata Kuliah Logika Pemrograman**.

---

## 🚀 Fitur Utama
* **Dashboard Ranking:** Menampilkan urutan prioritas karyawan secara otomatis dari skor tertinggi ke terendah.
* **Input Data Karyawan:** Formulir untuk memasukkan data Jabatan, Performa (1-5), Lama Kerja, dan Skill.
* **Algoritma Cerdas:** Perhitungan bobot (Weighted Score) berjalan otomatis di sistem backend.
* **Manajemen Data:** Data karyawan tersimpan aman di database dan bisa dihapus jika tidak diperlukan.
* **Responsive UI:** Tampilan antarmuka modern menggunakan Bootstrap 5.

## 🛠️ Teknologi yang Digunakan
* **Backend:** Node.js & Express.js
* **Database:** SQLite3 (Serverless & Ringan)
* **ORM:** Sequelize (Relational Mapping)
* **Frontend:** EJS (Template Engine) + Bootstrap
* **Konsep:** Object-Oriented Programming (OOP) & Asynchronous

---

## 💻 Cara Menjalankan Aplikasi

Karena folder `node_modules` tidak disertakan dalam repository ini (untuk efisiensi), silakan ikuti langkah mudah berikut:

### 1. Clone Repository
Download atau clone project ini ke komputer Anda:
```bash
git clone [https://github.com/USERNAME_GITHUB_KAMU/NAMA_REPO.git](https://github.com/USERNAME_GITHUB_KAMU/NAMA_REPO.git)
cd NAMA_REPO
2. Install Dependencies
Jalankan perintah ini di terminal untuk mengunduh library yang dibutuhkan:

Bash

npm install
3. Jalankan Aplikasi
Nyalakan server dengan perintah:

Bash

node app.js
Catatan: Database database.sqlite akan dibuat secara otomatis saat aplikasi pertama kali dijalankan.

4. Buka di Browser
Akses aplikasi melalui alamat: http://localhost:3000

📚 Konsep Akademis (CPMK)
Aplikasi ini memenuhi kriteria penilaian akademik:

Algoritma Matematis (CPMK-1): Menerapkan metode SAW dengan normalisasi dan pembobotan nilai.

Modern Tools (CPMK-2): Menggunakan Sequelize ORM dan Async/Await.

OOP Structure: Menggunakan Class PriorityScheduler (Child) yang mewarisi Class Calculator (Parent).

👥 Anggota Kelompok
[Nama Lengkap Kamu] ([NIM])

[Nama Anggota 2] ([NIM]) (Hapus jika tidak ada)

[Nama Anggota 3] ([NIM]) (Hapus jika tidak ada)

Program Studi Teknik Industri - UPN Veteran Jakarta
