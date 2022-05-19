import fetch from '../helpers/service'
import path from '../constant'
export default class Model{
	constructor(){
		this.books = []
	}

	bindBookListChanged(callback){
		this.onBookListChanged = callback
	}

	/**
     * 
     * @param {number} id
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
		// this.books.push()
	}

	/**
   * Use API url from fetch import in read data
   * @returns {array} books.
   */
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
    }
}

