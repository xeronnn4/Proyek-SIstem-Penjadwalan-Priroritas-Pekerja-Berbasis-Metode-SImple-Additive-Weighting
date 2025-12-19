const Sequelize = require('sequelize');
const db = require('../config/database');

const Employee = db.define('employee', {
    // Definisi Kolom Tabel (Bahasa Inggris untuk Database, Keterangan Indonesia)
    name: { type: Sequelize.STRING, allowNull: false },           // Nama
    position: { type: Sequelize.STRING },                         // Jabatan
    yearsOfService: { type: Sequelize.INTEGER },                  // Lama Kerja (Tahun)
    hoursAvailable: { type: Sequelize.INTEGER },                  // Jam Tersedia
    performance: { type: Sequelize.INTEGER },                     // Nilai Performa (1-5)
    shiftPreference: { type: Sequelize.STRING },                  // Pilihan Shift
    specialSkill: { type: Sequelize.STRING },                     // Skill Khusus
    leaveFlexibility: { type: Sequelize.INTEGER }                 // Fleksibilitas Cuti
});

module.exports = Employee;