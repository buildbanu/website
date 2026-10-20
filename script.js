document.addEventListener('DOMContentLoaded', () => {
    // Handle Inquiry Form Submission
    const inquiryForm = document.getElementById('inquiry-form');
    const formFeedback = document.getElementById('form-feedback');

    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('inquirer-name').value.trim();
            const emailInput = document.getElementById('inquirer-email').value.trim();

            if (nameInput && emailInput) {
                inquiryForm.style.display = 'none';
                formFeedback.classList.remove('hidden');
                formFeedback.textContent = `Thank you, ${nameInput}. Your briefing request has been securely logged. Our team will contact you at ${emailInput}.`;
            }
        });
    }
});
