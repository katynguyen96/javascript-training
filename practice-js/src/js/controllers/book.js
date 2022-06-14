export default class Controller{
	constructor(model, view){
		this.model = model
		this.view = view

		// Explicit this binding
		this.model.bindBookListChanged(this.onBookListChanged)
		this.view.bindAddBook(this.handleAddBook)
		this.view.bindDeleteBook(this.handleDeleteBook)
		this.view.bindSearchBook(this.handleSearchBook)
		this.view.bindFilterBook(this.handleFilterBook)
		this.view.bindUpdateBook(this.handleUpdateBook)
	}

	 // Display initial books
	init = async () =>{
		const books = await this.model.getBook()
		this.view.display(books)
	}

	/**
     * Use all the param from views call to models 
     * @param {string} title 
     * @param {string} author
     * @param {string} description
     * @param {string} category
     * @param {string} image
     */
	handleAddBook = async (title, author, description, category, image)=>{
		const books = await this.model.addBook(title, author, description, category, image)
		this.view.display(books)
	}

	/**
     * Use param from views call to models 
     * @param {string} id 
     * @param {string} title 
     * @param {string} author 
     * @param {string} description
     * @param {string} category
     * @param {string} image 
     */
	handleUpdateBook = async (id, title, author, description, category, image)=>{
		const books = await this.model.updateBook(id, title, author, description, category, image)
		this.view.display(books)
	}

	 /**
    * Use id from views call to models 
    * @param {string} id 
    */
	handleDeleteBook = async id => {
        const books = await this.model.deleteBook(id)
        this.view.display(books)
    }

    /**
    * Use title from views call to models 
    * @param {string} title 
    */
    handleSearchBook = async title => {
    	const books = await this.model.searchBook(title)
    	this.view.display(books)
    }

    /**
    * Use category from views call to models 
    * @param {string} category 
    */
    handleFilterBook = async category =>{
    	const books = await this.model.filterBook(category)
    	this.view.display(books)
    }
}
