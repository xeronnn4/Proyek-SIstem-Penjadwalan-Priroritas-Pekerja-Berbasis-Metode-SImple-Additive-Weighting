// Class Dasar (Syarat OOP)
class Calculator {
    calculate() { throw new Error("Harus diimplementasikan!"); }
}

// Class Utama Algoritma Prioritas (Inheritance dari Calculator)
class PriorityScheduler extends Calculator {
    constructor(dataKaryawan) {
        super();
        this.data = dataKaryawan; // Data yang mau dihitung disimpan disini
    }

    // --- LOGIKA MATEMATIS ADA DISINI ---
    calculate() {
        let skor = 0; // Mulai dari 0

        // 1. ATURAN JABATAN (Manager skor paling tinggi)
        if (this.data.position === 'Manager') {
            skor = skor + 10;
        } else if (this.data.position === 'Supervisor') {
            skor = skor + 7;
        } else {
            skor = skor + 4; // Staff biasa
        }

        // 2. ATURAN LAMA KERJA (1 Tahun = tambah 1 Poin)
        skor = skor + this.data.yearsOfService;

        // 3. ATURAN JAM (Semakin banyak jam luang, semakin bagus)
        // Dibagi 5 supaya angkanya tidak terlalu besar mendominasi
        skor = skor + (this.data.hoursAvailable / 5);

        // 4. ATURAN PERFORMA (Sangat Penting, jadi dikali 2)
        // Misal nilai 5, maka dapat poin 10
        skor = skor + (this.data.performance * 2);

        // 5. ATURAN CUTI (Fleksibilitas Cuti dikali 1.5)
        skor = skor + (this.data.leaveFlexibility * 1.5);

        // 6. BONUS SKILL
        // Jika punya skill (tidak strip '-'), tambah 3 poin
        if (this.data.specialSkill !== '-' && this.data.specialSkill !== '') {
            skor = skor + 3;
        }

        return parseFloat(skor.toFixed(1)); // Kembalikan hasil (bulatkan 1 koma)
    }
}

module.exports = PriorityScheduler;