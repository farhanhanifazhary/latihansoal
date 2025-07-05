const quizData = [
        {
            question: "1. Komponen-komponen CPU antara lain :",
            options: { a: "ALU, Motherboard, Hardisk, RAM", b: "Powersuply,ALU,ROM", c: "ALU, Harddisk, RAM,ROM", d: "Harddisk, CU, ALU, RAM", e: "CU,ALU,Register,CPU Interconections" },
            answer: "e"
        },
        {
            question: "2. intruksi register (ir) adalah…",
            options: { a: "menganalisis instruksi untuk menentukan jenis operasi yang akan di bentuk", b: "ambil operand dari memory dan baca operand itu dari I/O", c: "membaca instruksi dari memori untuk diberikan ke CU", d: "menentukan alamat intruksi berikutnya yang akan dieksekusi" },
            answer: "c"
        },
        {
            question: "3. Yang bukan merupakan fungsi sebuah komputer adalah…",
            options: { a: "Penyimpanan data", b: "Pemrosesan data", c: "Pemindahan data", d: "Pengolahan data" },
            answer: "d"
        },
        {
            question: "4. Aksi yang dilakukan CPU dalam mengimplementasikan instruksi dibagi menjadi beberapa kategori,kecuali ..",
            options: { a: "Pengolahan data", b: "CPU-Memori", c: "Seleksi", d: "CPU-I/O", e: "Control" },
            answer: "c"
        },
        {
            question: "5. Integrated Circuits ditemukan pada generasi ke… komputer",
            options: { a: "Satu", b: "Empat", c: "Dua", d: "Tiga" },
            answer: "d"
        },
        {
            question: "6. Yang termasuk Kriteria mesin Von-Neuman ?",
            options: { a: "mempercepat array processor", b: "menciptakan Komputer multiprosesor", c: "merupakan stored – program concept", d: "menggunakan tabung vakum", e: "menerapkan proses pipelining" },
            answer: "c"
        },
        {
            question: "7. ARDUINO UNO memiliki pin input Analog digital sebanyak",
            options: { a: "8", b: "Salah semua", c: "32", d: "14", e: "6" },
            answer: "e"
        },
        {
            question: "8. Contoh Mikroprosesor",
            options: { a: "ARDUINO UNO", b: "RASPBERRY PY", c: "ATmega328P", d: "Semua benar", e: "INTEL CORE i3" },
            answer: "e"
        },
        {
            question: "9. program counter digunakan untuk…",
            options: { a: "mengawasi intruksi yang akan dibaca selanjutnya", b: "menyimpan intruksi eksekusi secara ekspisit", c: "mengubah urutan eksekusi secara ekspisit", d: "memindahkan intruksi yang akan dibaca selanjutnya" },
            answer: "d"
        },
        {
            question: "10. Tegangan input yang direkomendasikan untuk ARDUINO UNO adalah",
            options: { a: "7-12 V", b: "20 V", c: "15 V", d: "3,7 V", e: "Salah semua" },
            answer: "a"
        },
        {
            question: "11. Instruksi Memindahkan data antara memori dengan register-register ALU atau antara dua register ALU merupakan fungsi dari instruksi …",
            options: { a: "Data transfer", b: "Arithmetic", c: "bit prosecor", d: "Conditional Branch", e: "Unconditional Branch" },
            answer: "a"
        },
        {
            question: "12. Kepanjangan dari IAS adalah…?",
            options: { a: "Industi for Advanced Study", b: "Indonesia for Advanced Study", c: "Institute for Advanced Study", d: "International for Advanced Study", e: "Internet for Advanced Study" },
            answer: "c"
        },
        {
            question: "13. Mengontrol operasi computer dan membentuk fungsi-fungsi pengolahan datanya, adalah definisi dari……….",
            options: { a: "Main Memori", b: "I/O", c: "Memory", d: "CPU", e: "Prosesor" },
            answer: "d"
        },
        {
            question: "14. Jenis memori utama adalah",
            options: { a: "ROM", b: "Register", c: "Salah semua", d: "RAM dan ROM", e: "Flash Disk" },
            answer: "d"
        },
        {
            question: "15. Berisi data yang akan di tuliskan ke dalam memori atau menerima data yang di baca dari memori, merupakan register ……….",
            options: { a: "MAR", b: "MBR", c: "IR", d: "FLAG REGISTER", e: "ALU" },
            answer: "b"
        },
        {
            question: "16. Aplikasi desktop dengan system berbasis microprocessor saat ini meliputi,kecuali…",
            options: { a: "Pengolahan citra", b: "Konversi video", c: "Pengolahan data", d: "Pengenalan pembicaraan" },
            answer: "b"
        },
        {
            question: "17. Kapasitas Flash Memory pada Arduino UNO adalah",
            options: { a: "1 KB", b: "Salah semua", c: "2 KB", d: "32 KB", e: "1 MB" },
            answer: "d"
        },
        {
            question: "18. Kegiatan atau aksi yang dilakukan oleh CPU untuk menetukan alamat instruksi berikutnya yang akan dieksekusi adalah…",
            options: { a: "Instruction Address Calculation (IAC)", b: "Intructions fetch (IF)", c: "Data Operation(DO)", d: "Operan Store(OS)", e: "Operand Fetch (OF)" },
            answer: "a"
        },
        {
            question: "19. Fungsi umum Komputer ..",
            options: { a: "Penggolahan Data, penyimpanan Data, dan Seleksi", b: "Penggolahan Data, penyimpanan Data, Pemindahan Data dan Seleksi", c: "Penggolahan Data, penyimpanan Data, Pemindahan Data dan Kontrol", d: "Penggolahan Data, Penyimpanan Data,Kontrol dan Seleki", e: "Penggolahan Data, Pemindahan Data dan Seleksi" },
            answer: "c"
        },
        {
            question: "20. Aksi yang dilakukan CPU dalam mengimplementasikan instruksi dibagi menjadi beberapa kategori,kecuali ..",
            options: { a: "CPU-I/O", b: "CPU-Memori", c: "Pengolahan data", d: "Seleksi", e: "Control" },
            answer: "d"
        },
        {
            question: "21. Penyimpan internal dari CPU adalah definisi dari :",
            options: { a: "Arithmetic and Logic Unit (ALU)", b: "Memory", c: "CPU Interconnection", d: "Control Unit (CU)", e: "Register" },
            answer: "e"
        },
        {
            question: "22. Yang bukan merupakan pengelompokkan kelas-kelas interrupts adalah…",
            options: { a: "Program", b: "I/O", c: "Timer", d: "Memory" },
            answer: "d"
        },
        {
            question: "23. Berisi data yang akan di tuliskan ke dalam memori atau menerima data yang di baca dari memori, merupakan register ……….",
            options: { a: "FLAG REGISTER", b: "MAR", c: "MBR", d: "ALU", e: "IR" },
            answer: "c"
        },
        {
            question: "24. Kelas-kelas interrupt di bagi menjadi 4, kecuali :",
            options: { a: "H/W Failure", b: "Instruksi", c: "I/O", d: "Timer", e: "Program" },
            answer: "b"
        },
        {
            question: "25. Fungsi umum Komputer ..",
            options: { a: "Penggolahan Data, Pemindahan Data dan Seleksi", b: "Penggolahan Data, penyimpanan Data, Pemindahan Data dan Seleksi", c: "Penggolahan Data, Penyimpanan Data,Kontrol dan Seleki", d: "Penggolahan Data, penyimpanan Data, Pemindahan Data dan Kontrol", e: "Penggolahan Data, penyimpanan Data, dan Seleksi" },
            answer: "d"
        },
        {
            question: "26. Yang PRODUK INTEL, kecuali adalah…",
            options: { a: "80486 DX", b: "80286", c: "Pentium 2", d: "Zilog 80" },
            answer: "d"
        },
        {
            question: "27. Aplikasi pertama teknologi IC bagi komputer adalah konstruksi processor diantaranya, kecuali…",
            options: { a: "CPU", b: "ALU", c: "LU", d: "CU" },
            answer: "c"
        },
        {
            question: "28. Komponen-komponen CPU antara lain :",
            options: { a: "ALU, Harddisk, RAM,ROM", b: "ALU, Motherboard, Hardisk, RAM", c: "CU,ALU,Register,CPU Interconections", d: "Harddisk, CU, ALU, RAM", e: "Powersuply,ALU,ROM" },
            answer: "c"
        },
        {
            question: "29. Instruksi Memindahkan data antara memori dengan register-register ALU atau antara dua register ALU merupakan fungsi dari instruksi …",
            options: { a: "Conditional Branch", b: "Unconditional Branch", c: "Data transfer", d: "bit prosecor", e: "Arithmetic" },
            answer: "c"
        },
        {
            question: "30. Yang bukan merupakan kegiatan atau aksi yang dilakukan oleh CPU adalah ?",
            options: { a: "Data Operation (DO)", b: "Operand Fetch (OF)", c: "Hardware Failure (HF)", d: "Operan Store (OS)", e: "Instruction Fetch (IF)" },
            answer: "c"
        }
    ];