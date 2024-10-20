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
        if (book instanceof Book) {   
            this.books.push(book);     
        } else {
            console.error("Error. Please provide a book");
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
    //Calculates the total available books
    calculateTotalBooksAvailable() {
        let totalAvailable = 0; 

        for (let book of this.books) {
            if (book.isAvailable) {
                totalAvailable++; 
            }
        }

        return totalAvailable; 
    }
}

//Task 3
class Patron {
    //Initializes the properties of the Patron class
    constructor(name) {
        this.name = name;                  
        this.borrowedBooks = [];          
    }

    //Checks to see if a book is available to borrow 
    borrowBook(book) {
        if (book.isAvailable) {            
            this.borrowedBooks.push(book); 
            book.isAvailable = false;       
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`"${book.title}" is currently unavaible to be borrowed.`);
        }
    }

    //Returns a book that was borrowed
    returnBook(book) {
        let found = false; 

        const updatedBorrowedBooks = [];

        //Loops through the array of borrowedBooks to find the book
        for (let i = 0; i < this.borrowedBooks.length; i++) {
            if (this.borrowedBooks[i] === book) { 
                found = true; 
                book.isAvailable = true;            
                console.log(`${this.name} returned "${book.title}".`);
            } else {
                updatedBorrowedBooks.push(this.borrowedBooks[i]);
            }
        }

        //Updates the borrowedBooks to the updatedBorrowedBooks
        this.borrowedBooks = updatedBorrowedBooks;
     
        if (!found) {
            console.log(`Error! "${book.title}" was not borrowed `);
        }
    }
}

//Task 4
class VIPPatron extends Patron {
    constructor(name) {
        super(name);                      
        this.priority = true;            
    }

    //Overrides borrowBook method
    borrowBook(book) {
        if (book.isAvailable) {                
            this.borrowedBooks[this.borrowedBooks.length] = book; 
            book.isAvailable = false;           
            console.log(`VIP Member: ${this.name}  borrowed "${book.title}".`);
        } else {
            console.log(`"${book.title}" is currently unavailable to be borrowed.`);
        }
    }
}

//Task 5 (SEE SECTION CLASS)



