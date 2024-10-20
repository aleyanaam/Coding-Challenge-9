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