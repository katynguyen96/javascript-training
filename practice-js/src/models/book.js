import fetch from '../helpers/service'
import path from '../constant'
export default class Model{
	constructor(){
		this.books = []
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
     * @param {number} id
     * @param {string} title
	 * @param {string} author
	 * @param {string} description
	 * @param {string} image 
     */

	//Add book
	async addBook(title, author, description, category, image){
		await fetch.create(`/${path.PATH}`,{
			id: new Date().getTime().toString(),
			title: title,
			author: author,
			description: description,
			category: category,
			image: image,
		})
	}

	/**
     * Use API url from fetch import and param id from controller in delete todo
     * @param {string} id 
     */

    async deleteBook(id) {
        await fetch.remove(`/${path.PATH}/${id}`)
    }

    /**
     * Use API url from fetch import and param id from controller in update todo
     * @param {string} id 
     * @param {string} updateText 
     */
    async updateBook(id, updateTitle, updateAuthor, updateDes, updateCate, updateImg) {
        await fetch.update(`/${path.PATH}/${id}`, {
            id: id,
            title: updateTitle,
            author: updateAuthor,
            description: updateDes,
            category: updateCate,
            image: updateImg
        })
    }
}

