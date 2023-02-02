const register = document.querySelector('#register');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

const usernameError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const confirmPasswordError = document.querySelector('#confirmPasswordError');

const validateUsername = () => {
    const userValue = username.value.trim();
    usernameError.innerText = "";

    if (!userValue) {
        usernameError.innerText = '*Username is required';
    }
    // username should be between 5 to 16 characters
    else if (userValue.length < 5 || userValue.length > 16) {
        usernameError.innerText = '*Username must be between 5 to 16 characters';
    }
}

const validateEmail = () => {
    const emailValue = email.value.trim();
    const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    emailError.innerText = "";

    if (!emailValue) {
        emailError.innerText = '*Email is requried';
    }
    else if (!emailValidator.test(emailValue)) {
        emailError.innerText = '*Please enter a valid email';
    }
}

const validatePassword = () => {
    /*
        1. Password is required
        2. Password rules / pattern:
            contains a digit, a symbol, 
            at least 1 Uppercase letter, at least 5 characters
    */

    const passwordValue = password.value.trim();
    const passwordValidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,}$/
    passwordError.innerText = "";
    if (!passwordValue) {
        passwordError.innerText = 'Password is required';
    }
    else if (!passwordValidator.test(passwordValue)) {
        passwordError.innerText = 'Password must contain at least one digit, one symbol and one uppercase letter and must have at least 5 characters';
    }


}

const validateConfirmPassword = () => {
    /*
        Password and Confirm password should be equal / same 
    */

    const confirmPasswordValue = confirmPassword.value.trim();
    confirmPasswordError.innerText = "";
    if (!confirmPasswordValue) {
        confirmPasswordError.innerText = 'Confirm Password is required';
    }
    else if (confirmPasswordValue !== password.value.trim()) {
        confirmPasswordError.innerText = 'Password doesn`t match';
    }
}



register.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();

        validateUsername();
        validateEmail();
        validatePassword();
        validateConfirmPassword();

    }
)