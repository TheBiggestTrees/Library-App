const myLibrary = []

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

function setButtonRead(book) {
    const btnIsRead = document.getElementById(`btn-${myLibrary.indexOf(book)}`);

    btnIsRead.addEventListener("click", () => {
        if(book.readStatus == true) {
            btnIsRead.innerHTML = "READ";
            book.readStatus = false;
        } else if(book.readStatus == false) {
            btnIsRead.innerHTML = "NOT READ YET";
            book.readStatus = true;
        }
    })
}

function setDelBtn(book) {
    const delBtn = document.getElementById(`closeBtn-${myLibrary.indexOf(book)}`);

    const bookCard = document.getElementById(`book-${myLibrary.indexOf(book)}`)
    delBtn.addEventListener("click", () => {
        bookCard.remove();
        myLibrary.splice(`${myLibrary.indexOf(book)}`, 1);
    })
}

const addBookToLibrary = () => {
    // do stuff here
    const name = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const isRead = isReadInput.checked;

    if (!name || !author || !pages) {
        return console.log("Enter Stuff")
    } 

    const newBook = new Book(name, author, pages, isRead);
    
    myLibrary.push(newBook);

    const bookCard = document.createElement('div');
    bookCard.classList = 'bookCard';
    bookCard.setAttribute('id',`book-${myLibrary.indexOf(newBook)}`);
    
    function getReadStatus() {
        if(newBook.readStatus === true) {
            return 'READ'
        } else {
            return 'NOT READ YET'
        }
    }
    
    const content = `
        <img class="closeBtn" id="closeBtn-${myLibrary.indexOf(newBook)}" src="./close.png" alt="close">
        <p class="name">${newBook.name}</p>
        <p class="author">${newBook.author}</p>
        <p class="pages">${newBook.pages}</p>
        <button type="button" id="btn-${myLibrary.indexOf(newBook)}" class="isRead">${getReadStatus()}</button>
    `;

    bookCard.innerHTML += content;

    mainContent.appendChild(bookCard);

    setButtonRead(newBook);
    setDelBtn(newBook);

    dialog.close();

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    isReadInput.checked = false;

}

addButton.addEventListener("click", () => {
    dialog.showModal();
})

cancelButton.addEventListener("click", () => {
    dialog.close();
})

bookAddBtn.addEventListener("click", () => {
    addBookToLibrary();
})



