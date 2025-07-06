const quizData = [
        {
            question: "1.  Manakah yang BUKAN konsep kunci arsitektur von Neumann?",
            options: { a: "Data dan instruksi di memori tunggal", b: "Eksekusi sekuensial", c: "Memori dialamatkan berdasarkan lokasi", d: "Data dan instruksi di memori terpisah" },
            answer: "d"
        },
        {
            question: "2.  Register yang menyimpan alamat instruksi berikutnya adalah...",
            options: { a: "IR", b: "MBR", c: "PC", d: "AC" },
            answer: "c"
        },
        {
            question: "3.  Instruksi yang diambil dari memori akan dimuat ke...",
            options: { a: "PC", b: "IR", c: "MAR", d: "Register Umum" },
            answer: "b"
        },
        {
            question: "4.  Mekanisme untuk meningkatkan utilisasi prosesor dengan menghentikan eksekusi normal adalah...",
            options: { a: "Pipelining", b: "Polling", c: "Interupsi (Interrupt)", d: "DMA" },
            answer: "c"
        },
        {
            question: "5.  Interupsi akibat pembagian dengan nol termasuk kelas...",
            options: { a: "Program", b: "Timer", c: "I/O", d: "Hardware failure" },
            answer: "a"
        },
        {
            question: "6.  Operasi pertukaran data langsung antara modul I/O dan memori tanpa melibatkan prosesor disebut...",
            options: { a: "Programmed I/O", b: "Interrupt-driven I/O", c: "Direct Memory Access (DMA)", d: "Polling" },
            answer: "c"
        },
        {
            question: "7.  Jalur komunikasi yang menghubungkan dua atau lebih perangkat disebut...",
            options: { a: "Port", b: "Bus", c: "Socket", d: "Channel" },
            answer: "b"
        },
        {
            question: "8.  Bus yang berfungsi memindahkan data antar modul adalah...",
            options: { a: "Address Bus", b: "Control Bus", c: "Data Bus", d: "I/O Bus" },
            answer: "c"
        },
        {
            question: "9.  Lebar Address Bus menentukan...",
            options: { a: "Kecepatan transfer data", b: "Jumlah perangkat I/O", c: "Kapasitas memori maksimum", d: "Jenis instruksi" },
            answer: "c"
        },
        {
            question: "00.  Bus yang mengirim sinyal perintah dan pewaktuan adalah...",
            options: { a: "Data Bus", b: "Address Bus", c: "System Bus", d: "Control Bus" },
            answer: "d"
        },
        {
            question: "11.  Karakteristik interkoneksi point-to-point seperti QPI adalah...",
            options: { a: "Satu jalur bersama", b: "Memerlukan arbitrasi", c: "Protokol berlapis dan transfer data paket", d: "Hanya untuk dua perangkat" },
            answer: "c"
        },
        {
            question: "12.  Pada QPI Link Layer, fungsi untuk mendeteksi error bit disebut...",
            options: { a: "Flow control", b: "Error control", c: "Routing", d: "Cache coherency" },
            answer: "b"
        },
        {
            question: "13.  Unit transfer pada QPI Link Layer disebut...",
            options: { a: "Packet", b: "Frame", c: "Flit", d: "Segment" },
            answer: "c"
        },
        {
            question: "14.  PCI Express (PCIe) merupakan skema interkoneksi jenis...",
            options: { a: "Bus bersama", b: "Point-to-point", c: "Cincin", d: "Bintang" },
            answer: "b"
        },
        {
            question: "15.  Teknik transaksi PCIe dimana sumber mengirim permintaan dan menunggu balasan adalah...",
            options: { a: "Posted transaction", b: "Split transaction", c: "Broadcast transaction", d: "Simplex transaction" },
            answer: "b"
        }
    ];
