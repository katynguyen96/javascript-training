export default class Model{
	constructor(){
		this.books = JSON.parse(localStorage.getItem('books')) || []
	}

	bindBookListChanged(callback){
		this.onBookListChanged = callback
	}

	_commit(books){
		this.onBookListChanged(books)
		localStorage.setItem('books', JSON.stringify(books))
	}

	//Add book
	addBook(title, author, description, image){
		const book = {
			id: this.books.length > 0 ? this.books[this.books.length - 1].id + 1 : 1,
            title: title,
            author: author,
            description: description,
            image: image,
		}

		this.books.push(book)
		this._commit(this.books)
	}

	deleteBook(id) {
        this.books = this.books.filter(books => books.id !== id)
        this._commit(this.books)
    }
}

