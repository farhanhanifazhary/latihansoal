const quizData = [
        {
            question: "1.  Peningkatan performa prosesor secara fundamental disebabkan oleh...",
            options: { a: "Peningkatan ukuran fisik prosesor", b: "Pengecilan ukuran gerbang logika", c: "Pengurangan jumlah cache", d: "Penggunaan bahan lebih berat" },
            answer: "b"
        },
        {
            question: "2.  Upaya menyesuaikan arsitektur untuk mengimbangi kecepatan antar komponen disebut...",
            options: { a: "Keseimbangan Performa (Performance Balance)", b: "Hukum Amdahl", c: "Pipelining", d: "Benchmarking" },
            answer: "a"
        },
        {
            question: "3.  Masalah utama dari peningkatan kepadatan logika dan kecepatan clock adalah...",
            options: { a: "Penurunan biaya", b: "Peningkatan konsumsi daya dan panas", c: "Peningkatan latensi memori", d: "Penurunan RC delay" },
            answer: "b"
        },
        {
            question: "4.  Penundaan sinyal akibat resistansi (R) dan kapasitansi (C) pada kabel interkoneksi chip dikenal sebagai...",
            options: { a: "Memory Latency", b: "Power Delay", c: "RC Delay", d: "Clock Skew" },
            answer: "c"
        },
        {
            question: "5.  Strategi menempatkan banyak prosesor homogen pada satu chip dikenal sebagai...",
            options: { a: "GPU", b: "Multicore dan MIC", c: "ASIC", d: "FPGA" },
            answer: "b"
        },
        {
            question: "6.  Hukum Amdahl digunakan untuk...",
            options: { a: "Mengukur konsumsi daya", b: "Menghitung kecepatan clock", c: "Menganalisis potensi percepatan program menggunakan prosesor paralel", d: "Menentukan ukuran cache" },
            answer: "c"
        },
        {
            question: "7.  Menurut Hukum Amdahl, untuk memanfaatkan pemrosesan paralel, software harus...",
            options: { a: "Berjalan pada satu core", b: "Ditulis dalam bahasa tingkat rendah", c: "Disesuaikan untuk lingkungan eksekusi paralel", d: "Menghindari penggunaan memori" },
            answer: "c"
        },
        {
            question: "8.  Hukum Little (L = λW) menyatakan hubungan antara jumlah item (L), tingkat kedatangan (λ), dan...",
            options: { a: "Waktu layanan server", b: "Waktu rata-rata item dalam sistem (W)", c: "Jumlah server", d: "Ukuran antrian" },
            answer: "b"
        },
        {
            question: "9.  Rata-rata yang paling tepat untuk variabel berbasis waktu seperti waktu eksekusi adalah...",
            options: { a: "Harmonic Mean", b: "Geometric Mean", c: "Arithmetic Mean", d: "Median" },
            answer: "c"
        },
        {
            question: "10.  Untuk variabel berbasis laju (rate) seperti MIPS, rata-rata yang lebih disukai adalah...",
            options: { a: "Arithmetic Mean", b: "Harmonic Mean", c: "Geometric Mean", d: "Modus" },
            answer: "b"
        },
        {
            question: "11.  Konsorsium industri yang mendefinisikan benchmark untuk evaluasi sistem adalah...",
            options: { a: "IEEE", b: "ISO", c: "SPEC", d: "ACM" },
            answer: "c"
        },
        {
            question: "12.  Dalam terminologi SPEC, sistem yang digunakan untuk menetapkan kinerja dasar disebut...",
            options: { a: "System under test", b: "Reference machine", c: "Base system", d: "Peak machine" },
            answer: "b"
        },
        {
            question: "13.  Metrik SPEC yang mengukur kemampuan komputer menyelesaikan satu tugas adalah...",
            options: { a: "Rate metric", b: "Base metric", c: "Peak metric", d: "Speed metric" },
            answer: "d"
        },
        {
            question: "14.  Metrik SPEC yang mengukur berapa banyak tugas yang dapat diselesaikan (throughput) adalah...",
            options: { a: "Speed metric", b: "Rate metric", c: "Base metric", d: "Latency metric" },
            answer: "b"
        },
        {
            question: "15.  Manakah yang BUKAN karakteristik yang diinginkan dari sebuah benchmark?",
            options: { a: "Ditulis dalam bahasa tingkat tinggi", b: "Dapat diukur dengan mudah", c: "Mewakili jenis pemrograman tertentu", d: "Hanya berjalan di satu arsitektur" },
            answer: "d"
        }
    ];
