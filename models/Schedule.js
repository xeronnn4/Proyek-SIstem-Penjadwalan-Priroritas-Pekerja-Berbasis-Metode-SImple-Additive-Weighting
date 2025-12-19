const Sequelize = require('sequelize');
const db = require('../config/database');
const Employee = require('./Employee');

const Schedule = db.define('schedule', {
    priorityScore: { type: Sequelize.FLOAT }, // Hasil perhitungan skor
    rank: { type: Sequelize.INTEGER }         // Urutan peringkat
});

// Relasi: Karyawan punya Jadwal
Employee.hasMany(Schedule);
Schedule.belongsTo(Employee);

module.exports = Schedule;