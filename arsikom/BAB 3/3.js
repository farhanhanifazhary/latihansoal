const quizData = [
        {
            question: "1. Desain komputer kontemporer didasarkan pada konsep yang dikembangkan oleh siapa?",
            options: { a: "Alan Turing", b: "Charles Babbage", c: "John von Neumann", d: "Bill Gates" },
            answer: "c"
        },
        {
            question: "2. Manakah dari berikut ini yang BUKAN merupakan konsep kunci dari arsitektur von Neumann?",
            options: { a: "Data dan instruksi disimpan dalam memori read-write tunggal", b: "Memori dapat dialamatkan berdasarkan lokasi", c: "Eksekusi terjadi secara sekuensial", d: "Data dan instruksi disimpan di memori terpisah" },
            answer: "d"
        },
        {
            question: "3. Apa yang dimaksud dengan 'hardwired program'?",
            options: { a: "Sebuah program yang disimpan di hard drive", b: "Proses menghubungkan berbagai komponen dalam konfigurasi yang diinginkan", c: "Perangkat lunak yang sulit diubah", d: "Sebuah program yang ditulis dalam bahasa assembly" },
            answer: "b"
        },
        {
            question: "4. Pada awal setiap siklus instruksi, prosesor mengambil instruksi dari...",
            options: { a: "Hard disk", b: "Cache", c: "Register", d: "Memori" },
            answer: "d"
        },
        {
            question: "5. Register apa yang menyimpan alamat dari instruksi berikutnya yang akan diambil?",
            options: { a: "Instruction Register (IR)", b: "Program Counter (PC)", c: "Memory Address Register (MAR)", d: "Memory Buffer Register (MBR)" },
            answer: "b"
        },
        {
            question: "6. Setelah setiap pengambilan instruksi, prosesor akan melakukan apa pada Program Counter (PC)?",
            options: { a: "Menguranginya (decrement)", b: "Meresetnya ke nol", c: "Meningkatkannya (increment)", d: "Menyimpannya ke memori" },
            answer: "c"
        },
        {
            question: "7. Instruksi yang diambil dari memori dimuat ke dalam register mana?",
            options: { a: "Program Counter (PC)", b: "Accumulator (AC)", c: "Instruction Register (IR)", d: "Memory Address Register (MAR)" },
            answer: "c"
        },
        {
            question: "8. Manakah dari berikut ini yang BUKAN merupakan salah satu dari empat kategori aksi yang dapat dilakukan prosesor?",
            options: { a: "Processor-memory", b: "Processor-I/O", c: "Data processing", d: "User-interface" },
            answer: "d"
        },
        {
            question: "9. Manakah dari berikut ini yang merupakan contoh dari kelas interupsi 'Program'?",
            options: { a: "Timer dari prosesor", b: "Kegagalan daya", c: "Sinyal dari kontroler I/O", d: "Pembagian dengan nol (division by zero)" },
            answer: "d"
        },
        {
            question: "10. Apa tujuan utama dari mekanisme interupsi?",
            options: { a: "Untuk memperlambat prosesor", b: "Untuk mematikan komputer dengan aman", c: "Untuk meningkatkan utilisasi prosesor", d: "Untuk menghapus data dari memori" },
            answer: "c"
        },
        {
            question: "11. Operasi yang memungkinkan modul I/O untuk bertukar data langsung dengan memori tanpa melibatkan prosesor disebut...",
            options: { a: "Direct Memory Access (DMA)", b: "Programmed I/O", c: "Interrupt-driven I/O", d: "Memory-mapped I/O" },
            answer: "a"
        },
        {
            question: "12. Jalur yang menyediakan pergerakan data antar modul sistem disebut...",
            options: { a: "Address Bus", b: "Control Bus", c: "Data Bus", d: "I/O Bus" },
            answer: "c"
        },
        {
            question: "13. Apa yang menentukan berapa banyak bit yang dapat ditransfer sekaligus di data bus?",
            options: { a: "Panjang bus", b: "Lebar bus (width)", c: "Kecepatan clock", d: "Bahan pembuat bus" },
            answer: "b"
[cite_start],"instructions": "The number of lines is referred to as the width of the data bus[cite: 584]. [cite_start]The number of lines determines how many bits can be transferred at a time[cite: 585]."
        },
        {
            question: "14. Bus apa yang digunakan untuk menunjuk sumber atau tujuan data di data bus?",
            options: { a: "Data Bus", b: "Address Bus", c: "Control Bus", d: "System Bus" },
            answer: "b"
        },
        {
            question: "15. Lebar (width) dari address bus menentukan...",
            options: { a: "Kecepatan transfer data", b: "Kapasitas memori maksimum sistem", c: "Jumlah perangkat I/O yang terhubung", d: "Jenis data yang ditransfer" },
            answer: "b"
        },
        {
            question: "16. Bus apa yang digunakan untuk mengontrol akses dan penggunaan jalur data dan alamat?",
            options: { a: "Data Bus", b: "Address Bus", c: "Control Bus", d: "Utility Bus" },
            answer: "c"
        },
        {
            question: "17. Sinyal apa yang menunjukkan validitas informasi data dan alamat di bus?",
            options: { a: "Command signals", b: "Interrupt signals", c: "Timing signals", d: "Data signals" },
            answer: "c"
        },
        {
            question: "18. Struktur interkoneksi harus mendukung transfer antara I/O dan...",
            options: { a: "Hanya prosesor", b: "Hanya memori", c: "Prosesor dan Memori", d: "Hanya perangkat I/O lainnya" },
            answer: "c"
        },
        {
            question: "19. Manakah dari berikut ini yang BUKAN merupakan karakteristik dari interkoneksi point-to-point seperti QPI?",
            options: { a: "Koneksi langsung berpasangan", b: "Penggunaan sinyal kontrol sederhana seperti pada bus bersama", c: "Arsitektur protokol berlapis", d: "Transfer data dalam bentuk paket" },
            answer: "b"
        },
        {
            question: "20. QuickPath Interconnect (QPI) diperkenalkan pada tahun berapa?",
            options: { a: "2000", b: "2005", c: "2008", d: "2010" },
            answer: "c"
        },
        {
            question: "21. Pada QPI Link Layer, apa fungsi dari CRC (Cyclic Redundancy Check)?",
            options: { a: "Flow control", b: "Error control", c: "Routing", d: "Cache coherency" },
            answer: "b"
        },
        {
            question: "22. Apa itu 'flit' dalam konteks QPI Link Layer?",
            options: { a: "Unit transfer data", b: "Unit kontrol error", c: "Unit flow control", d: "Unit protokol" },
            answer: "c"
        },
        {
            question: "23. Fungsi 'flow control' pada QPI Link Layer bertujuan untuk...",
            options: { a: "Memastikan data sampai ke tujuan yang benar", b: "Mendeteksi kesalahan bit dalam transmisi", c: "Mencegah pengirim membanjiri penerima dengan data", d: "Menjaga konsistensi cache" },
            answer: "c"
        },
        {
            question: "24. Layer QPI mana yang bertanggung jawab untuk menentukan jalur yang akan dilalui sebuah paket?",
            options: { a: "Physical Layer", b: "Link Layer", c: "Routing Layer", d: "Protocol Layer" },
            answer: "c"
        },
        {
            question: "25. Fungsi cache coherency protocol pada QPI berada di layer mana?",
            options: { a: "Physical Layer", b: "Link Layer", c: "Routing Layer", d: "Protocol Layer" },
            answer: "d"
        },
        {
            question: "26. PCI Express (PCIe) adalah skema interkoneksi jenis apa?",
            options: { a: "Bus-based", b: "Point-to-point", c: "Ring", d: "Star" },
            answer: "b"
        },
        {
            question: "27. Kebutuhan utama yang mendorong pengembangan PCIe adalah...",
            options: { a: "Kapasitas tinggi untuk perangkat I/O berkecepatan tinggi", b: "Konsumsi daya yang rendah", c: "Ukuran fisik yang kecil", d: "Kompatibilitas dengan perangkat lama" },
            answer: "a"
        },
        {
            question: "28. Layer PCIe mana yang menerima permintaan baca/tulis dari perangkat lunak dan membuat paket permintaan?",
            options: { a: "Physical Layer", b: "Data Link Layer", c: "Transaction Layer (TL)", d: "Application Layer" },
            answer: "c"
        },
        {
            question: "29. Teknik di mana paket permintaan dikirim dan sumber menunggu paket balasan (completion) di PCIe disebut...",
            options: { a: "Posted transaction", b: "Split transaction", c: "Simplex transaction", d: "Broadcast transaction" },
            answer: "b"
        },
        {
            question: "30. Manakah dari berikut ini yang BUKAN merupakan salah satu dari empat ruang alamat (address spaces) yang didukung oleh PCIe Transaction Layer?",
            options: { a: "Memory", b: "I/O", c: "Security", d: "Configuration" },
            answer: "c"
        },
        {
            question: "31. Ruang alamat 'Message' pada PCIe digunakan untuk...",
            options: { a: "Mentransfer data pengguna", b: "Mengakses register konfigurasi", c: "Sinyal kontrol terkait interupsi, error, dan manajemen daya", d: "Mengakses perangkat I/O lama" },
            answer: "c"
        },
        {
            question: "32. Dalam arsitektur von Neumann, apa yang dapat disimpan dalam memori read-write tunggal?",
            options: { a: "Hanya data", b: "Hanya instruksi", c: "Data dan instruksi", d: "Hanya alamat" },
            answer: "c"
        },
        {
            question: "33. Konsep bahwa isi memori dapat dialamatkan berdasarkan lokasi, tanpa memandang jenis datanya, adalah bagian dari arsitektur...",
            options: { a: "Harvard", b: "von Neumann", c: "Stack", d: "Pipelined" },
            answer: "b"
        },
        {
            question: "34. Interupsi yang dihasilkan oleh timer internal prosesor termasuk dalam kelas...",
            options: { a: "Program", b: "Timer", c: "I/O", d: "Hardware failure" },
            answer: "b"
        },
        {
            question: "35. Bagaimana prosesor menangani interupsi saat sedang memproses interupsi lain?",
            options: { a: "Selalu mengabaikan interupsi baru", b: "Mematikan sistem", c: "Dengan menonaktifkan interupsi atau menggunakan skema prioritas", d: "Menjalankan kedua interupsi secara bersamaan" },
            answer: "c"
        },
        {
            question: "36. Lebar data bus (data bus width) adalah faktor kunci dalam menentukan...",
            options: { a: "Kapasitas memori", b: "Kinerja sistem secara keseluruhan", c: "Jumlah perangkat I/O", d: "Konsumsi daya" },
            answer: "b"
        },
        {
            question: "37. Apa keuntungan dari koneksi langsung berpasangan pada interkoneksi point-to-point?",
            options: { a: "Meningkatkan kebutuhan arbitrasi", b: "Menghilangkan kebutuhan arbitrasi", c: "Memperlambat transfer data", d: "Membatasi jumlah komponen" },
            answer: "b"
        },
        {
            question: "38. Transfer data pada QPI dilakukan dalam bentuk...",
            options: { a: "Sinyal analog", b: "Aliran bit kontinu", c: "Urutan paket (sequence of packets)", d: "Karakter tunggal" },
            answer: "c"
        },
        {
            question: "39. Berapa bit payload pesan dan berapa bit kode kontrol error (CRC) dalam sebuah flit QPI?",
            options: { a: "64-bit payload, 8-bit CRC", b: "72-bit payload, 8-bit CRC", c: "128-bit payload, 16-bit CRC", d: "32-bit payload, 4-bit CRC" },
            answer: "b"
        },
        {
            question: "40. PCI adalah bus yang populer karena bersifat...",
            options: { a: "Processor dependent", b: "Processor independent", c: "Low bandwidth", d: "Hanya untuk I/O berkecepatan rendah" },
            answer: "b"
        },
        {
            question: "41. 'Posted transactions' pada PCIe adalah transaksi yang...",
            options: { a: "Selalu mengharapkan balasan", b: "Tidak mengharapkan balasan", c: "Hanya untuk membaca data", d: "Hanya untuk menulis data konfigurasi" },
            answer: "b"
        },
        {
            question: "42. Ruang alamat 'Configuration' pada PCIe memungkinkan TL untuk...",
            options: { a: "Membaca/menulis ke memori utama", b: "Mengirim sinyal interupsi", c: "Membaca/menulis register konfigurasi perangkat I/O", d: "Berkomunikasi dengan perangkat PCI lama" },
            answer: "c"
        },
        {
            question: "43. Apa kelas interupsi yang disebabkan oleh kegagalan daya atau kesalahan paritas memori?",
            options: { a: "Program", b: "Timer", c: "I/O", d: "Hardware failure" },
            answer: "d"
        },
        {
            question: "44. Ketika prosesor memberikan wewenang kepada modul I/O untuk membaca/menulis ke memori, operasi ini dikenal sebagai...",
            options: { a: "DMA", b: "CPU-driven I/O", c: "Polling", d: "Interrupt" },
            answer: "a"
        },
        {
            question: "45. Sinyal apa pada control bus yang menentukan operasi yang akan dilakukan?",
            options: { a: "Timing signals", b: "Address signals", c: "Data signals", d: "Command signals" },
            answer: "d"
        },
        {
            question: "46. Layer pada QPI yang berurusan dengan 'cache coherency' adalah...",
            options: { a: "Physical Layer", b: "Link Layer", c: "Routing Layer", d: "Protocol Layer" },
            answer: "d"
        },
        {
            question: "47. Paket data tipikal pada QPI Protocol Layer berisi...",
            options: { a: "Satu byte data", b: "Alamat web", c: "Blok data yang dikirim ke/dari cache", d: "Perintah untuk mematikan sistem" },
            answer: "c"
        },
        {
            question: "48. PCI-SIG (Special Interest Group) dibentuk untuk...",
            options: { a: "Merancang prosesor baru", b: "Mengembangkan dan menjaga kompatibilitas spesifikasi PCI", c: "Menjual komponen komputer", d: "Membuat sistem operasi" },
            answer: "b"
        },
        {
            question: "49. PCIe TL mendukung pengalamatan memori 32-bit dan...",
            options: { a: "16-bit", b: "48-bit", c: "64-bit", d: "128-bit" },
            answer: "c"
        },
        {
            question: "50. Ruang alamat I/O pada PCIe digunakan untuk...",
            options: { a: "Perangkat PCIe baru", b: "Memori utama sistem", c: "Perangkat I/O lama (legacy)", d: "Manajemen daya" },
            answer: "c"
        }
    ];