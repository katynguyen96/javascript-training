export default class View{
	constructor(){
		this.inputTitle = document.getElementById('add-title')
		this.inputAuthor = document.getElementById('add-author')
		this.inputDescription = document.getElementById('add-des')
		this.inputImg = document.getElementById('add-img')
		this.booklist = document.getElementById("booklist")
		this.addBtn = document.getElementById("submit")
	}

	get _book(){
		return this.inputTitle.value
	}

	display(books){
		while(this.booklist.firstChild){
			this.booklist.removeChild(this.booklist.firstChild)
		}
		if(books.length !== 0){
			books.forEach(book=>{
				const cardBook = document.createElement("div")
				cardBook.id = book.id
	
				const title = document.createElement("h2")
				title.className = "book-title"
				title.textContent = book.title
	
				const bookBody = document.createElement("div");
				bookBody.className = "body";
	
				const img = document.createElement("div")
				img.className = "book-img"
				// img.style.backgroundImage = url(book.image)
	
				const des = document.createElement("div")
				des.className = "book-des"
				des.textContent = book.description
	
				const author = document.createElement("h2")
				author.className = "book-author"
				author.textContent = book.author
	
				bookBody.append(title, author, des)
	
				const btnDelete = document.createElement("button")
				btnDelete.className = "delete-btn"
				btnDelete.textContent = "Delete"
	
				cardBook.append(img, bookBody, btnDelete);
				this.booklist.appendChild(cardBook)
			})
		}	
	}

	bindAddBook(handler){
		this.addBtn.addEventListener('click', e => {
            e.preventDefault()
                if (this._book) {
                    handler(this._book)
                }
        })
	}

	// handleAddBook(title, author, description, image){
	// 	this.handleBook(title, author, description, image)
	// }

	bindDeleteBook(handler) {
        this.booklist.addEventListener('click', e => {
            e.preventDefault()
            if (e.target.className === 'delete-btn') {
                const id = parseInt(e.target.parentElement.id)
                handler(id)
            }
        })
    }
}
