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
		this.search = document.getElementById('search-btn')
		this.inputSearch = document.getElementById('search-input')
		this.checkCate = document.getElementsByClassName('check')
		this.ENTER_KEY = 13
	}

	_resetInput(){
		this.inputTitle.value = ""
		this.inputAuthor.value = ""
		this.inputDescription.value = ""
		this.inputImg.value = ""
	}

	closeModalAdd() {
		const addModal = document.getElementById("add-book-page")
		const overlay = document.getElementById("overlay")
		addModal.style.visibility = "hidden"
		overlay.style.opacity = "0"
	}

	closeModalDelete() {
        const deleteForm = document.getElementById('delete-form')
        const overlay = document.getElementById("overlay")
		overlay.style.opacity = "0"
       	deleteForm.style.visibility = "hidden"
	}

	// Render Item
	display(books){
			if(books.length !== 0){
				const wrapper = document.getElementsByClassName("booklist")
				wrapper[0].innerHTML = ""

				books.forEach(book=>{
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
					const icon1 = document.createElement("i")
					icon1.className = "fa-solid fa-trash-can"
					btnDelete.className = "delete-btn"
					btnDelete.textContent = "Delete"
					btnDelete.append(icon1)

					const btnEdit = document.createElement("button")
					btnEdit.className = "edit-btn"
					const icon = document.createElement("i")
					icon.className = "fa-solid fa-pen"
					btnEdit.textContent = "Edit"
					btnEdit.append(icon)

					btnEdit.addEventListener('click',()=>{
						const overlay = document.getElementById('overlay')
						const updateForm = document.getElementById("update-form")
						this.editModal(book)
						updateForm.style.visibility = "visible"
						overlay.style.opacity = "1"
					})
					cardBook.append(img, bookBody, btnDelete, btnEdit);
					this.booklist.appendChild(cardBook)
				})
			} 	
	}

	bindAddBook(handler){
		const addNewBook = document.getElementById("add-new-book")
		addNewBook.addEventListener("click",()=>{
			const addModal = document.getElementById("add-book-page")
			const overlay = document.getElementById("overlay")
			addModal.style.visibility = "visible"
			overlay.style.opacity = "1"
		})
		const closeModal = document.getElementById("close-modal")
		closeModal.addEventListener("click",()=>{
			this.closeModalAdd()
		})
		const closeModalIcon = document.getElementById("modal-close-icon")
		closeModalIcon.addEventListener("click",()=>{
			this.closeModalAdd()
		})
		this.addBtn.addEventListener('click', e => {
            handler(this.inputTitle.value,
                this.inputAuthor.value, 
                this.inputDescription.value,
                this.inputCate.value,
                this.inputImg.value
            )
            this.closeModalAdd()
            this._resetInput()
        })
	}

	editModal(book){
		const update = document.getElementById('update-form')
		update.className = 'update-form'
		const wrapper = document.createElement('div')
		wrapper.className = 'wrapper'
		wrapper.id = 'wrapper'

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
		inputUpdateTT.value = book.title

		const labelUpdateDes = document.createElement('label')
		labelUpdateDes.textContent = 'Description'
		const inputUpdateDes = document.createElement('textarea')
		inputUpdateDes.className = 'update-des'
		inputUpdateDes.id = 'update-des'
		inputUpdateDes.value = book.description

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
		inputUpdateCate.add(option1)
		let option2 = document.createElement('option')
		option2.value = "Horror"
		option2.text = "Horror"
		inputUpdateCate.add(option2)
		let option3 = document.createElement('option')
		option3.value = "Bussiness"
		option3.text = "Bussiness"
		inputUpdateCate.add(option3)
		inputUpdateCate.add(option)
		inputUpdateCate.id = 'update-cate'
		inputUpdateCate.value = book.category

		const labelUpdateAu = document.createElement('label')
		labelUpdateAu.textContent = 'Author'
		const inputUpdateAu = document.createElement('input')
		inputUpdateAu.className = 'update-author'
		inputUpdateAu.id = 'update-author'
		inputUpdateAu.value = book.author

		const labelUpdateImg = document.createElement('label')
		labelUpdateImg.textContent = 'Image Link'
		const inputUpdateImg = document.createElement('input')
		inputUpdateImg.className = 'update-image'
		inputUpdateImg.id = 'update-image'
		inputUpdateImg.value = book.image

		const btnUpdate = document.createElement('button')
		btnUpdate.textContent = 'Update'
		btnUpdate.className = 'btn-update'
		btnUpdate.id = 'btn-update'


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
			const wrrap = document.getElementById('wrapper')
			updateForm.style.visibility = 'hidden'
			overlay.style.opacity = '0'
			wrrap.remove()
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
		wrapper.append(popup,btn)
		update.appendChild(wrapper)
	}

	bindUpdateBook(handler){
		this.booklist.addEventListener('click', e=>{
			if(e.target.className === 'edit-btn'){
				const id = e.target.parentElement.id
				const updateTitle = document.getElementById('update-title')
				const updateAuthor = document.getElementById('update-author')
				const updateDes = document.getElementById('update-des')
				const updateImg = document.getElementById('update-image')
				const updateCate = document.getElementById('update-cate')
				const edit = document.getElementById("btn-update")
				edit.addEventListener('click',()=>{
					handler(id,updateTitle.value,
						updateAuthor.value,
						updateDes.value,
						updateCate.value,
						updateImg.value)
					const wrapper = document.getElementById('wrapper')
					if(wrapper) {wrapper.remove()}
				})
			}
		})
	}

	bindDeleteBook(handler) {
        this.booklist.addEventListener('click', e => {
        	let check = 0
            if (e.target.className === 'delete-btn') {
                const id = e.target.parentElement.id
                const deleteForm = document.getElementById('delete-form')
                deleteForm.style.visibility = "visible"
                const overlay = document.getElementById("overlay")
                overlay.style.opacity = "1"
                const icon = document.getElementById("close-icon")
                icon.addEventListener('click',()=>{
                	this.closeModalDelete()
                	check++
                })
                const sureDelete = document.getElementById("sure-delete")
                sureDelete.addEventListener('click',()=>{
                	if(check === 0) {
                		handler(id)
                		this.closeModalDelete()
                		check++
                	}
                })
            }
        })
    }

    bindSearchBook(handler){
    	this.search.addEventListener('click',() => {
    		if(this.inputSearch.value === ""){
    			alert("Enter the book you want to find")
    		}
    		if(this.inputSearch.vale !== ""){
    			handler(this.inputSearch.value)
    		}
    	})
    	this.inputSearch.addEventListener("keyup",e=>{
    		if(e.which === this.ENTER_KEY){
    			if(this.inputSearch.value === ""){
    				alert("Enter the book you want to find")
    			}
    			if (this.inputSearch.value!=="") {
    				handler(this.inputSearch.value)
    			}
    		}
    	})
    }

    bindFilterBook(handler){
    	for(let check of this.checkCate){
    		check.addEventListener('click', ()=>{
    			if(check.checked){
    				handler(check.value)
    			} 
    		})
    	}
    }
}
