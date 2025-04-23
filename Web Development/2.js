<script>
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.faq-icon');
            const isActive = answer.style.display === 'block';

            // Close all open FAQs
            document.querySelectorAll('.faq-answer').forEach((answer) => {
                answer.style.display = 'none';
            });
            document.querySelectorAll('.faq-icon').forEach((icon) => {
                icon.textContent = '+';
            });

            // Toggle the selected FAQ
            if (!isActive) {
                answer.style.display = 'block';
                icon.textContent = '−';
            }
        });
    });
</script>
