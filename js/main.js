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

document.addEventListener('DOMContentLoaded', openModal)
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












