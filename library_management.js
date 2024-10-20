//Task 1
class Book {
// Initializes the properties in the Book class
    constructor(title, author, isbn, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this._isAvailable = isAvailable;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
// Getter for the availabilty status of a book
    get isAvailable() {
        return this._isAvailable;
    }
// Setter for the availability status of a book
    set isAvailable(status) {
        this._isAvailable = status;
    }
}

//Task 2
class Section {
    //Initializes the properties of the Section class
    constructor(name) {
        this.name = name;             
        this.books = [];              
    }

    //Adds a Book object to the books array
    addBook(book) {
        if (book instanceof Book) {   //Checks to see if the passed object is a Book
            this.books.push(book);     //Adds the book to the array
        } else {
            console.error("Invalid book. Please provide a Book object.");
        }
    }

    //Gets the total number of available books in the section
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    //Lists all books in the section with title and availability
    listBooks() {
        return this.books.map(book => {
            return `${book.title} - ${book.isAvailable ? "Available" : "Borrowed"}`;
        }); 
    }
}