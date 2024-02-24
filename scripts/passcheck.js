const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#password-confirm');
const passMessage = document.querySelector('#pass-message');

pass2.addEventListener('focusout', check);

function check() {
    if (pass1.value !== pass2.value) {
        passMessage.textContent = 'Passwords do not match. Please try again.';
        passMessage.style.visibility = 'show';
        pass2.style.backgroundColor = '#e5e5e5'
        pass2.value = '';
        pass2.focus();
    }

    else {
        passMessage.style.display = 'none';
    }
}