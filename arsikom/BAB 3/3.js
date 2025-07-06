const quizData = [
        {
            question: "31. (Bab 3) Manakah yang BUKAN konsep kunci arsitektur von Neumann?",
            options: { a: "Data dan instruksi di memori tunggal", b: "Eksekusi sekuensial", c: "Memori dialamatkan berdasarkan lokasi", d: "Data dan instruksi di memori terpisah" },
            answer: "d"
        },
        {
            question: "32. (Bab 3) Register yang menyimpan alamat instruksi berikutnya adalah...",
            options: { a: "IR", b: "MBR", c: "PC", d: "AC" },
            answer: "c"
        },
        {
            question: "33. (Bab 3) Instruksi yang diambil dari memori akan dimuat ke...",
            options: { a: "PC", b: "IR", c: "MAR", d: "Register Umum" },
            answer: "b"
        },
        {
            question: "34. (Bab 3) Mekanisme untuk meningkatkan utilisasi prosesor dengan menghentikan eksekusi normal adalah...",
            options: { a: "Pipelining", b: "Polling", c: "Interupsi (Interrupt)", d: "DMA" },
            answer: "c"
        },
        {
            question: "35. (Bab 3) Interupsi akibat pembagian dengan nol termasuk kelas...",
            options: { a: "Program", b: "Timer", c: "I/O", d: "Hardware failure" },
            answer: "a"
        },
        {
            question: "36. (Bab 3) Operasi pertukaran data langsung antara modul I/O dan memori tanpa melibatkan prosesor disebut...",
            options: { a: "Programmed I/O", b: "Interrupt-driven I/O", c: "Direct Memory Access (DMA)", d: "Polling" },
            answer: "c"
        },
        {
            question: "37. (Bab 3) Jalur komunikasi yang menghubungkan dua atau lebih perangkat disebut...",
            options: { a: "Port", b: "Bus", c: "Socket", d: "Channel" },
            answer: "b"
        },
        {
            question: "38. (Bab 3) Bus yang berfungsi memindahkan data antar modul adalah...",
            options: { a: "Address Bus", b: "Control Bus", c: "Data Bus", d: "I/O Bus" },
            answer: "c"
        },
        {
            question: "39. (Bab 3) Lebar Address Bus menentukan...",
            options: { a: "Kecepatan transfer data", b: "Jumlah perangkat I/O", c: "Kapasitas memori maksimum", d: "Jenis instruksi" },
            answer: "c"
        },
        {
            question: "40. (Bab 3) Bus yang mengirim sinyal perintah dan pewaktuan adalah...",
            options: { a: "Data Bus", b: "Address Bus", c: "System Bus", d: "Control Bus" },
            answer: "d"
        },
        {
            question: "41. (Bab 3) Karakteristik interkoneksi point-to-point seperti QPI adalah...",
            options: { a: "Satu jalur bersama", b: "Memerlukan arbitrasi", c: "Protokol berlapis dan transfer data paket", d: "Hanya untuk dua perangkat" },
            answer: "c"
        },
        {
            question: "42. (Bab 3) Pada QPI Link Layer, fungsi untuk mendeteksi error bit disebut...",
            options: { a: "Flow control", b: "Error control", c: "Routing", d: "Cache coherency" },
            answer: "b"
        },
        {
            question: "43. (Bab 3) Unit transfer pada QPI Link Layer disebut...",
            options: { a: "Packet", b: "Frame", c: "Flit", d: "Segment" },
            answer: "c"
        },
        {
            question: "44. (Bab 3) PCI Express (PCIe) merupakan skema interkoneksi jenis...",
            options: { a: "Bus bersama", b: "Point-to-point", c: "Cincin", d: "Bintang" },
            answer: "b"
        },
        {
            question: "45. (Bab 3) Teknik transaksi PCIe dimana sumber mengirim permintaan dan menunggu balasan adalah...",
            options: { a: "Posted transaction", b: "Split transaction", c: "Broadcast transaction", d: "Simplex transaction" },
            answer: "b"
        }
    ];
