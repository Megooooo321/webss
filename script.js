function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Reset error message
    errorMessage.textContent = '';

    // Simple validation for empty fields
    if (!username || !password) {
        errorMessage.textContent = 'Please fill in both fields.';
        return false;
    }

    // Additional password length validation
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters.';
        return false;
    }

    return true; // Form is valid
}