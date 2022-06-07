export default class Controller{
	constructor(model, view){
		this.model = model
		this.view = view

		this.model.bindBookListChanged(this.onBookListChanged)
		this.view.bindAddBook(this.handleAddBook)
		this.view.bindDeleteBook(this.handleDeleteBook)
		this.view.bindSearchBook(this.handleSearchBook)
		this.view.bindFilterBook(this.handleFilterBook)
		this.onBookListChanged(this.model.getBook)
		this.view.bindUpdateBook(this.handleUpdateBook)
	}

	init = async () =>{
		const books = await this.model.getBook()
		console.log("21asd", books)
		this.view.display(books)
	}

	onBookListChanged = books =>{
		this.view.display(books)
	}

	handleAddBook = async (title, author, description, category, image)=>{
		const books = await this.model.addBook(title, author, description, category, image)
		this.view.display(books)
	}

	handleUpdateBook = async (id, book)=>{
		const books = await this.model.updateBook(id, book)
		this.view.display(books)
	}

	handleDeleteBook = async id => {
        const books = await this.model.deleteBook(id)
        this.view.display(books)
    }

    handleSearchBook = async title => {
    	const books = await this.model.searchBook(title)
    	this.view.display(books)
    }

    handleFilterBook = async category =>{
    	const books = await this.model.filterBook(category)
    	this.view.display(books)
    }
}
