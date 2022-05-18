import fetch from '../helpers/service'
import path from '../constant'
export default class Model{
	constructor(){
		this.books = []
	}

	bindBookListChanged(callback){
		this.onBookListChanged = callback
	}

	_commit(books){
		this.onBookListChanged(books)
		localStorage.setItem('books', JSON.stringify(books))
	}

	/**
     * 
     * @param {string} id
     * @param {string} title
	 * @param {string} author
	 * @param {string} description
	 * @param {string} image 
     */
	//Add book
	async addBook(title, author, description, image){
		await fetch.create(`/${path.PATH}`,{
			id: new Date().getTime().toString(),
			title: title,
			author: author,
			description: description,
			image: image,
		})
	}

	async getBook(){
		const book = await fetch.get(`/${path.PATH}`)
		return book
	}

	/**
     * 
     * @param {string} id 
     */

	deleteBook(id) {
        this.books = this.books.filter(books => books.id !== id)
        this._commit(this.books)
    }
}

