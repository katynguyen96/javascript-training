import fetch from '../helpers/service'
import path from '../constant'
export default class Model{
    books = []
	constructor(){
		// this.books = []
	}

    bindBookListChanged(callback){
        this.onBookListChanged = callback
    }

	/**
   * Use API url from fetch import in read data
   * @returns {array} books.
   */
     getBook = async()=>{
		const book = await fetch.get(`/${path.PATH}`)
        this.books = book
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
    addBook = async(title, author, description, category, image) =>{
        const bookAdded = {
			id: new Date().getTime().toString(),
			title: title,
			author: author,
			description: description,
			category: category,
			image: image,
		}
        this.books.push(bookAdded)
        await fetch.create(`/${path.PATH}`, bookAdded)
        return this.books
	}

	/**
     * Use API url from fetch import and param id from controller in delete todo
     * @param {string} id 
     */

     deleteBook = async(id) => {
        const index = this.books.findIndex(item => item.id === id)
        const book = this.books[index]
        this.books.splice(index, 1)
        await fetch.remove(`/${path.PATH}/${id}`, book)
        return this.books
    }

    /**
     * Use API url from fetch import and param id from controller in update todo
     * @param {string} id 
     * @param {string} updateTitle 
     */
    updateBook = async(id, updateTitle, updateAuthor, updateDes, updateCate, updateImg) =>{
        const index = this.books.findIndex(item => item.id===id)
        const bookUpdate =  {
            id,
            title: updateTitle,
            author: updateAuthor,
            description: updateDes,
            category: updateCate,
            image: updateImg
         }
        this.books.splice(index, 1, bookUpdate)
        await fetch.update(`/${path.PATH}/${id}`, bookUpdate)
        return this.books
    }
}

