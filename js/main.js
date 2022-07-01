// Navbar Menu
const menu = document.querySelector('.open-btn');
const close = document.querySelector('.nav-close-btn');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
});
close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
});

// MODAL
const openBtn = document.querySelector('.ridwan');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');


openBtn.addEventListener('click', openModal);

function openModal(e) {
    modal.style.display = 'block'
}
closeBtn.addEventListener('click', closeModal);

function closeModal(e) {
    modal.style.display = 'none'
}
document.querySelector('.modal').addEventListener('click', outsideClick);

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}


// FORM VALIDATION
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const mobileNumber = document.querySelector('#mobile-number');

const firstNameMessage = document.querySelector('#first-message');
const lastNameMessage = document.querySelector('#last-message');
const emailMessage = document.querySelector('#email-message');
const passwordMessage = document.querySelector('#password-message');
const confirmPasswordMessage = document.querySelector('#confirm-password-message');
const mobileMessage = document.querySelector('#mobile-message');
const regex = new RegExp('/^d/', 'g');
form.addEventListener('submit', submitEvent);
function submitEvent(e) {
    e.preventDefault();
    if (confirmPassword.value === password.value) {
        console.log('Hello');
    }
    else {
        confirmPasswordMessage.innerHTML = '<h3>Please input correct password.<h3/>';
        confirmPasswordMessage.classList.add('error');
        confirmPassword.value = '';
        setTimeout(() => {
            confirmPasswordMessage.remove()
        }, 3000);
    }
    // FIRSTNAME VALIDATION
    if (firstName.value === '') {
        firstNameMessage.innerHTML = '<h3>Please fill out this field.<h3/>';
        firstNameMessage.classList.add('error');
        setTimeout(() => {
            firstNameMessage.remove()
        }, 3000);
    }
    // LASTNAME VALIDATION
    if (lastName.value === '') {
        lastNameMessage.innerHTML = '<h3>Please fill out this field.<h3/>';
        lastNameMessage.classList.add('error');
        setTimeout(() => {
            lastNameMessage.remove()
        }, 3000);
    }
    // MOBILE NUMBER VALIDATION
    if (mobileNumber.value === '') {
        mobileMessage.innerHTML = '<h3>Please fill out this field.<h3/>';
        mobileMessage.classList.add('error');
        setTimeout(() => {
            mobileMessage.remove()
        }, 3000);
    }
    else if (mobileNumber.value.length > 11) {
        mobileMessage.innerHTML = '<h3>Please input an 11-digit mobile number..<h3/>';
        mobileMessage.classList.add('error');
        mobileNumber.value = '';
        setTimeout(() => {
            mobileMessage.remove()
        }, 3000);
    }
    else if (mobileNumber.value.length < 11) {
        mobileMessage.innerHTML = '<h3>Please input an 11-digit mobile number.<h3/>';
        mobileMessage.classList.add('error');
        mobileNumber.value = '';
        setTimeout(() => {
            mobileMessage.remove()
        }, 3000);
    }
    else if (mobileNumber.value.length = 11) {
        mobileMessage.innerHTML = '';
        mobileMessage.classList.add('error');
        mobileNumber.value = mobileNumber.value;
        setTimeout(() => {
            mobileMessage.remove()
        }, 3000);
    }
    else if (mobileNumber.match !== regex) {
        mobileNumber.value = '';
        mobileMessage.innerHTML = '<h3>Please input a valid mobile number.<h3/>';
        mobileMessage.classList.add('error');
        setTimeout(() => {
            mobileMessage.remove()
        }, 3000);
    }
    else if (mobileNumber.match === regex) {
        mobileMessage.innerHTML = '';
        mobileMessage.classList.add('error');
        mobileNumber.value = mobileNumber.value;
        setTimeout(() => {
            mobileMessage.remove()
        }, 3000);
    }

    // EMAIL VALIDATION
    if (email.value === '') {
        emailMessage.innerHTML = '<h3>Please fill out this field.<h3/>';
        emailMessage.classList.add('error');
        setTimeout(() => {
            emailMessage.remove()
        }, 3000);
    }
    else if (!email.value.contains('@')) {
        emailMessage.innerHTML = '<h3>Please input a valid email address.<h3/>';
        emailMessage.classList.add('error');
        setTimeout(() => {
            emailMessage.remove()
        }, 3000);
    }
    // PASSWORD VALIDATION
    if (password.value === '') {
        passwordMessage.innerHTML = '<h3>Please fill out this field.<h3/>';
        passwordMessage.classList.add('error');
        setTimeout(() => {
            passwordMessage.remove()
        }, 3000);
    }
    if (confirmPassword.value === '') {
        confirmPasswordMessage.innerHTML = '<h3>Please fill out this field.<h3/>';
        confirmPasswordMessage.classList.add('error');
        setTimeout(() => {
            confirmPasswordMessage.remove()
        }, 3000);
        if (confirmPassword.value !== password.value) {
            confirmPasswordMessage.innerHTML = '<h3>Please input correct password.<h3/>';
            confirmPasswordMessage.classList.add('error');
            confirmPassword.value = '';
            setTimeout(() => {
                confirmPasswordMessage.remove()
            }, 3000);
        }
    }
    // if (confirmPassword.value === password.value) {
    //     console.log('Hello');
    // }
    // else {
    //     confirmPasswordMessage.innerHTML = '<h3>Please input correct password.<h3/>';
    //     confirmPasswordMessage.classList.add('error');
    //     confirmPassword.value = '';
    //     setTimeout(() => {
    //         confirmPasswordMessage.remove()
    //     }, 3000);
    // }
}




const navCon = document.querySelector('.nav-container')
window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 50) {
        navCon.classList.add('background-nav')
        // const scrollNavSearch = document.createElement('<div class="nav-input-container "><input type="text" class="nav-input" placeholder="Search for free photos "><i class="fa fa-search nav-search" aria-hidden="true"></i></div>');
        const scrollNavSearch = document.createElement('<div>');
        scrollNavSearch.innerHTML('<input type="text" class="nav-input" placeholder="Search for free photos "><i class="fa fa-search nav-search" aria-hidden="true"></i>')
        navCon.appendChild(scrollNavSearch)
    } else {
        navCon.classList.remove('background-nav')
    }
}

// Store Class: Handles Storage
// class Store {
//   static getBooks() {
//     let books;
//     if(localStorage.getItem('books') === null) {
//       books = [];
//     } else {
//       books = JSON.parse(localStorage.getItem('books'));
//     }

//     return books;
//   }

//   static addBook(book) {
//     const books = Store.getBooks();
//     books.push(book);
//     localStorage.setItem('books', JSON.stringify(books));
//   }

//   static removeBook(isbn) {
//     const books = Store.getBooks();

//     books.forEach((book, index) => {
//       if(book.isbn === isbn) {
//         books.splice(index, 1);
//       }
//     });

//     localStorage.setItem('books', JSON.stringify(books));
//   }
// }












