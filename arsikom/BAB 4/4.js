const quizData = [
        {
            question: "1. Manakah dari berikut ini yang dianggap sebagai memori internal?",
            options: { a: "Hard Disk", b: "SSD", c: "Cache", d: "Flash Drive" },
            answer: "c"
        },
        {
            question: "2. Kapasitas memori biasanya dinyatakan dalam satuan...",
            options: { a: "Hertz (Hz)", b: "Bytes", c: "Bits per second (bps)", d: "Volt" },
            answer: "b"
        },
        {
            question: "3. Untuk memori internal, unit transfer sama dengan...",
            options: { a: "Ukuran satu file", b: "Jumlah baris listrik ke dan dari modul memori", c: "Kecepatan prosesor", d: "Kapasitas total memori" },
            answer: "b"
        },
        {
            question: "4. Memori yang informasinya hilang saat daya listrik dimatikan disebut...",
            options: { a: "Nonvolatile", b: "Nonerasable", c: "Volatile", d: "Read-only" },
            answer: "c"
        },
        {
            question: "5. Memori yang informasinya tetap ada tanpa daya listrik disebut...",
            options: { a: "Volatile", b: "Random Access", c: "Volatile", d: "Nonvolatile" },
            answer: "d"
        },
        {
            question: "6. Memori semikonduktor yang tidak dapat diubah isinya kecuali dengan merusak unit penyimpanannya dikenal sebagai...",
            options: { a: "RAM", b: "DRAM", c: "ROM (Read-Only Memory)", d: "Cache" },
            answer: "c"
        },
        {
            question: "7. Manakah dari berikut ini yang BUKAN merupakan salah satu dari tiga pertanyaan kendala desain memori komputer?",
            options: { a: "Berapa banyak (how much)?", b: "Seberapa cepat (how fast)?", c: "Seberapa mahal (how expensive)?", d: "Seberapa besar ukurannya (how big)?" },
            answer: "d"
        },
        {
            question: "8. Hubungan trade-off dalam memori adalah: semakin cepat waktu akses, maka...",
            options: { a: "Semakin kecil biaya per bit", b: "Semakin besar biaya per bit", c: "Semakin besar kapasitasnya", d: "Semakin lambat waktu aksesnya" },
            answer: "b"
        },
        {
            question: "9. Solusi untuk mengatasi 'dilema memori' adalah dengan menggunakan...",
            options: { a: "Satu jenis memori saja", b: "Memori yang sangat mahal", c: "Hirarki memori", d: "Memori eksternal saja" },
            answer: "c"
        },
        {
            question: "10. Memori eksternal yang non-volatile juga disebut sebagai...",
            options: { a: "Memori primer", b: "Register", c: "Memori sekunder atau auxiliary", d: "Cache L1" },
            answer: "c"
        },
        {
            question: "11. Sebagian dari memori utama yang digunakan sebagai buffer untuk menampung data sementara yang akan dibaca dari disk disebut...",
            options: { a: "Register file", b: "System buffer", c: "Disk cache", d: "Virtual memory" },
            answer: "c"
        },
        {
            question: "12. Apa yang dimaksud dengan 'virtual memory'?",
            options: { a: "Memori fisik yang tersedia", b: "Fasilitas yang memungkinkan program mengalamati memori secara logis", c: "Jenis cache khusus", d: "Memori yang hanya bisa dibaca" },
            answer: "b"
        },
        {
            question: "13. Apa tugas dari Memory Management Unit (MMU)?",
            options: { a: "Mengatur kecepatan clock", b: "Menerjemahkan alamat virtual menjadi alamat fisik", c: "Mengelola daya ke memori", d: "Membersihkan cache secara periodik" },
            answer: "b"
        },
        {
            question: "14. Algoritma yang diperlukan untuk memetakan blok memori utama ke baris cache disebut...",
            options: { a: "Replacement algorithm", b: "Write policy", c: "Mapping function", d: "Cache controller" },
            answer: "c"
        },
        {
            question: "15. Dalam 'Direct Mapping', sebuah blok memori utama dapat dipetakan ke...",
            options: { a: "Baris cache mana pun", b: "Hanya satu baris cache tertentu", c: "Dua baris cache yang berbeda", d: "Semua baris dalam satu set" },
            answer: "b"
        },
        {
            question: "16. Apa kelemahan utama dari Direct Mapping?",
            options: { a: "Sirkuitnya sangat kompleks", b: "Waktu aksesnya lambat", c: "Dapat terjadi 'conflict miss' meskipun ada baris cache kosong", d: "Membutuhkan daya yang sangat besar" },
            answer: "c"
        },
        {
            question: "17. Cache yang diusulkan untuk mengurangi 'conflict miss' dari cache direct-mapped disebut...",
            options: { a: "Primary cache", b: "L2 cache", c: "Victim cache", d: "Split cache" },
            answer: "c"
        },
        {
            question: "18. Dalam 'Associative Mapping', sebuah blok memori utama dapat dipetakan ke...",
            options: { a: "Hanya satu baris cache tertentu", b: "Baris cache mana pun", c: "Hanya baris dengan nomor genap", d: "Hanya baris dalam set tertentu" },
            answer: "b"
        },
        {
            question: "19. Apa kelemahan utama dari Associative Mapping?",
            options: { a: "Sederhana untuk diimplementasikan", b: "Sangat cepat", c: "Kompleksitas sirkuit untuk memeriksa semua tag secara paralel", d: "Kapasitasnya selalu kecil" },
            answer: "c"
        },
        {
            question: "20. Teknik pemetaan yang merupakan kompromi antara kekuatan Direct dan Associative Mapping adalah...",
            options: { a: "Random Mapping", b: "Sequential Mapping", c: "Set-Associative Mapping", d: "Virtual Mapping" },
            answer: "c"
        },
        {
            question: "21. Dalam pemetaan set-associative 2-arah (2-way), sebuah blok dapat berada di...",
            options: { a: "Satu dari dua baris dalam satu set tertentu", b: "Dua set yang berbeda", c: "Baris mana pun di dalam cache", d: "Hanya satu baris yang telah ditentukan" },
            answer: "a"
        },
        {
            question: "22. Algoritma penggantian (replacement algorithm) diperlukan untuk jenis pemetaan cache yang mana?",
            options: { a: "Hanya Direct mapping", b: "Associative dan Set-Associative mapping", c: "Hanya Associative mapping", d: "Tidak ada jenis pemetaan yang memerlukannya" },
            answer: "b"
        },
        {
            question: "23. Algoritma penggantian yang paling populer dan efektif adalah...",
            options: { a: "FIFO (First-In-First-Out)", b: "LFU (Least Frequently Used)", c: "Random", d: "LRU (Least Recently Used)" },
            answer: "d"
        },
        {
            question: "24. Algoritma penggantian LRU (Least Recently Used) menggantikan blok yang...",
            options: { a: "Paling baru digunakan", b: "Paling lama berada di cache tanpa referensi", c: "Paling sering digunakan", d: "Pertama kali masuk ke cache" },
            answer: "b"
        },
        {
            question: "25. Algoritma penggantian FIFO (First-In-First-Out) menggantikan blok yang...",
            options: { a: "Paling baru digunakan", b: "Paling sedikit direferensikan", c: "Paling lama berada di cache", d: "Dipilih secara acak" },
            answer: "c"
        },
        {
            question: "26. Kebijakan tulis (write policy) apa yang melakukan operasi tulis ke memori utama dan juga ke cache secara bersamaan?",
            options: { a: "Write-back", b: "Write-through", c: "Write-around", d: "Write-once" },
            answer: "b"
        },
        {
            question: "27. Apa kerugian utama dari teknik 'write-through'?",
            options: { a: "Sirkuitnya kompleks", b: "Meminimalkan lalu lintas memori", c: "Menghasilkan lalu lintas memori yang substansial", d: "Membuat data di memori utama tidak valid" },
            answer: "c"
        },
        {
            question: "28. Kebijakan tulis yang meminimalkan penulisan ke memori dengan hanya memperbarui cache disebut...",
            options: { a: "Write-through", b: "Write-around", c: "Write-back", d: "Write-all" },
            answer: "c"
        },
        {
            question: "29. Apa konsekuensi dari kebijakan 'write-back'?",
            options: { a: "Selalu menghasilkan lalu lintas memori yang tinggi", b: "Akses oleh modul I/O bisa jadi tidak valid jika tidak melalui cache", c: "Sirkuitnya sangat sederhana", d: "Memperlambat semua operasi tulis" },
            answer: "b"
        },
        {
            question: "30. Cache yang berada pada chip yang sama dengan prosesor disebut...",
            options: { a: "External cache", b: "Off-chip cache", c: "On-chip cache", d: "Tertiary cache" },
            answer: "c"
        },
        {
            question: "31. Dalam sistem cache dua tingkat, cache internal biasanya disebut sebagai...",
            options: { a: "Level 2 (L2)", b: "Level 1 (L1)", c: "Level 3 (L3)", d: "Level 0 (L0)" },
            answer: "b"
        },
        {
            question: "32. Apa keuntungan utama dari 'split cache' (cache terpisah)?",
            options: { a: "Hanya butuh satu cache untuk dirancang", b: "Memiliki hit rate yang lebih tinggi secara keseluruhan", c: "Menghilangkan pertentangan antara unit fetch instruksi dan unit eksekusi", d: "Secara otomatis menyeimbangkan beban" },
            answer: "c"
        },
        {
            question: "33. 'Split cache' biasanya berarti memisahkan cache untuk...",
            options: { a: "Pengguna yang berbeda", b: "Aplikasi yang berbeda", c: "Instruksi dan data", d: "Baca dan tulis" },
            answer: "c"
        },
        {
            question: "34. Apa keuntungan utama dari 'unified cache' (cache terpadu)?",
            options: { a: "Menghilangkan pertentangan pipeline", b: "Menyeimbangkan beban instruksi dan data secara otomatis", c: "Memerlukan desain dua cache terpisah", d: "Lebih cepat untuk akses instruksi" },
            answer: "b"
        },
        {
            question: "35. Tren saat ini dalam desain cache adalah...",
            options: { a: "Unified cache di L1, split cache di level yang lebih tinggi", b: "Split cache di L1, unified cache di level yang lebih tinggi", c: "Hanya menggunakan unified cache", d: "Hanya menggunakan split cache" },
            answer: "b"
        },
        {
            question: "36. Memori yang mengacu pada apakah memori bersifat internal atau eksternal terhadap komputer disebut...",
            options: { a: "Kapasitas", b: "Unit Transfer", c: "Lokasi", d: "Metode Akses" },
            answer: "c"
        },
        {
            question: "37. Pengaturan fisik bit untuk membentuk kata-kata dalam memori disebut...",
            options: { a: "Kapasitas", b: "Organisasi", c: "Lokasi", d: "Performa" },
            answer: "b"
        },
        {
            question: "38. Memori permukaan magnetik (magnetic-surface) secara inheren bersifat...",
            options: { a: "Volatile", b: "Nonvolatile", c: "Sangat cepat", d: "Sangat mahal" },
            answer: "b"
        },
        {
            question: "39. Semakin besar kapasitas memori, maka...",
            options: { a: "Semakin cepat waktu aksesnya", b: "Semakin mahal biaya per bitnya", c: "Semakin lambat waktu aksesnya", d: "Semakin kecil kapasitasnya" },
            answer: "c"
        },
        {
            question: "40. Mengapa cache on-chip meningkatkan kinerja sistem secara keseluruhan?",
            options: { a: "Karena meningkatkan aktivitas bus eksternal prosesor", b: "Karena memperlambat waktu eksekusi", c: "Karena mengurangi aktivitas bus eksternal dan mempercepat eksekusi", d: "Karena membebaskan prosesor dari semua tugas" },
            answer: "c"
        },
        {
            question: "41. Victim cache biasanya berukuran...",
            options: { a: "Sangat besar, lebih dari 1024 baris", b: "Sama besar dengan L1 cache", c: "Kecil, biasanya 4 hingga 16 baris cache", d: "Tidak memiliki ukuran yang pasti" },
            answer: "c"
        },
        {
            question: "42. Algoritma penggantian LFU (Least Frequently Used) menggantikan blok yang...",
            options: { a: "Paling sering direferensikan", b: "Paling sedikit direferensikan", c: "Paling lama di cache", d: "Paling baru di cache" },
            answer: "b"
        },
        {
            question: "43. Apa yang dimaksud dengan 'hit rate'?",
            options: { a: "Frekuensi di mana data yang dicari tidak ditemukan di cache", b: "Frekuensi di mana data yang dicari ditemukan di cache", c: "Jumlah total baris dalam cache", d: "Kecepatan transfer data dari cache" },
            answer: "b"
        },
        {
            question: "44. Jika sebuah prosesor memiliki cache instruksi dan cache data yang terpisah pada level yang sama, ini adalah contoh dari...",
            options: { a: "Unified cache", b: "Split cache", c: "Victim cache", d: "L2 cache" },
            answer: "b"
        },
        {
            question: "45. Mengapa algoritma penggantian cache perlu diimplementasikan dalam perangkat keras?",
            options: { a: "Agar lebih mudah diubah oleh pengguna", b: "Untuk mencapai kecepatan tinggi", c: "Agar lebih murah", d: "Untuk mengurangi konsumsi daya" },
            answer: "b"
        },
        {
            question: "46. Ukuran tag pada Associative Mapping ditentukan oleh...",
            options: { a: "Jumlah bit word (w)", b: "Jumlah bit set (d)", c: "Jumlah bit block (s)", d: "Jumlah total bit alamat (s+w)" },
            answer: "c"
        },
        {
            question: "47. Ukuran tag pada Direct Mapping ditentukan oleh...",
            options: { a: "s", b: "r", c: "s + r", d: "s - r" },
            answer: "d"
        },
        {
            question: "48. Pada hirarki memori, semakin jauh dari prosesor, maka...",
            options: { a: "Semakin cepat, semakin kecil, semakin mahal per bit", b: "Semakin lambat, semakin besar, semakin murah per bit", c: "Semakin cepat, semakin besar, semakin murah per bit", d: "Semakin lambat, semakin kecil, semakin mahal per bit" },
            answer: "b"
        },
        {
            question: "49. Penggunaan cache multi-level akan...",
            options: { a: "Menyederhanakan semua masalah desain cache", b: "Memperumit semua masalah desain cache", c: "Tidak berpengaruh pada desain cache", d: "Menghilangkan kebutuhan akan algoritma penggantian" },
            answer: "b"
        },
        {
            question: "50. Memori eksternal dapat diakses oleh prosesor melalui...",
            options: { a: "Register", b: "Cache L1", c: "Koneksi langsung", d: "Pengontrol I/O" },
            answer: "d"
        }
    ];