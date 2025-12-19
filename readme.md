# 🏭 Sistem Penjadwalan Prioritas Karyawan (Metode SAW)

Proyek ini adalah **Sistem Pendukung Keputusan (Decision Support System)** berbasis Web untuk menentukan prioritas karyawan dalam penjadwalan shift kerja. Sistem ini menggunakan algoritma **Simple Additive Weighting (SAW)** untuk menghitung skor prioritas berdasarkan multi-kriteria (Jabatan, Lama Kerja, Performa, dll).

Dibuat untuk memenuhi **Tugas Besar / UAS Mata Kuliah Logika Pemrograman**.

## 👥 Anggota Tim
1. **Ahmad Rifqiy Aljabar** - [2510312030]
2. **Alif Juno Savero** - [2510312095] 
3. **M.Faren Harozi** - [NIM]
   
---

## 🚀 Fitur Utama
* **Input Data Karyawan:** Form lengkap dengan validasi tipe data.
* **Algoritma SAW:** Perhitungan otomatis skor prioritas (Weighted Scoring).
* **Ranking Otomatis:** Menampilkan daftar karyawan urut dari skor tertinggi ke terendah.
* **Database Integration:** Menggunakan SQLite & Sequelize ORM (Data tersimpan permanen).
* **CRUD System:** Fitur Create, Read, dan Delete data karyawan.

---

## 🛠️ Teknologi yang Digunakan
* **Bahasa:** JavaScript (Node.js)
* **Framework:** Express.js
* **Frontend:** EJS (Embedded JavaScript) + Bootstrap 5
* **Database:** SQLite3
* **ORM:** Sequelize
* **Konsep:** Object-Oriented Programming (OOP) & Asynchronous

---

## 💻 Cara Menjalankan (Installation Guide)

Karena folder `node_modules` tidak disertakan dalam repository ini, silakan ikuti langkah berikut untuk menjalankan aplikasi di komputer Anda:

### 1. Persiapan
Pastikan komputer Anda sudah terinstall **Node.js**.

### 2. Install Library (Dependency)
Buka terminal/CMD di dalam folder proyek ini, lalu ketik perintah berikut untuk mendownload library yang dibutuhkan secara otomatis:

```bash

npm install
