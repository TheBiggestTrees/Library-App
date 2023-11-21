const myLibrary = [
    {
        name: "Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        readStatus: false
    }
]

const mainContent = document.querySelector('.mainContent')

const dialog = document.querySelector("dialog");
const addButton = document.getElementById('openModal');
const cancelButton = document.getElementById('closeModal');
const bookAddBtn = document.getElementById('bookAdd');

const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const isReadInput = document.getElementById('isReadInput');

function Book(name, author, pages, readStatus) {
    //constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

//Shows Library on page
myLibrary.map((book) => {
    
    const bookCard = document.createElement('div');
    bookCard.classList = 'bookCard';
    
    function getReadStatus() {
        if(book.readStatus === true) {
            return 'READ'
        } else {
            return 'NOT READ YET'
        }
    }
    
    const content = `
        <p class="name">${book.name}</p>
        <p class="author">${book.author}</p>
        <p class="pages">${book.pages}</p>
        <button type="button" class="isRead">${getReadStatus()}</button>
    `;

    bookCard.innerHTML += content;

    mainContent.appendChild(bookCard)
})

const addBookToLibrary = () => {
    // do stuff here
    const name = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const isRead = isReadInput.checked;

    const newBook = new Book(name, author, pages, isRead);
    
    myLibrary.push(newBook);

    const bookCard = document.createElement('div');
    bookCard.classList = 'bookCard';
    
    function getReadStatus() {
        if(newBook.readStatus === true) {
            return 'READ'
        } else {
            return 'NOT READ YET'
        }
    }
    
    const content = `
        <p class="name">${newBook.name}</p>
        <p class="author">${newBook.author}</p>
        <p class="pages">${newBook.pages}</p>
        <button type="button" class="isRead">${getReadStatus()}</button>
    `;

    bookCard.innerHTML += content;

    mainContent.appendChild(bookCard)
}

addButton.addEventListener("click", () => {
    dialog.showModal();
})

cancelButton.addEventListener("click", () => {
    dialog.close();
})

bookAddBtn.addEventListener("click", () => {
    addBookToLibrary();
    dialog.close();
})

myLibrary[0].readStatus = true;

console.log(myLibrary[0].readStatus)