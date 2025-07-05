const quizData = [
        {
            question: "1. Manakah dari berikut ini yang BUKAN merupakan aplikasi desktop yang membutuhkan kekuatan prosesor modern?",
            options: { a: "Image processing", b: "3D rendering", c: "Text editing", d: "Videoconferencing" },
            answer: "c"
        },
        {
            question: "2. Teknik apa yang digunakan untuk mengompensasi ketidaksesuaian antara kemampuan berbagai komponen komputer?",
            options: { a: "Pipelining", b: "Performance Balance", c: "Speculative Execution", d: "Branch Prediction" },
            answer: "b"
        },
        {
            question: "3. Peningkatan kecepatan perangkat keras prosesor secara fundamental disebabkan oleh...",
            options: { a: "Peningkatan ukuran cache", b: "Pengecilan ukuran gerbang logika (logic gate)", c: "Peningkatan jumlah core", d: "Penggunaan bahasa pemrograman baru" },
            answer: "b"
        },
        {
            question: "4. Apa masalah utama yang muncul seiring dengan peningkatan kepadatan logika dan kecepatan clock?",
            options: { a: "Ukuran fisik prosesor", b: "Disipasi panas (heat dissipation)", c: "Kompatibilitas perangkat lunak", d: "Berat komputer" },
            answer: "b"
        },
        {
            question: "5. Apa yang dimaksud dengan RC delay dalam konteks masalah kecepatan clock?",
            options: { a: "Penundaan karena permintaan remote control", b: "Penundaan karena resistansi dan kapasitansi kabel interkoneksi", c: "Penundaan karena siklus refresh cache", d: "Penundaan karena kecepatan RAM" },
            answer: "b"
        },
        {
            question: "6. Strategi yang melibatkan kumpulan prosesor serba guna yang homogen pada satu chip disebut...",
            options: { a: "GPU", b: "ASIC", c: "FPGA", d: "Multicore dan MIC" },
            answer: "d"
        },
        {
            question: "7. Apa fungsi utama dari GPU (Graphics Processing Unit)?",
            options: { a: "Menjalankan sistem operasi", b: "Melakukan operasi paralel pada data grafis", c: "Mengelola koneksi jaringan", d: "Memeriksa kesalahan memori" },
            answer: "b"
        },
        {
            question: "8. Hukum Amdahl berkaitan dengan...",
            options: { a: "Potensi peningkatan kecepatan program menggunakan banyak prosesor", b: "Jumlah panas yang dihasilkan oleh sebuah chip", c: "Kapasitas maksimum hard drive", d: "Tingkat kesalahan dalam transmisi data" },
            answer: "a"
        },
        {
            question: "9. Menurut Hukum Amdahl, untuk mendapatkan keuntungan dari pemrosesan paralel, perangkat lunak harus...",
            options: { a: "Ditulis dalam bahasa assembly", b: "Disesuaikan dengan lingkungan eksekusi yang sangat paralel", c: "Berjalan hanya pada satu core", d: "Menghindari penggunaan floating point" },
            answer: "b"
        },
        {
            question: "10. Hukum Little (Little's Law) dapat diterapkan pada sistem yang berada dalam keadaan...",
            options: { a: "Mati (turned off)", b: "Kacau (chaotic state)", c: "Stabil secara statistik (statistically in steady state)", d: "Transisi (transient state)" },
            answer: "c"
        },
        {
            question: "11. Rata-rata hitung (Arithmetic Mean) adalah ukuran yang tepat jika...",
            options: { a: "Jumlah semua pengukuran adalah nilai yang bermakna", b: "Hanya nilai maksimum yang penting", c: "Nilai-nilai tersebut adalah rasio atau rate", d: "Kita ingin menekan dampak nilai ekstrem" },
            answer: "a"
        },
        {
            question: "12. Untuk membandingkan kinerja waktu eksekusi beberapa sistem, jenis rata-rata mana yang merupakan kandidat yang baik?",
            options: { a: "Harmonic Mean", b: "Geometric Mean", c: "Median", d: "Arithmetic Mean" },
            answer: "d"
        },
        {
            question: "13. Rata-rata Harmonik (Harmonic Mean) adalah pilihan yang lebih disukai daripada Rata-rata Aritmatika untuk variabel berbasis...",
            options: { a: "Waktu (time)", b: "Laju (rate)", c: "Kapasitas (capacity)", d: "Jumlah (count)" },
            answer: "b"
        },
        {
            question: "14. Manakah dari berikut ini yang BUKAN merupakan karakteristik yang diinginkan dari sebuah program benchmark?",
            options: { a: "Ditulis dalam bahasa tingkat tinggi", b: "Mewakili domain pemrograman tertentu", c: "Dapat diukur dengan mudah", d: "Hanya berjalan pada satu jenis arsitektur" },
            answer: "d"
        },
        {
            question: "15. Apa itu SPEC (System Performance Evaluation Corporation)?",
            options: { a: "Produsen perangkat keras komputer", b: "Sebuah sistem operasi", c: "Konsorsium industri yang mendefinisikan suite benchmark", d: "Sebuah standar jaringan" },
            answer: "c"
        },
        {
            question: "16. Suite benchmark SPEC CPU2006 paling sesuai untuk mengukur kinerja aplikasi yang...",
            options: { a: "Menghabiskan sebagian besar waktunya melakukan I/O", b: "Menghabiskan sebagian besar waktunya melakukan komputasi", c: "Membutuhkan banyak interaksi pengguna", d: "Berjalan di perangkat seluler" },
            answer: "b"
        },
        {
            question: "17. Dalam dokumentasi SPEC, apa yang dimaksud dengan 'Reference Machine'?",
            options: { a: "Sistem yang sedang diuji", b: "Sistem tercepat yang pernah diuji", c: "Sistem yang digunakan untuk menetapkan kinerja dasar (baseline)", d: "Kompilator yang digunakan untuk benchmark" },
            answer: "c"
        },
        {
            question: "18. Metrik SPEC yang mengukur berapa banyak tugas yang dapat diselesaikan komputer dalam waktu tertentu disebut...",
            options: { a: "Speed metric", b: "Peak metric", c: "Base metric", d: "Rate metric" },
            answer: "d"
        },
        {
            question: "19. Metrik SPEC mana yang memiliki pedoman ketat untuk kompilasi dan wajib untuk semua hasil yang dilaporkan?",
            options: { a: "Peak metric", b: "Base metric", c: "Speed metric", d: "Rate metric" },
            answer: "b"
        },
        {
            question: "20. Mengapa kecepatan memori menjadi masalah dalam performa komputer?",
            options: { a: "Kecepatan memori selalu lebih cepat dari prosesor", b: "Kecepatan memori tertinggal dari kecepatan prosesor", c: "Memori tidak mempengaruhi performa", d: "Memori dan prosesor memiliki kecepatan yang sama" },
            answer: "b"
        },
        {
            question: "21. Meningkatkan ukuran dan kecepatan cache adalah salah satu cara untuk...",
            options: { a: "Memperlambat prosesor", b: "Meningkatkan panas yang dihasilkan", c: "Meningkatkan kecepatan efektif eksekusi instruksi", d: "Mengurangi jumlah core" },
            answer: "c"
        },
        {
            question: "22. Apa itu 'Many Integrated Core' (MIC)?",
            options: { a: "Satu core yang sangat besar", b: "Sebuah chip dengan banyak prosesor serba guna", c: "Sebuah jenis kartu grafis", d: "Sebuah algoritma penjadwalan" },
            answer: "b"
        },
        {
            question: "23. Apa nama lain untuk 'rate metric' dalam pengukuran kinerja?",
            options: { a: "Latency", b: "Delay", c: "Throughput", d: "Jitter" },
            answer: "c"
        },
        {
            question: "24. Apa tujuan dari metrik 'peak' dalam benchmark SPEC?",
            options: { a: "Untuk menunjukkan kinerja terburuk", b: "Untuk memungkinkan pengguna mengoptimalkan kinerja sistem melalui kompilator", c: "Untuk memberikan hasil yang tidak dapat diubah", d: "Untuk mengukur konsumsi daya" },
            answer: "b"
        },
        {
            question: "25. Hukum Amdahl menunjukkan bahwa ada batasan untuk peningkatan kecepatan yang bisa didapat dari...",
            options: { a: "Meningkatkan kecepatan clock", b: "Menambah jumlah core (paralelisasi)", c: "Menambah kapasitas hard disk", d: "Menggunakan monitor yang lebih besar" },
            answer: "b"
        },
        {
            question: "26. Menurut presentasi, laptop masa kini memiliki kekuatan komputasi yang setara dengan mainframe IBM dari...",
            options: { a: "1-2 tahun yang lalu", b: "5-7 tahun yang lalu", c: "10-15 tahun yang lalu", d: "20-25 tahun yang lalu" },
            answer: "c"
        },
        {
            question: "27. Ketika komponen pada sebuah chip berkurang ukurannya, interkoneksi kabel menjadi lebih tipis, yang menyebabkan...",
            options: { a: "Penurunan resistansi", b: "Peningkatan resistansi", c: "Tidak ada perubahan pada resistansi", d: "Penurunan kapasitansi" },
            answer: "b"
        },
        {
            question: "28. 'Speed metric' dalam benchmark SPEC digunakan untuk membandingkan kemampuan komputer dalam...",
            options: { a: "Menyelesaikan banyak tugas secara bersamaan", b: "Menyelesaikan satu tugas (single task)", c: "Mengelola konsumsi daya", d: "Menjalankan aplikasi I/O-intensive" },
            answer: "b"
        },
        {
            question: "29. Berapa banyak program floating-point yang termasuk dalam suite SPEC CPU2006?",
            options: { a: "12", b: "17", c: "29", d: "3" },
            answer: "b"
        },
        {
            question: "30. Rata-rata Geometrik (Geometric Mean) digunakan ketika...",
            options: { a: "Waktu eksekusi yang dijumlahkan adalah yang terpenting", b: "Laju (rate) yang dijumlahkan adalah yang terpenting", c: "Hasilnya adalah rasio dan kita ingin menormalkannya", d: "Semua nilai pengukuran sama" },
            answer: "c"
        },
        {
            question: "31. Penggunaan GPU sebagai prosesor vektor untuk komputasi berulang dikenal sebagai...",
            options: { a: "GPGPU (General-Purpose computing on GPU)", b: "CPUGPU", c: "VGPU", d: "SGPU" },
            answer: "a"
        },
        {
            question: "32. Dalam Hukum Little (L = λW), L merepresentasikan...",
            options: { a: "Tingkat kedatangan rata-rata", b: "Waktu rata-rata yang dihabiskan dalam sistem", c: "Jumlah item rata-rata dalam sistem antrian", d: "Waktu idle server" },
            answer: "c"
        },
        {
            question: "33. Manakah yang bukan merupakan teknik yang disebutkan untuk meningkatkan kecepatan mikroprosesor?",
            options: { a: "Pipelining", b: "Branch prediction", c: "Data compression", d: "Speculative execution" },
            answer: "c"
        },
        {
            question: "34. Peningkatan paralelisme adalah contoh dari perubahan pada...",
            options: { a: "Kecepatan clock saja", b: "Ukuran cache saja", c: "Organisasi dan arsitektur prosesor", d: "Bahan semikonduktor" },
            answer: "c"
        },
        {
            question: "35. Saat kabel-kabel pada chip menjadi lebih dekat, efek apa yang terjadi?",
            options: { a: "Kapasitansi menurun", b: "Kapasitansi meningkat", c: "Resistansi menurun", d: "Tidak ada efek" },
            answer: "b"
        },
        {
            question: "36. 'Benchmark suite' adalah...",
            options: { a: "Satu program tunggal", b: "Kumpulan program yang didefinisikan dalam bahasa tingkat tinggi", c: "Perangkat keras untuk pengujian", d: "Sebuah laporan kinerja" },
            answer: "b"
        },
        {
            question: "37. Berapa banyak program integer yang termasuk dalam suite SPEC CPU2006?",
            options: { a: "12", b: "17", c: "29", d: "3" },
            answer: "a"
        },
        {
            question: "38. 'System under test' dalam dokumentasi SPEC mengacu pada...",
            options: { a: "Sistem referensi", b: "Sistem yang akan dievaluasi", c: "Program benchmark itu sendiri", d: "Kompilator yang digunakan" },
            answer: "b"
        },
        {
            question: "39. Hukum Little mengasumsikan bahwa sistem antrian...",
            options: { a: "Memiliki kebocoran (leakage)", b: "Tidak memiliki kebocoran (no leakage)", c: "Selalu kosong", d: "Selalu penuh" },
            answer: "b"
        },
        {
            question: "40. Mengapa bisnis sangat bergantung pada server yang kuat saat ini?",
            options: { a: "Untuk menjalankan game", b: "Untuk menangani pemrosesan transaksi dan database", c: "Untuk menggantikan laptop", d: "Untuk mengurangi biaya listrik" },
            answer: "b"
        },
        {
            question: "41. Mendedikasikan sebagian dari chip prosesor untuk cache menyebabkan...",
            options: { a: "Waktu akses cache meningkat secara signifikan", b: "Waktu akses cache menurun secara signifikan", c: "Ukuran cache menurun", d: "Tidak ada perubahan pada waktu akses" },
            answer: "b"
        },
        {
            question: "42. 'Power density' pada sebuah chip meningkat seiring dengan...",
            options: { a: "Penurunan kepadatan logika dan kecepatan clock", b: "Peningkatan kepadatan logika dan kecepatan clock", c: "Peningkatan ukuran chip", d: "Penurunan jumlah transistor" },
            answer: "b"
        },
        {
            question: "43. Gene Amdahl mengilustrasikan masalah yang dihadapi industri dalam pengembangan...",
            options: { a: "Mesin single-core", b: "Mesin multi-core", c: "Hard drive", d: "Sistem operasi" },
            answer: "b"
        },
        {
            question: "44. Jika total waktu eksekusi sebuah program berlipat ganda, apa yang terjadi pada Rata-rata Aritmatika (AM) dari waktu tersebut?",
            options: { a: "Tetap sama", b: "Menjadi setengahnya", c: "Ikut berlipat ganda", d: "Menjadi empat kali lipat" },
            answer: "c"
        },
        {
            question: "45. Mengapa sebuah benchmark program sebaiknya ditulis dalam bahasa tingkat tinggi?",
            options: { a: "Agar lebih cepat dieksekusi", b: "Agar portabel di berbagai mesin", c: "Agar lebih sulit diukur", d: "Agar hanya berjalan pada satu sistem" },
            answer: "b"
        },
        {
            question: "46. SPEC CPU2006 adalah generasi ke... dari suite prosesor-intensif dari SPEC.",
            options: { a: "Tiga", b: "Empat", c: "Lima", d: "Enam" },
            answer: "c"
        },
        {
            question: "47. Metrik mana yang memungkinkan sistem yang diuji untuk menjalankan tugas secara bersamaan untuk memanfaatkan beberapa prosesor?",
            options: { a: "Speed metric", b: "Rate metric", c: "Base metric", d: "Cost metric" },
            answer: "b"
        },
        {
            question: "48. Penyedia layanan cloud menggunakan server berkinerja tinggi untuk...",
            options: { a: "Aplikasi volume rendah dan transaksi rendah", b: "Aplikasi volume tinggi dan transaksi tinggi", c: "Hanya untuk penyimpanan internal", d: "Menjalankan aplikasi desktop tunggal" },
            answer: "b"
        },
        {
            question: "49. Mengurangi waktu propagasi sinyal adalah salah satu manfaat dari...",
            options: { a: "Memperbesar ukuran gerbang logika", b: "Meningkatkan jarak antar gerbang logika", c: "Mengecilkan dan memadatkan gerbang logika", d: "Mengurangi kecepatan clock" },
            answer: "c"
        },
        {
            question: "50. Apa kesimpulan utama dari bagian 'Performance Balance'?",
            options: { a: "Semua komponen komputer memiliki kecepatan yang sama", b: "Kecepatan prosesor adalah satu-satunya hal yang penting", c: "Arsitektur harus disesuaikan untuk mengimbangi perbedaan kecepatan komponen", d: "Memori harus selalu lebih cepat dari prosesor" },
            answer: "c"
        }
    ];