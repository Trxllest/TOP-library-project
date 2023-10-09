const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 320, true);

// console.log(theHobbit.info()); // Output: "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// console.log(harryPotter.info());

const myLibrary = [theHobbit, harryPotter];
const contentArea = document.querySelector('.project-cards');

function Book(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        const txt = this.read ? 'read' : 'not read';
        return this.title + ' by ' + this.author + ', ' + this.pages + 'pages, ' + txt;
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