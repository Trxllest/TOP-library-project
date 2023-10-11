const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 320, true);

// console.log(theHobbit.info()); // Output: "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// console.log(harryPotter.info());

const myLibrary = [theHobbit, harryPotter];
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

function CreateCard() {
    // .project-card>p.title+proj-content
    let card = document.createElement('div');
    card.classList.add('project-card');
    contentArea.appendChild(card);
    let cTitle = document.createElement('p');
    cTitle.classList.add('title');
    card.appendChild(cTitle);
    let cContent = document.createElement('div');
    cContent.classList.add('proj-content');
    card.appendChild(cContent);

    // cTitle.textContent = 'testwsdgsgnasC'
}

function AddBook(book) {
    myLibrary.push(book)
    CreateCard();
    let card = contentArea.lastElementChild;
    let title = card.firstElementChild;
    let text = card.lastElementChild;
    title.textContent = book.title;
    text.textContent = book.info();
}

function CheckBooks(library) {
    library.forEach(AddBook);
}

newBookBtn.addEventListener('click', () => {
    dialogBox.showModal();
});

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

document.addEventListener("DOMContentLoaded", CheckBooks(myLibrary));