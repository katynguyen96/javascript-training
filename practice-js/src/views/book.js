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

	editBook(book){
		const eidt = document.getElementById('update-form')
		update.className = 'update-form'
		update.style.display = 'none'

		const popup = document.createElement('div')
		popup.className = 'popup'

		const editTitle = document.createElement('h2')
		editTitle.className = 'form-title'
		editTitle.textContent = 'Update Book'

		const updateFieldTT = document.createElement('div')
		updateFieldTT.className = 'field'

		const updateFieldDes = document.createElement('div')
		updateFieldDes.className = 'field'

		const updateFieldCate = document.createElement('div')
		updateFieldCate.className = 'field'

		const updateFieldAu = document.createElement('div')
		updateFieldAu.className = 'field'

		const updateFieldImg = document.createElement('div')
		updateFieldImg.className = 'field'

		const labelUpdateTT = document.createElement('label')
		labelUpdateTT.textContent = 'Title'
		const inputUpdateTT = document.createElement('input')
		inputUpdateTT.className = 'update-title'

		const labelUpdateDes = document.createElement('label')
		labelUpdateDes.textContent = 'Description'
		const inputUpdateDes = document.createElement('textarea')
		inputUpdateDes.className = 'update-des'

		const labelUpdateCate = document.createElement('label')
		labelUpdateCate.textContent = 'Categories'
		const inputUpdateCate = document.createElement('select')
		inputUpdateCate.className = 'update-cate'

		const labelUpdateAu = document.createElement('label')
		labelUpdateAu.textContent = 'Author'
		const inputUpdateAu = document.createElement('input')
		inputUpdateAu.className = 'update-author'

		const labelUpdateImg = document.createElement('label')
		labelUpdateTmg.textContent = 'Image Link'
		const inputUpdateImg = document.createElement('input')
		inputUpdateImg.className = 'update-image'

		const btnUpdate = document.createElement('button')
		btnUpdate.textContent = 'Update'
		btnUpdate.className = 'btn-update'

		const btnClose = document.createElement('button')
		btnClose.textContent = 'Close'
		btnClose.className = "btn-close"

		updateFieldTT.append(labelUpdateTT, inputUpdateTT)
		updateFieldDes.append(labelUpdateDes, inputUpdateDes)
		updateFieldCate.append(labelUpdateCate, inputUpdateCate)
		updateFieldAu.append(labelUpdateAu, inputUpdateAu)
		updateFieldImg.append(labelUpdateImg, inputUpdateImg)

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
