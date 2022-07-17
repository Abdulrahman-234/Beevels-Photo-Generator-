// NAME VALIDATION
const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const firstNameMessage = document.querySelector('#first-message');
const lastNameMessage = document.querySelector('#last-message');
// NUMBER VALIDATION
const mobileNumber = document.querySelector('#mobile-number');
const mobileMessage = document.querySelector('#mobile-message');
// PASSWORD VALIDATION
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordMessage = document.querySelector('#password-message');
const confirmPasswordMessage = document.querySelector('#confirm-password-message');
// EMAIL VALIDATION
const email = document.querySelector('#email');
const emailMessage = document.querySelector('#email-message');
const numberRegex = /^0\d{10}$/;
const nameRegex = /^[a-z]/;
const emailRegex = /^\w@[a-z]{4-8}.com$/;
const passwordRegex = /^{4-8}$/;
form.addEventListener('submit', submitEvent);
function submitEvent(e) {
    e.preventDefault();
    // FIRSTNAME VALIDATION
    if (nameRegex.test(firstName.value)) {
        firstNameMessage.innerHTML = '';
    }
    else {
        firstNameMessage.innerHTML = '<h3>Please input a valid name.<h3/>';
        firstNameMessage.classList.add('error');
        setTimeout(() => {
            firstNameMessage.remove()
        }, 3000);
    }
    // LASTNAME VALIDATION
    if (nameRegex.test(lastName.value)) {
        lastNameMessage.innerHTML = '';
    }
    else {
        lastNameMessage.innerHTML = '<h3>Please input a valid name.<h3/>';
        lastNameMessage.classList.add('error');
        setTimeout(() => {
            lastNameMessage.remove()
        }, 3000);
    }
    // MOBILE NUMBER VALIDATION
    if (numberRegex.test(mobileNumber.value)) {
        mobileMessage.innerHTML = '';
    }
    else {
        mobileMessage.innerHTML = '<h3>Please input a valid mobile number.<h3/>';
        mobileMessage.classList.add('error');
        setTimeout(() => {
            mobileMessage.remove()
        }, 3000);
    }

    // PASSWORD VALIDATION
    if (passwordRegex.match(password.value)) {
        passwordMessage.innerHTML = '';
    }
    else {
        passwordMessage.innerHTML = '<h3>Please input a password with 4-8 characters.<h3/>';
        passwordMessage.classList.add('error');
        setTimeout(() => {
            passwordMessage.remove()
        }, 3000);
    } if (confirmPassword.value !== password.value) {
        confirmPasswordMessage.innerHTML = '<h3>Please input correct password.<h3/>';
        confirmPasswordMessage.classList.add('error');
        confirmPassword.value = '';
        setTimeout(() => {
            confirmPasswordMessage.remove()
        }, 3000);
    }
    // EMAIL VALIDATION
    if (emailRegex.match(email.value)) {
        emailMessage.innerHTML = '';
    }
    else {
        emailMessage.innerHTML = '<h3>Please input a valid email address.<h3/>';
        emailMessage.classList.add('error');
        setTimeout(() => {
            emailMessage.remove()
        }, 3000);
    }
};






