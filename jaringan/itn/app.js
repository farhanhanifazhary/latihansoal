document.addEventListener('DOMContentLoaded', () => {
    const quizBody = document.getElementById('quiz-body');
    const submitBtn = document.getElementById('submit-btn');
    const restartBtn = document.getElementById('restart-btn');
    const resultContainer = document.getElementById('result-container');

    // 1. Fungsi untuk menampilkan semua soal saat halaman dimuat
    function renderQuiz() {
        let quizHTML = '';
        quizData.forEach((quizItem, index) => {
            const isMultipleChoice = Array.isArray(quizItem.correct);
            const choiceText = isMultipleChoice ? `(Pilih ${quizItem.correct.length})` : '(Pilih 1)';

            // Membuat blok untuk setiap soal
            quizHTML += `
                <div class="question-block" id="question-${index}">
                    <p class="question">${index + 1}. ${quizItem.question} <span>${choiceText}</span></p>
                    <ul class="answers" data-question-index="${index}">
            `;

            // Membuat daftar jawaban untuk setiap soal
            quizItem.answers.forEach(answer => {
                quizHTML += `<li class="answer-option">${answer}</li>`;
            });

            quizHTML += `</ul></div><hr>`;
        });

        quizBody.innerHTML = quizHTML;
    }

    // 2. Fungsi untuk menangani klik pada pilihan jawaban
    quizBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('answer-option')) {
            const li = e.target;
            const ul = li.parentElement;
            const questionIndex = ul.dataset.questionIndex;
            const quizItem = quizData[questionIndex];
            const isMultipleChoice = Array.isArray(quizItem.correct);

            if (isMultipleChoice) {
                // Toggle (pilih/batal pilih) untuk pilihan ganda
                li.classList.toggle('selected');
            } else {
                // Hanya izinkan satu pilihan untuk soal single-choice
                const siblings = ul.querySelectorAll('li');
                siblings.forEach(sibling => sibling.classList.remove('selected'));
                li.classList.add('selected');
            }
        }
    });

    // 3. Fungsi untuk memeriksa semua jawaban
    function checkAllAnswers() {
        let score = 0;
        
        quizData.forEach((quizItem, index) => {
            const questionBlock = document.getElementById(`question-${index}`);
            const answerOptions = questionBlock.querySelectorAll('.answer-option');
            const selectedOptions = questionBlock.querySelectorAll('.answer-option.selected');

            const userAnswers = Array.from(selectedOptions).map(li => li.innerText);
            const correctAnswers = Array.isArray(quizItem.correct) ? quizItem.correct : [quizItem.correct];

            // Cek apakah jawaban benar
            const isCorrect = userAnswers.length === correctAnswers.length && userAnswers.every(answer => correctAnswers.includes(answer));

            if (isCorrect) {
                score++;
            }

            // Beri tanda visual untuk review
            answerOptions.forEach(li => {
                const answerText = li.innerText;
                // Tandai jawaban yang benar dengan warna hijau
                if (correctAnswers.includes(answerText)) {
                    li.classList.add('correct');
                }
                // Jika user memilih ini tapi salah, tandai dengan warna merah
                if (li.classList.contains('selected') && !correctAnswers.includes(answerText)) {
                    li.classList.add('incorrect');
                }
                // Nonaktifkan klik setelah diperiksa
                li.style.pointerEvents = 'none';
            });
        });

        // Tampilkan hasil akhir
        resultContainer.innerHTML = `
            <h2>Kuis Selesai!</h2>
            <p>Anda menjawab <strong>${score}</strong> dari <strong>${quizData.length}</strong> soal dengan benar.</p>
        `;
        resultContainer.style.display = 'block';
        window.scrollTo(0, 0); // Gulir ke atas untuk melihat hasil

        // Ganti tombol
        submitBtn.style.display = 'none';
        restartBtn.style.display = 'inline-block';
    }
    
    // 4. Fungsi untuk mengulang kuis
    function restartQuiz() {
        location.reload();
    }

    // Event Listeners untuk tombol
    submitBtn.addEventListener('click', checkAllAnswers);
    restartBtn.addEventListener('click', restartQuiz);

    // Mulai kuis dengan menampilkan semua soal
    renderQuiz();
});