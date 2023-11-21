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

//Shows Library on page
// function showLibrary() {
//         myLibrary.map((book, id) => {
        
//         const bookCard = document.createElement('div');
//         bookCard.classList = 'bookCard';
        
//         function getReadStatus() {
//             if(book.readStatus === true) {
//                 return 'READ'
//             } else {
//                 return 'NOT READ YET'
//             }
//         }
        
//         const content = `
//             <p class="name">${book.name}</p>
//             <p class="author">${book.author}</p>
//             <p class="pages">${book.pages}</p>
//             <button type="button" id="btn-${id}" class="isRead">${getReadStatus()}</button>
//         `;

//         bookCard.innerHTML += content;

//         mainContent.appendChild(bookCard)
//     })
// }

// showLibrary();

function setButtonRead(book) {
    const btnIsRead = document.getElementById(`btn-${myLibrary.indexOf(book)}`);
    console.log(btnIsRead)
    btnIsRead.addEventListener("click", () => {
        console.log(book.readStatus);
        if(book.readStatus == true) {
            btnIsRead.innerHTML = "READ";
            book.readStatus = false;
        } else if(book.readStatus == false) {
            btnIsRead.innerHTML = "NOT READ YET";
            book.readStatus = true;
        }
    })
}

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
        <button type="button" id="btn-${myLibrary.indexOf(newBook)}" class="isRead">${getReadStatus()}</button>
    `;

    bookCard.innerHTML += content;

    mainContent.appendChild(bookCard);

    setButtonRead(newBook);
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



