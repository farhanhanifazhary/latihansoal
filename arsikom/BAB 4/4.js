const quizData = [
        {
            question: "1.  Mana trade-off yang benar dalam hirarki memori?",
            options: { a: "Lebih cepat, lebih murah/bit", b: "Lebih besar, lebih cepat", c: "Lebih cepat, lebih mahal/bit", d: "Lebih besar, lebih mahal/bit" },
            answer: "c"
        },
        {
            question: "2.  Solusi dilema kecepatan, kapasitas, dan biaya memori adalah...",
            options: { a: "Memori sangat cepat", b: "Hirarki Memori", c: "Memori eksternal", d: "Kompresi data" },
            answer: "b"
        },
        {
            question: "3.  Fasilitas yang memungkinkan program mengalamati memori secara logis disebut...",
            options: { a: "Cache memory", b: "Physical memory", c: "Virtual memory", d: "Secondary memory" },
            answer: "c"
        },
        {
            question: "4.  Perangkat keras yang menerjemahkan alamat virtual ke fisik adalah...",
            options: { a: "ALU", b: "CPU", c: "I/O Controller", d: "MMU" },
            answer: "d"
        },
        {
            question: "5.  Teknik pemetaan cache dimana blok memori hanya bisa dipetakan ke satu baris cache tertentu adalah...",
            options: { a: "Associative Mapping", b: "Set-Associative Mapping", c: "Direct Mapping", d: "Random Mapping" },
            answer: "c"
        },
        {
            question: "6.  Teknik pemetaan cache dimana blok memori bisa dipetakan ke baris cache manapun adalah...",
            options: { a: "Direct Mapping", b: "Set-Associative Mapping", c: "Associative Mapping", d: "Sequential Mapping" },
            answer: "c"
        },
        {
            question: "7.  Teknik pemetaan yang merupakan kompromi antara Direct dan Associative adalah...",
            options: { a: "Random Mapping", b: "Virtual Mapping", c: "Set-Associative Mapping", d: "Sequential Mapping" },
            answer: "c"
        },
        {
            question: "8.  Algoritma penggantian diperlukan pada jenis pemetaan...",
            options: { a: "Hanya Direct", b: "Direct dan Set-Associative", c: "Associative dan Set-Associative", d: "Hanya Associative" },
            answer: "c"
        },
        {
            question: "9.  Algoritma penggantian yang paling populer adalah...",
            options: { a: "FIFO", b: "LFU", c: "Random", d: "LRU" },
            answer: "d"
        },
        {
            question: "10.  Kebijakan tulis dimana operasi tulis dilakukan ke memori utama dan cache secara bersamaan adalah...",
            options: { a: "Write-back", b: "Write-through", c: "Write-around", d: "Write-allocate" },
            answer: "b"
        },
        {
            question: "11.  Kebijakan tulis yang meminimalkan lalu lintas memori dengan hanya memperbarui cache adalah...",
            options: { a: "Write-through", b: "Write-back", c: "Write-no-allocate", d: "Write-around" },
            answer: "b"
        },
        {
            question: "12.  Cache yang berada pada keping chip yang sama dengan prosesor disebut...",
            options: { a: "Off-chip cache", b: "External cache", c: "On-chip cache", d: "Secondary cache" },
            answer: "c"
        },
        {
            question: "13.  Memisahkan cache untuk instruksi dan data pada level yang sama disebut...",
            options: { a: "Unified Cache", b: "Split Cache", c: "Victim Cache", d: "Multilevel Cache" },
            answer: "b"
        },
        {
            question: "14.  Keuntungan utama dari Split Cache adalah...",
            options: { a: "Hit rate lebih tinggi", b: "Desain lebih sederhana", c: "Menghilangkan pertentangan antara unit fetch dan eksekusi", d: "Menyeimbangkan beban otomatis" },
            answer: "c"
        },
        {
            question: "15.  Keuntungan utama dari Unified Cache adalah...",
            options: { a: "Lebih cepat untuk pipeline", b: "Hit rate lebih tinggi dan menyeimbangkan beban otomatis", c: "Menghilangkan pertentangan", d: "Selalu lebih besar" },
            answer: "b"
        }
    ];
