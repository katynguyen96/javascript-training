import fetch from '../helpers/service'
import path from '../constant'
export default class Model{
    books = []
	constructor(){}

    // bindBookListChanged(callback){
    //     this.onBookListChanged = callback
    // }

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
     * @param {string} id
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
        await fetch.create(`/${path.PATH}`, bookAdded)
        this.books.push(bookAdded)
        return this.books
	}

	/**
     * Use API url from fetch import and param id from controller in delete todo
     * @param {string} id 
     */

     deleteBook = async(id) => {
        const index = this.books.findIndex(item => item.id === id)
        const book = this.books[index]
        await fetch.remove(`/${path.PATH}/${id}`, book)
        this.books.splice(index, 1)
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
        await fetch.update(`/${path.PATH}/${id}`, bookUpdate)
        this.books.splice(index, 1, bookUpdate)
        return this.books
    }

    /**
     * Search all books that match 
     * @returns {array} book
     */
    searchBook = async(title)=>{
        const book = await fetch.get(`/${path.PATH}?q=${title}`)
        this.books = book
        return book
    }

    /**
     * Filter all book that match
     * @returns {array} todos
     */
    filterBook = async(category) =>{
        const book = await fetch.get(`/${path.PATH}?category=${category}`)
        this.books = book
        return book
    }
}

