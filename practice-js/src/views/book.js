export default class View{
	constructor(){
		this.inputTitle = document.getElementById('add-title')
		this.inputAuthor = document.getElementById('add-author')
		this.inputDescription = document.getElementById('add-des')
		this.inputImg = document.getElementById('add-img')
		this.inputCate = document.getElementById('add-cate')
		this.booklist = document.getElementById('booklist')
		this.updateForm = document.getElementById('update-form')
		this.addBtn = document.getElementById("submit")
		this.formUpdate = document.getElementById('update-form')
	}

	display(books){
			if(books.length !== 0){
				const wrapper = document.getElementsByClassName("booklist")
				wrapper[0].innerHTML = ""

				books.forEach(book=>{
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

					btnEdit.addEventListener('click',()=>{
						const overlay = document.getElementById('overlay')
						const updateForm = document.getElementById("update-form")
						this.editBook(booklist)
						updateForm.style.visibility = "visible"
						overlay.style.opacity = "1"
						// updateForm.style.opacity = '1'
					})
					const formUpdate = document.getElementById("update-form")
					cardBook.append(img, bookBody, btnDelete, btnEdit);
					this.booklist.appendChild(cardBook)
				})
			}	
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

	editBook(booklist){
		const update = document.getElementById('update-form')
		update.className = 'update-form'
		// update.id = booklist.id
		// update.style.opacity = '0'

		const popup = document.createElement('div')
		popup.className = 'popup'
		update.style.visibility = 'hidden'
		popup.id = 'popup'


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
		inputUpdateTT.id = 'update-title'

		const labelUpdateDes = document.createElement('label')
		labelUpdateDes.textContent = 'Description'
		const inputUpdateDes = document.createElement('textarea')
		inputUpdateDes.className = 'update-des'
		inputUpdateDes.id = 'update-des'

		const labelUpdateCate = document.createElement('label')
		labelUpdateCate.textContent = 'Categories'
		const inputUpdateCate = document.createElement('select')
		inputUpdateCate.className = 'update-cate'
		let option = document.createElement('option')
		option.value = "Cooking"
		option.text = "Cooking"
		
		let option1 = document.createElement('option')
		option1.value = "Comic"
		option1.text = "Comic"
		// inputUpdateCate.add(option1)
		let option2 = document.createElement('option')
		option2.value = "Horror"
		option2.text = "Horror"
		// inputUpdateCate.add(option2)
		let option3 = document.createElement('option')
		option3.value = "Bussiness"
		option3.text = "Bussiness"
		// inputUpdateCate.add()
		inputUpdateCate.add(option)
		inputUpdateCate.id = 'update-cate'

		const labelUpdateAu = document.createElement('label')
		labelUpdateAu.textContent = 'Author'
		const inputUpdateAu = document.createElement('input')
		inputUpdateAu.className = 'update-author'
		inputUpdateAu.id = 'update-author'

		const labelUpdateImg = document.createElement('label')
		labelUpdateImg.textContent = 'Image Link'
		const inputUpdateImg = document.createElement('input')
		inputUpdateImg.className = 'update-image'
		inputUpdateImg.id = 'update-image'

		const btnUpdate = document.createElement('button')
		btnUpdate.textContent = 'Update'
		btnUpdate.className = 'btn-update'


		btnUpdate.addEventListener('click',()=>{
			const overlay = document.getElementById('overlay')
			const updateForm = document.getElementById('update-form')
			const updateBtn = document.getElementById('update-form-btn')
			updateForm.style.visibility = 'hidden'
			overlay.style.opacity = '0'
		})

		const btnClose = document.createElement('button')
		btnClose.textContent = 'Close'
		btnClose.className = "btn-close"

		btnClose.addEventListener('click',()=>{
			const overlay = document.getElementById('overlay')
			const updateForm = document.getElementById('update-form')
			const updateBtn = document.getElementById('update-form-btn')
			updateForm.style.visibility = 'hidden'
			overlay.style.opacity = '0'
			popup.remove()
			updateBtn.remove()
		})

		updateFieldTT.append(labelUpdateTT, inputUpdateTT)
		updateFieldDes.append(labelUpdateDes, inputUpdateDes)
		updateFieldCate.append(labelUpdateCate, inputUpdateCate)
		updateFieldAu.append(labelUpdateAu, inputUpdateAu)
		updateFieldImg.append(labelUpdateImg, inputUpdateImg)

		const btn = document.createElement('div')
		btn.className = "update-form-btn"
		btn.id = "update-form-btn"


		btn.append(btnUpdate, btnClose)
		popup.append(editTitle, updateFieldTT, updateFieldDes, updateFieldCate, updateFieldAu, updateFieldImg)
		update.append(popup, btn)
	}

	bindUpdateBook(handler){
		this.booklist.addEventListener('click', e=>{
			if(e.target.className === 'edit-btn'){
				const id = e.target.parentElement.id
				// console.log(id)
				this.formUpdate.addEventListener('click',e=>{
					this.updateTitle = document.getElementById('update-title')
					this.updateAuthor = document.getElementById('update-author')
					this.updateDes = document.getElementById('update-des')
					this.updateImg = document.getElementById('update-image')
					this.updateCate = document.getElementById('update-cate')
					if(e.target.className === 'btn-update'){
						console.log(id)
						handler(id, 
						this.updateTitle.value,
						this.updateAuthor.value,
						this.updateDes.value,
						this.updateCate.value,
						this.updateImg.value)
						const popup = document.getElementById('popup')
						popup.remove()
						const updateForm = document.getElementById('update-form-btn')
						updateForm.remove()
					}
				})
			}
		})
	}

	bindDeleteBook(handler) {
        this.booklist.addEventListener('click', e => {
            // e.preventDefault()
            if (e.target.className === 'delete-btn') {
                const id = e.target.parentElement.id
                handler(id)
            }
        })
    }
}
