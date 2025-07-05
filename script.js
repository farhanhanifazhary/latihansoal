document.addEventListener('DOMContentLoaded', () => {

    const quizBody = document.getElementById('quiz-body');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const scoreContainer = document.getElementById('score-container');

    function displayQuiz() {
        let quizHTML = '';
        quizData.forEach((item, index) => {
            quizHTML += `
                <div class="question-block" id="question-${index}">
                    <p class="question-text">${item.question}</p>
                    <div class="options-container">
            `;
            for (const key in item.options) {
                quizHTML += `
                    <label>
                        <input type="radio" name="q${index}" value="${key}">
                        ${item.options[key]}
                    </label>
                `;
            }
            quizHTML += `</div></div>`;
        });
        quizBody.innerHTML = quizHTML;
    }

    function calculateScore() {
        let score = 0;
        const inputs = document.querySelectorAll('input[type="radio"]');

        quizData.forEach((item, index) => {
            const questionBlock = document.getElementById(`question-${index}`);
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            
            const labels = questionBlock.querySelectorAll('label');
            labels.forEach(label => {
                label.style.pointerEvents = 'none'; // Menonaktifkan pilihan setelah submit
            });

            if (selectedOption) {
                const userAnswer = selectedOption.value;
                const correctAnswer = item.answer;
                const selectedLabel = selectedOption.parentElement;

                if (userAnswer === correctAnswer) {
                    score++;
                    selectedLabel.classList.add('correct');
                } else {
                    selectedLabel.classList.add('incorrect');
                    const correctLabel = questionBlock.querySelector(`input[value="${correctAnswer}"]`).parentElement;
                    correctLabel.classList.add('show-correct-answer');
                }
            }
        });

        scoreContainer.innerHTML = "Score: " + score / quizData.length;
        resultContainer.innerHTML = `Betul: ${score} dari ${quizData.length}`;
        submitBtn.disabled = true;
        submitBtn.style.display = 'none';
        window.scrollTo(0, 0); // Scroll ke atas untuk melihat hasil
    }

    displayQuiz();
    submitBtn.addEventListener('click', calculateScore);
});