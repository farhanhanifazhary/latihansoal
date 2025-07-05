const quizData = [
        {
            question: "1. Manakah dari berikut ini yang merupakan salah satu dari empat fungsi dasar yang dapat dilakukan komputer?",
            options: { a: "Data Display", b: "Data Compression", c: "Data Movement", d: "Data Creation" },
            answer: "c"
        },
        {
            question: "2. Apa komponen struktural utama CPU yang melakukan fungsi pemrosesan data komputer?",
            options: { a: "Control Unit", b: "Registers", c: "Arithmetic and Logic Unit (ALU)", d: "CPU Interconnection" },
            answer: "c"
        },
        {
            question: "3. Komputer generasi pertama menggunakan teknologi apa untuk elemen logika digital dan memori?",
            options: { a: "Transistors", b: "Integrated Circuits", c: "Vacuum Tubes", d: "Microprocessors" },
            answer: "c"
        },
        {
            question: "4. Konsep fundamental di balik desain komputer IAS, yang diatribusikan kepada John von Neumann, adalah...",
            options: { a: "Pipelining", b: "Stored Program Concept", c: "Multitasking", d: "Cache Memory" },
            answer: "b"
        },
        {
            question: "5. Teknologi apa yang menandai dimulainya komputer generasi kedua?",
            options: { a: "Vacuum Tubes", b: "Transistors", c: "VLSI", d: "Semiconductor Memory" },
            answer: "b"
        },
        {
            question: "6. Kapan sirkuit terpadu (integrated circuit) ditemukan, yang mengarah pada komputer generasi ketiga?",
            options: { a: "1947", b: "1958", c: "1964", d: "1971" },
            answer: "b"
        },
        {
            question: "7. Manakah dari berikut ini yang BUKAN merupakan salah satu dari empat komponen struktural utama komputer?",
            options: { a: "CPU", b: "Main Memory", c: "Operating System", d: "I/O" },
            answer: "c"
        },
        {
            question: "8. Apa fungsi dari 'Control Unit' di dalam CPU?",
            options: { a: "Melakukan perhitungan matematika", b: "Menyimpan data sementara", c: "Mengontrol operasi CPU dan komputer", d: "Memindahkan data ke perangkat eksternal" },
            answer: "c"
        },
        {
            question: "9. Transistor ditemukan di laboratorium mana pada tahun 1947?",
            options: { a: "IBM Research", b: "Xerox PARC", c: "Bell Labs", d: "Intel Labs" },
            answer: "c"
        },
        {
            question: "10. Dua anggota paling penting dari komputer generasi ketiga adalah IBM System/360 dan...",
            options: { a: "Apple Macintosh", b: "Intel 4004", c: "DEC PDP-8", d: "IAS Computer" },
            answer: "c"
        },
        {
            question: "11. Apa chip pertama yang dikembangkan Intel pada tahun 1971 yang berisi semua komponen CPU dalam satu chip?",
            options: { a: "8008", b: "8080", c: "4004", d: "Pentium" },
            answer: "c"
        },
        {
            question: "12. Arsitektur IBM System/370 yang diperkenalkan pada tahun 1970 memungkinkan pelanggan untuk...",
            options: { a: "Menjalankan software dari vendor yang berbeda", b: "Upgrade ke model yang lebih cepat tanpa meninggalkan software asli", c: "Menggunakan sistem operasi open-source", d: "Menghubungkan ke internet dengan kecepatan tinggi" },
            answer: "b"
        },
        {
            question: "13. Dalam konteks struktur dan fungsi, 'Structure' mengacu pada...",
            options: { a: "Operasi komponen individu", b: "Cara komponen berhubungan satu sama lain", c: "Tujuan keseluruhan dari sistem", d: "Kecepatan pemrosesan sistem" },
            answer: "b"
        },
        {
            question: "14. Memindahkan data ke atau dari perangkat remote melalui jarak yang jauh disebut...",
            options: { a: "Input-Output (I/O)", b: "Data Processing", c: "Data Communications", d: "Data Storage" },
            answer: "c"
        },
        {
            question: "15. Apa komponen di dalam CPU yang menyediakan penyimpanan internal?",
            options: { a: "ALU", b: "Control Unit", c: "Registers", d: "CPU Interconnection" },
            answer: "c"
        },
        {
            question: "16. Komputer transistorized sepenuhnya baru tersedia secara komersial pada...",
            options: { a: "Akhir 1940-an", b: "Awal 1950-an", c: "Akhir 1950-an", d: "Awal 1960-an" },
            answer: "c"
        },
        {
            question: "17. Apa keuntungan utama dari transistor dibandingkan tabung vakum?",
            options: { a: "Lebih besar dan lebih kuat", b: "Menghasilkan lebih banyak panas", c: "Lebih kecil, lebih murah, dan lebih dingin", d: "Hanya dapat digunakan untuk penyimpanan" },
            answer: "c"
        },
        {
            question: "18. Apa kepanjangan dari VLSI?",
            options: { a: "Very Long Scale Integration", b: "Very Large System Integration", c: "Very Large Scale Integration", d: "Variable Large Scale Integration" },
            answer: "c"
        },
        {
            question: "19. Intel 8080, yang dikembangkan pada tahun 1974, dianggap sebagai...",
            options: { a: "Mikroprosesor 4-bit pertama", b: "Mikroprosesor tujuan umum (general purpose) pertama", c: "CPU multi-core pertama", d: "Prosesor RISC pertama" },
            answer: "b"
        },
        {
            question: "20. Arsitektur Intel x86 adalah contoh dari jenis desain prosesor apa?",
            options: { a: "RISC (Reduced Instruction Set Computer)", b: "CISC (Complex Instruction Set Computer)", c: "SPARC (Scalable Processor Architecture)", d: "ARM (Advanced RISC Machine)" },
            answer: "b"
        },
        {
            question: "21. Apa tujuan dari Cache Memory?",
            options: { a: "Menyimpan semua program secara permanen", b: "Memperlambat akses memori untuk akurasi", c: "Mempercepat akses memori dengan menyimpan data yang mungkin akan segera digunakan", d: "Menghubungkan CPU ke perangkat I/O" },
            answer: "c"
        },
        {
            question: "22. Dalam sistem dengan cache multi-level, level cache mana yang paling dekat dengan core prosesor?",
            options: { a: "L1", b: "L2", c: "L3", d: "Semua level berjarak sama" },
            answer: "a"
        },
        {
            question: "23. Apa yang dimaksud dengan 'Embedded System'?",
            options: { a: "Komputer mainframe besar", b: "Sistem operasi desktop", c: "Penggunaan elektronik dan software di dalam sebuah produk", d: "Jaringan server global" },
            answer: "c"
        },
        {
            question: "24. Arsitektur ARM adalah contoh dari jenis desain prosesor apa?",
            options: { a: "CISC", b: "RISC", c: "x86", d: "Z80" },
            answer: "b"
        },
        {
            question: "25. 'Internet of Things' (IoT) utamanya didorong oleh jenis perangkat apa?",
            options: { a: "Server berkinerja tinggi", b: "PC gaming", c: "Perangkat yang tertanam secara mendalam (deeply embedded devices)", d: "Mainframe" },
            answer: "c"
        },
        {
            question: "26. Menurut definisi NIST, 'Cloud Computing' adalah model untuk memungkinkan akses jaringan on-demand yang bersifat...",
            options: { a: "Terbatas dan terjadwal", b: "Lokal dan pribadi", c: "Ubiquitous dan nyaman", d: "Offline dan aman" },
            answer: "c"
        },
        {
            question: "27. Dalam CPU multicore, apa yang disebut 'core'?",
            options: { a: "Seluruh chip fisik silikon", b: "Unit pemrosesan individual pada chip prosesor", c: "Unit manajemen memori", d: "Konektor daya" },
            answer: "b"
        },
        {
            question: "28. Manakah dari berikut ini yang merupakan karakteristik dari 'deeply embedded system'?",
            options: { a: "Dapat diprogram oleh pengguna akhir", b: "Memiliki antarmuka pengguna yang kompleks", c: "Menggunakan mikroprosesor", d: "Memiliki batasan sumber daya yang ekstrem" },
            answer: "d"
        },
        {
            question: "29. Apa perbedaan utama antara prosesor aplikasi (application processor) dan prosesor khusus (dedicated processor)?",
            options: { a: "Prosesor aplikasi lebih lambat", b: "Prosesor khusus dapat menjalankan banyak aplikasi kompleks", c: "Prosesor aplikasi bersifat serba guna, sedangkan prosesor khusus didedikasikan untuk tugas tertentu", d: "Tidak ada perbedaan" },
            answer: "c"
        },
        {
            question: "30. Keluarga komputer terencana pertama di industri adalah...",
            options: { a: "DEC PDP-8", b: "Apple II", c: "Intel x86 Series", d: "IBM System/360" },
            answer: "d"
        },
        {
            question: "31. Apa yang dimaksud dengan 'Function' dalam konteks Arsitektur Komputer?",
            options: { a: "Bagaimana komponen terhubung", b: "Operasi komponen individual sebagai bagian dari struktur", c: "Bentuk fisik komputer", d: "Jumlah transistor pada sebuah chip" },
            answer: "b"
        },
        {
            question: "32. Generasi penyebaran keempat yang biasanya dianggap sebagai IoT adalah...",
            options: { a: "Teknologi Informasi (IT)", b: "Teknologi Operasional (OT)", c: "Teknologi Pribadi", d: "Teknologi Sensor/Aktor" },
            answer: "d"
        },
        {
            question: "33. Mana yang BUKAN komponen struktural utama dari CPU?",
            options: { a: "Control Unit", b: "ALU", c: "Registers", d: "Main Memory" },
            answer: "d"
        },
        {
            question: "34. Komputer IAS selesai dibuat pada tahun berapa?",
            options: { a: "1945", b: "1947", c: "1952", d: "1958" },
            answer: "c"
        },
        {
            question: "35. Penggunaan bahasa pemrograman tingkat tinggi (high-level) diperkenalkan pada generasi komputer ke...",
            options: { a: "Satu", b: "Dua", c: "Tiga", d: "Empat" },
            answer: "b"
        },
        {
            question: "36. Sebuah 'processor' didefinisikan sebagai...",
            options: { a: "Sebuah unit pemrosesan tunggal", b: "Bagian fisik silikon yang berisi satu atau lebih core", c: "Sebuah program perangkat lunak", d: "Memori cache level 1" },
            answer: "b"
        },
        {
            question: "37. 'Cloud Storage' adalah bagian dari Cloud Computing yang secara khusus berurusan dengan...",
            options: { a: "Penyimpanan dan aplikasi database yang di-host dari jarak jauh", b: "Keamanan jaringan", c: "Kecepatan pemrosesan", d: "Perangkat lunak sistem operasi" },
            answer: "a"
        },
        {
            question: "38. Sistem tertanam yang perilakunya sulit diamati oleh programmer dan pengguna disebut...",
            options: { a: "Application System", b: "General-Purpose System", c: "Deeply Embedded System", d: "Cloud System" },
            answer: "c"
        },
        {
            question: "39. Mana dari pernyataan berikut yang benar tentang cache memory?",
            options: { a: "Lebih besar dan lebih lambat dari memori utama", b: "Digunakan untuk penyimpanan jangka panjang", c: "Lebih kecil dan lebih cepat dari memori utama", d: "Hanya ditemukan di komputer generasi pertama" },
            answer: "c"
        },
        {
            question: "40. Apa yang dimaksud dengan komponen 'diskrit'?",
            options: { a: "Sirkuit terpadu", b: "Transistor tunggal yang mandiri", c: "Sebuah mikroprosesor utuh", d: "Sebuah modul memori" },
            answer: "b"
        },
        {
            question: "41. Apa keunggulan dari arsitektur keluarga komputer seperti IBM System/360?",
            options: { a: "Setiap model memerlukan perangkat lunak yang sama sekali baru", b: "Program yang ditulis untuk satu model dapat dijalankan pada model lain dalam seri tersebut", c: "Mereka hanya mendukung satu jenis periferal", d: "Mereka tidak dapat di-upgrade" },
            answer: "b"
        },
        {
            question: "42. Sistem tertanam sering kali memiliki 'real-time constraints' karena kebutuhan untuk...",
            options: { a: "Menjalankan game dengan grafis tinggi", b: "Berinteraksi dengan lingkungan", c: "Terhubung ke internet", d: "Menyimpan file besar" },
            answer: "b"
        },
        {
            question: "43. Prosesor apa yang didefinisikan oleh kemampuannya untuk menjalankan sistem operasi yang kompleks?",
            options: { a: "Dedicated Processor", b: "Microcontroller", c: "Application Processor", d: "Signal Processor" },
            answer: "c"
        },
        {
            question: "44. Komponen apa yang menyediakan komunikasi antara CPU, memori utama, dan I/O?",
            options: { a: "Control Unit", b: "ALU", c: "System Interconnection", d: "Cache Memory" },
            answer: "c"
        },
        {
            question: "45. Kapan IBM mengumumkan System/360?",
            options: { a: "1958", b: "1964", c: "1970", d: "1974" },
            answer: "b"
        },
        {
            question: "46. Sistem hierarkis penting untuk desain sistem yang kompleks karena...",
            options: { a: "Membuat sistem lebih mahal", b: "Memungkinkan desainer untuk fokus pada satu level pada satu waktu", c: "Memperlambat kinerja sistem", d: "Menghilangkan kebutuhan akan unit kontrol" },
            answer: "b"
        },
        {
            question: "47. Intel 8008 adalah mikroprosesor... pertama.",
            options: { a: "4-bit", b: "8-bit", c: "16-bit", d: "32-bit" },
            answer: "b"
        },
        {
            question: "48. Smartphone adalah contoh dari sistem tertanam yang menggunakan...",
            options: { a: "Dedicated Processor", b: "Application Processor", c: "Vacuum Tube", d: "Transistor Diskrit" },
            answer: "b"
        },
        {
            question: "49. Penyimpanan data jangka pendek dan jangka panjang adalah bagian dari fungsi komputer yang mana?",
            options: { a: "Data Processing", b: "Data Storage", c: "Data Movement", d: "Control" },
            answer: "b"
        },
        {
            question: "50. 'Deeply embedded systems' lebih cenderung menggunakan... daripada mikroprosesor.",
            options: { a: "CPU multi-core", b: "Supercomputer", c: "Microcontroller", d: "GPU" },
            answer: "c"
        }
    ];