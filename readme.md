# 🏭 Sistem Penjadwalan Prioritas Karyawan (Metode SAW)

**Sistem Penjadwalan Prioritas Karyawan** adalah aplikasi berbasis **Node.js + Express + Sequelize (SQLite)** yang dirancang untuk membantu tim HRD menentukan prioritas penjadwalan shift dan insentif karyawan secara objektif.

Sistem ini menerapkan algoritma **Simple Additive Weighting (SAW)** untuk menghitung skor prioritas berdasarkan kriteria kinerja utama: **Jabatan, Performa, Lama Kerja, dan Fleksibilitas**.

Aplikasi ini dibuat sebagai **Final Project / Tugas Besar Mata Kuliah Logika Pemrograman**.

---

##  Fitur Utama
* **Dashboard Ranking:** Menampilkan urutan prioritas karyawan secara otomatis dari skor tertinggi ke terendah.
* **Input Data Karyawan:** Formulir untuk memasukkan data Jabatan, Performa (1-5), Lama Kerja, dan Skill.
* **Algoritma Cerdas:** Perhitungan bobot (Weighted Score) berjalan otomatis di sistem backend.
* **Manajemen Data:** Data karyawan tersimpan aman di database dan bisa dihapus jika tidak diperlukan.
* **Responsive UI:** Tampilan antarmuka modern menggunakan Bootstrap 5.

##  Teknologi yang Digunakan
* **Backend:** Node.js & Express.js
* **Database:** SQLite3 (Serverless & Ringan)
* **ORM:** Sequelize (Relational Mapping)
* **Frontend:** EJS (Template Engine) + Bootstrap
* **Konsep:** Object-Oriented Programming (OOP) & Asynchronous

---

# 📌 Panduan Instalasi Aplikasi

## 1. Clone Repository

Unduh atau clone project ke komputer Anda:

```bash
git clone https://github.com/xeronn4/Proyek-SIstem-Penjadwalan-Prioritas-Pekerja-Berbasis-Metode-Simple-Additive-Weighting.git
cd Proyek-Sistem-Penjadwalan-Prioritas-Pekerja-Berbasis-Metode-Simple-Additive-Weighting
```

## 2. Install Dependencies

Jalankan perintah berikut untuk mengunduh seluruh library yang dibutuhkan:

```bash
npm install
```

## 3. Menjalankan Aplikasi

Jalankan server aplikasi dengan perintah:

```bash
node app.js
```

**Catatan:** Database `database.sqlite` akan dibuat otomatis saat aplikasi pertama kali dijalankan.

## 4. Akses di Browser

Buka aplikasi melalui browser pada alamat:

```
http://localhost:3000
```

---

#  Konsep Akademis (CPMK)

Aplikasi ini dirancang untuk memenuhi kriteria penilaian akademik sebagai berikut:

* **Algoritma Matematis (CPMK-1)**
  Menerapkan metode *Simple Additive Weighting (SAW)* dengan proses normalisasi dan pembobotan nilai.

* **Modern Tools (CPMK-2)**
  Menggunakan *Sequelize ORM* serta konsep *Async/Await* dalam pengelolaan data.

* **Object Oriented Programming (OOP)**
  Menerapkan pewarisan kelas, di mana `PriorityScheduler` (Child) mewarisi `Calculator` (Parent).

---

#  Anggota Kelompok

* **Ahmad Rifqiy Aljabar** (2510312030)
* **Alif Juno Savero** (2510312095)

**Program Studi:** Teknik Industri
**Institusi:** UPN Veteran Jakarta












