export default class View{
	constructor(){
		this.ENTER_KEY = 13;
		this.inputTitle = document.getElementById('add-title')
		this.inputAuthor = document.getElementById('add-author')
		this.inputDescription = document.getElementById('add-des')
		this.inputImg = document.getElementById('add-img')
		this.booklist = document.getElementById("booklist")
	}

	get _book(){
		return this.inputTitle.value
	}

	display(books){
		while(this.booklist.firstChild){
			this.booklist.removeChild(this.booklist.firstChild)
		}
		if(books.length !== 0){
			books.map(book=>{
				const cardBook = document.createElement("div")
				cardBook.id = book.id
	
				const title = document.createElement("h2")
				title.className = "book-title"
	
				const bookBody = document.createElement("div");
				bookBody.className = "body";
	
				const img = document.createElement("div")
				img.className = "book-img"
				// img.style.backgroundImage = url(book.image)
	
				const des = document.createElement("div")
				des.className = "book-des"
	
				const author = document.createElement("h2")
				author.className = "book-author"
	
				bookBody.append(title, author)
	
				const btnDelete = document.createElement("button")
				btnDelete.className = "delete-btn"
				btnDelete.textContent = "Delete"
	
				cardBook.append(img, bookBody, btnDelete);
				this.booklist.appendChild(cardBook)
			})
		}
		
	}

	bindAddBook(handler){
		this.inputTitle.addEventListener('keyup', e => {
            e.preventDefault()

            if (e.which === this.ENTER_KEY) {
                if (this._book) {
                    handler(this._book)
                }
            }
        })
	}

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
