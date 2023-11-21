const myLibrary = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: false
    }
]

const dialog = document.querySelector("dialog");
const addButton = document.getElementById('openModal');
const cancelButton = document.getElementById('closeModal')

// const titleInput = document.querySelector('');

function Book(name, author, pages, readStatus) {
    //constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

const addBookToLibrary = () => {
    // do stuff here
    const name = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const isRead = isReadInput.value;
}

addButton.addEventListener("click", () => {
    dialog.showModal();
})

cancelButton.addEventListener("click", () => {
    dialog.close();
})