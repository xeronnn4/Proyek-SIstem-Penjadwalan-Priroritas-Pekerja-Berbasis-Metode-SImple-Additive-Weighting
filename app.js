const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts'); 
const db = require('./config/database');
const Employee = require('./models/Employee');
const Schedule = require('./models/Schedule');
const PriorityScheduler = require('./utils/PriorityAlgo');

const app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

// --- RESET DATABASE ---
// Setiap aplikasi dijalankan ulang, pastikan tabelnya sinkron
db.sync().then(() => console.log('✅ Database Berhasil Terhubung!'));


// --- ROUTE 1: HALAMAN HOME ---
app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

// --- ROUTE 1.5: HALAMAN DASHBOARD ---
app.get('/dashboard', async (req, res) => {
    try {
        // 1. Ambil semua data karyawan beserta jadwalnya
        const employees = await Employee.findAll({ include: [Schedule] });
        
        // 2. SORTING (PENGURUTAN)
        // Kita urutkan manual menggunakan Javascript
        // Logika: Bandingkan Skor B dengan Skor A. Jika B lebih besar, B naik ke atas.
        employees.sort((a, b) => {
            let skorA = a.schedules[0] ? a.schedules[0].priorityScore : 0;
            let skorB = b.schedules[0] ? b.schedules[0].priorityScore : 0;
            return skorB - skorA; // Descending (Besar ke Kecil)
        });

        res.render('index', { employees });
    } catch (error) {
        res.send("Error: " + error.message);
    }
});


// --- ROUTE 2: HALAMAN INPUT ---
app.get('/add', (req, res) => {
    res.render('form');
});


// --- ROUTE 3: PROSES SIMPAN & HITUNG (INTI PROGRAM) ---
app.post('/add', async (req, res) => {
    try {
        // 1. Tangkap inputan dari Form HTML
        const { 
            name, position, yearsOfService, hoursAvailable, 
            performance, shiftPreference, specialSkill, leaveFlexibility 
        } = req.body;
        
        // 2. Simpan Data Karyawan ke Database
        const karyawanBaru = await Employee.create({ 
            name, position, shiftPreference, specialSkill,
            yearsOfService: parseInt(yearsOfService), 
            hoursAvailable: parseInt(hoursAvailable),
            performance: parseInt(performance),
            leaveFlexibility: parseInt(leaveFlexibility)
        });
        
        // 3. Panggil ALGORITMA (Class PriorityScheduler)
        // Kita kirim data inputan tadi ke mesin penghitung
        const mesinHitung = new PriorityScheduler({
            position, specialSkill,
            yearsOfService: parseInt(yearsOfService),
            hoursAvailable: parseInt(hoursAvailable),
            performance: parseInt(performance),
            leaveFlexibility: parseInt(leaveFlexibility)
        });

        const hasilSkor = mesinHitung.calculate(); // Hitung sekarang!

        // 4. Simpan Hasil Skor ke Tabel Jadwal
        await Schedule.create({
            priorityScore: hasilSkor,
            employeeId: karyawanBaru.id // Sambungkan ID karyawan
        });

        // 5. Redirect ke dashboard setelah berhasil menyimpan dan menghitung
        // Gunakan 303 agar browser mengikuti redirect POST -> GET dengan benar
        res.redirect(303, '/dashboard');
        
    } catch (error) {
        res.send("Gagal menyimpan: " + error.message);
    }
});


// --- ROUTE 4: HAPUS DATA ---
app.post('/delete/:id', async (req, res) => {
    await Employee.destroy({ where: { id: req.params.id } });
    res.redirect('/dashboard');
});

// Jalankan Server di Port 3000
app.listen(3000, () => {
    console.log('--------------------------------------------------');
    console.log('🚀 APLIKASI SIAP! Buka browser di: http://localhost:3000');
    console.log('--------------------------------------------------');
});