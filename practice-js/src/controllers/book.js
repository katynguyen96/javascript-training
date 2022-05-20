export default class Controller{
	constructor(model, view){
		this.model = model
		this.view = view

		this.model.bindBookListChanged(this.onBookListChanged)
		this.view.bindAddBook(this.handleAddBook)
		this.view.bindDeleteBook(this.handleDeleteBook)
		this.onBookListChanged(this.model.books)
	}

	onBookListChanged = (books) =>{
		this.view.display(books)
	}

	handleAddBook = (title, author, description, category, image)=>{
		this.model.addBook(title, author, description, category, image)
	}

	handleDeleteBook = id => {
        this.model.deleteBook(id)
    }
}
