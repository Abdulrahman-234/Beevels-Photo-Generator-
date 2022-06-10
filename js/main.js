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
        modal.style.display ='none'
    }
}


// FORM VALIDATION
const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const passwordInput = document.querySelector('#password');
const firstNameMessage = document.querySelector('#first-message');
const lastNameMessage = document.querySelector('#last-message');
const emailMessage = document.querySelector('#email-message');
const passwordMessage = document.querySelector('#password-message');
form.addEventListener('submit', submitEvent);
function submitEvent(e) {
    e.preventDefault();
    if (firstNameInput.value === '') {
    firstNameMessage.innerHTML = '<h3>Please fill out this field.<h3/>'; 
    firstNameMessage.classList.add('error');
    setTimeout(() => {
        firstNameMessage.remove()
    }, 1500);
    }
    else if (lastNameInput.value === '') {
    lastNameMessage.innerHTML = '<h3>Please fill out this field.<h3/>'; 
    lastNameMessage.classList.add('error');
    setTimeout(() => {
        lastNameMessage.remove()
    }, 1500);
    }
    else if (emailInput.value === '') {
    emailMessage.innerHTML = '<h3>Please fill out this field.<h3/>'; 
    emailMessage.classList.add('error');
    setTimeout(() => {
        emailMessage.remove()
    }, 1500);
    }
    else if (passwordInput.value === '') {
    passwordMessage.innerHTML = '<h3>Please fill out this field.<h3/>'; 
    passwordMessage.classList.add('error');
    setTimeout(() => {
        passwordMessage.remove()
    }, 1500);
    }
}

// document.addEventListener('scroll', scrollFunction)
// const navCon = document.querySelector('.nav-container')

// function scrollFunction(e) {
//     if (document.body.scrollTop = 300) {
//         navCon.style.backgroundColor = 'black'
//     }
//     if (document.body.scrollTop = 0){
//         navCon.style.backgroundColor = ''
//     }
    
// }


const navCon = document.querySelector('.nav-container')
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    navCon.classList.add('background-nav')
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




// import { createClient } from 'pexels';

// const client = createClient('563492ad6f917000010000019914c1a04330495cbcde1950ce4ddb0f');

// // All requests made with the client will be authenticated








