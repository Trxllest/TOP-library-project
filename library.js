const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 320, true);

const myLibrary = [];
const contentArea = document.querySelector('.project-cards');
const newBookBtn = document.querySelector('.hbtn');
const dialogBox = document.getElementById('bookDialog');
const addButton = document.getElementById('submitBtn');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById("pages");
const checkRead = document.getElementById('read');
const cancelAdd = document.getElementById('cancelBtn');

function Book(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        const txt = this.read ? 'read.' : 'not read.';
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + txt;
    }  
}

function CreateCard(book, index) {
    // .project-card>p.title+proj-content
    let card = document.createElement('div');
    card.classList.add('project-card');
    contentArea.appendChild(card);

    let cTitle = document.createElement('p');
    cTitle.classList.add('title');
    card.appendChild(cTitle);
    cTitle.innerText = book.title;

    let cContent = document.createElement('div');
    cContent.classList.add('proj-content');
    card.appendChild(cContent);
    cContent.innerText = book.info();

    let readToggle = document.createElement('button');
    readToggle.textContent = 'Read';
    readToggle.addEventListener('click', () => {
        book.read ? book.read = false : book.read = true;
        cContent.innerText = book.info();
    });
    card.appendChild(readToggle);

    let deleteBook = document.createElement('button');
    deleteBook.textContent = 'Remove';
    deleteBook.addEventListener('click', () => {
        // Remove the book from the library and the DOM
        myLibrary.splice(index, 1);
        contentArea.removeChild(card);
        console.log(myLibrary);
    });
    card.appendChild(deleteBook);
}

function AddBook(book) {
    myLibrary.push(book)
    CreateCard(book, myLibrary.length - 1);
}


newBookBtn.addEventListener('click', () => {
    dialogBox.showModal();
});


const errorMessage = document.getElementById('error-message');

function clearErrorMessage() {
    errorMessage.textContent = '';
}

function displayErrorMessage(message) {
    errorMessage.textContent = message;
}

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (formTitle.value && formAuthor.value && formPages.value) {
        console.log(formTitle.value);
        let isRead = checkRead.checked 
        let newBook = new Book(formTitle.value, formAuthor.value, formPages.value, isRead);
        AddBook(newBook);
        console.log('got here');
        dialogBox.close();
        formTitle.value = '';
        formAuthor.value = '';
        formPages.value = '';
        checkRead.checked = false;
    } else {
        console.log('got here instead');
    };
});

cancelAdd.addEventListener('click', () => {
    dialogBox.close();
});
