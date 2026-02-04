const library = {
	name: 'City Library',
	books: [],
	addBook(title, author, isbn){
		const book = {
			title: title,
			author: author,
			isbn: isbn
		};
	this.books.push(book);

	},


	searchByAuthor(authorName){
		return this.books.filter(book => book.author == authorName);
	}



};

library.addBook('JavaScript: The Good Parts', 'Douglas Crockford', '346436');
library.addBook('Goldilocks', 'Emilio Lopez', '234235');

console.log(library.books);
console.log(library.searchByAuthor('Emilio Lopez'));
