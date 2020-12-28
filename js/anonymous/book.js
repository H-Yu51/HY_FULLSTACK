

//constructor
function Book(isbn, title, author){
    this.isbn = isbn;
    this.title = title;
    this.author = author;
}

let theHabbit = new Book('0-394-07122-4','The Habbit','J.R.R Tolkien');


console.log(theHabbit.isbn)
