// Password toggle functionality
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const toggleIcon = passwordField.nextElementSibling;
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Signup Form validation
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    if(signupForm) {
        signupForm.addEventListener('submit', function(e) {
            const password = document.getElementById('signupPassword');
            const errorMessage = password.nextElementSibling.nextElementSibling;
            
            if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password.value)) {
                e.preventDefault();
                errorMessage.classList.add('active');
                password.focus();
            }
        });

        // Real-time password validation
        document.getElementById('signupPassword').addEventListener('input', function() {
            const errorMessage = this.nextElementSibling.nextElementSibling;
            if (this.validity.valid) {
                errorMessage.classList.remove('active');
            } else {
                errorMessage.classList.add('active');
            }
        });
    }

    // Login Form handling
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            // Add login validation logic here
            e.preventDefault();
            // Implement your login API call
        });
    }
});