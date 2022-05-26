export default class View{
	constructor(){
		this.inputTitle = document.getElementById('add-title')
		this.inputAuthor = document.getElementById('add-author')
		this.inputDescription = document.getElementById('add-des')
		this.inputImg = document.getElementById('add-img')
		this.inputCate = document.getElementById('add-cate')
		this.booklist = document.getElementById('booklist')
		this.addBtn = document.getElementById("submit")
	}

	display(getBook){
		getBook().then(book=>{
			if(book.length !== 0){
				book.forEach(book=>{
				// console.log(book)
					const cardBook = document.createElement("div")
					cardBook.id = book.id
					cardBook.className = "card-book"
		
					const title = document.createElement("h2")
					title.className = "book-title"
					title.textContent = book.title
		
					const bookBody = document.createElement("div");
					bookBody.className = "body";
		
					const img = document.createElement("div")
					img.className = "book-img"
					img.style.backgroundImage = `url(${book.image})`
		
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

					const btnEdit = document.createElement("button")
					btnEdit.className = "edit-btn"
					btnEdit.textContent = "Edit"
		
					cardBook.append(img, bookBody, btnDelete, btnEdit);
					this.booklist.appendChild(cardBook)
				})
			}	
		})
	}

	bindAddBook(handler){
		this.addBtn.addEventListener('click', e => {
            // e.preventDefault()
            handler(this.inputTitle.value,
                this.inputAuthor.value, 
                this.inputDescription.value,
                this.inputCate.value,
                this.inputImg.value
            )
        })
	}

	bindDeleteBook(handler) {
        this.booklist.addEventListener('click', e => {
            // e.preventDefault()
            if (e.target.className === 'delete-btn') {
                const id = parseInt(e.target.parentElement.id)
                handler(id)
            }
        })
    }

    bindBookListChanged(callback){
		this.onBookListChanged = callback
	}
}
