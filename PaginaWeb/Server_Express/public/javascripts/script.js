function init(){
    document.getElementById('formRegistrazione').addEventListener('submit', function(event) {

        event.preventDefault();

        let formValid = true;

        // Nome
        const firstName = document.getElementById('nameInput');
        const firstNameError = document.getElementById('nameInputError');
        if (!firstName.value.trim()) {
            firstNameError.textContent = "il nome è obbligatorio";
            firstNameError.classList.remove('hidden');
            formValid = false;
        } else {
            firstNameError.classList.add('hidden');
            firstName.removeAttribute('aria-invalid');
        }

        // Cognome
        const lastName = document.getElementById('surnameInput');
        const lastNameError = document.getElementById('surnameInputError');
        if (!lastName.value.trim()) {
            lastNameError.classList.remove('hidden');
            lastName.setAttribute('aria-invalid', 'true');
            formValid = false;
        } else {
            lastNameError.classList.add('hidden');
            lastName.removeAttribute('aria-invalid');
        }

        // Email
        const email = document.getElementById('emailInput');
        const emailError = document.getElementById('emailInputError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            emailError.classList.remove('hidden');
            email.setAttribute('aria-invalid', 'true');
            formValid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            emailError.classList.remove('hidden');
            email.setAttribute('aria-invalid', 'true');
            formValid = false;
        } else {
            emailError.classList.add('hidden');
            email.removeAttribute('aria-invalid');
        }

        // Password
        const password = document.getElementById('passwordInput');
        const passwordError = document.getElementById('passwordInputError');
        if (!password.value.trim()) {
            passwordError.classList.remove('hidden');
            password.setAttribute('aria-invalid', 'true');
            formValid = false;
        } else {
            passwordError.classList.add('hidden');
            password.removeAttribute('aria-invalid');
        }

        // Conferma Password
        const confirmPassword = document.getElementById('passwordInputDue');
        const confirmPasswordError = document.getElementById('passwordInputDueError');
        if (!confirmPassword.value.trim()) {
            confirmPasswordError.classList.remove('hidden');
            confirmPassword.setAttribute('aria-invalid', 'true');
            formValid = false;
        } else {
            confirmPasswordError.classList.add('hidden');
            confirmPassword.removeAttribute('aria-invalid');
        }

        // Verifica che le password coincidano
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "Le password non corrispondono.";
            confirmPasswordError.classList.remove('hidden');
            confirmPassword.setAttribute('aria-invalid', 'true');
            formValid = false;
        } else {
            confirmPasswordError.classList.add('hidden');
            confirmPassword.removeAttribute('aria-invalid');
        }

        if(formValid){
            window.location.href = "/";
        }

        if (!formValid) {
            event.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    init();
})