export default class Controller{
	constructor(model, view){
		this.model = model
		this.view = view

		this.model.bindBookListChanged(this.onBookListChanged)
		this.view.bindAddBook(this.handleAddBook)
		this.view.bindDeleteBook(this.handleDeleteBook)
		this.onBookListChanged(this.model.getBook)
		this.view.bindUpdateBook(this.handleUpdateBook)
	}

	init = async () =>{
		const books = await this.model.getBook()
		this.view.display(books)
	}

	onBookListChanged = books =>{
		this.view.display(books)
	}

	handleAddBook = async (title, author, description, category, image)=>{
		const books = await this.model.addBook(title, author, description, category, image)
		this.view.display(books)
	}

	handleUpdateBook = async (id, title, author, description, category, image)=>{
		const books = await this.model.updateBook(id, title, author, description, category, image)
		this.view.display(books)
	}

	handleDeleteBook = async id => {
        const books = await this.model.deleteBook(id)
        this.view.display(books)
    }
}
