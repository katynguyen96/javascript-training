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

	// Reset the input after add book
	_resetInput(){
		this.inputTitle.value = ""
		this.inputAuthor.value = ""
		this.inputDescription.value = ""
		this.inputImg.value = ""
	}

	// Close add book modal
	closeModalAdd() {
		const addModal = document.getElementById("add-book-page")
		const overlay = document.getElementById("overlay")
		addModal.style.visibility = "hidden"
		overlay.style.opacity = "0"
	}

	// Close delete book modal
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
				let cardBook = document.createElement("div")
				cardBook.id = book.id
				cardBook.className = "card-book"
		
				let title = document.createElement("h2")
				title.className = "book-title"
				title.textContent = book.title
		
				let bookBody = document.createElement("div");
				bookBody.className = "body";
		
				let img = document.createElement("div")
				img.className = "book-img"
				img.style.backgroundImage = `url(${book.image})`
		
				let des = document.createElement("div")
				des.className = "book-des"
				des.textContent = book.description
		
				let author = document.createElement("h2")
				author.className = "book-author"
				author.textContent = book.author
		
				bookBody.append(title, author, des)
		
				let btnDelete = document.createElement("button")
				let closeIcon = document.createElement("i")
				closeIcon.className = "fa-solid fa-trash-can"
				btnDelete.className = "delete-btn"
				btnDelete.textContent = "Delete"
				btnDelete.append(closeIcon)

				let btnEdit = document.createElement("button")
				btnEdit.className = "edit-btn"
				let editIcon = document.createElement("i")
				editIcon.className = "fa-solid fa-pen"
				btnEdit.textContent = "Edit"
				btnEdit.append(editIcon)

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

	 /**
     * Add event 'click' for element button
     * @param {function} handler 
     */
	bindAddBook(handler){
		const addNewBook = document.getElementById("add-new-book")
		//open add book modal
		addNewBook.addEventListener("click",()=>{
			const addModal = document.getElementById("add-book-page")
			const overlay = document.getElementById("overlay")
			addModal.style.visibility = "visible"
			overlay.style.opacity = "1"
		})
		//close add book modal
		const closeModal = document.getElementById("close-modal")
		closeModal.addEventListener("click",()=>{
			this.closeModalAdd()
		})
		const closeModalIcon = document.getElementById("modal-close-icon")
		closeModalIcon.addEventListener("click",()=>{
			this.closeModalAdd()
		})
		this.addBtn.addEventListener('click', e => {
			//form validation
			if(this.inputTitle.value 
				&& this.inputAuthor.value
				&& this.inputDescription.value 
				&& this.inputCate.value
				&& this.inputImg.value){
				handler(this.inputTitle.value,
                this.inputAuthor.value, 
                this.inputDescription.value,
                this.inputCate.value,
                this.inputImg.value
            )
            	this.closeModalAdd()
            	this._resetInput()
			}
			else {alert("fill all the input")}
        })
	}

	// Edit book modal
	editModal(book){
		let update = document.getElementById('update-form')
		update.className = 'update-form'
		let wrapper = document.createElement('div')
		wrapper.className = 'wrapper'
		wrapper.id = 'wrapper'

		let popup = document.createElement('div')
		popup.className = 'popup'
		update.style.visibility = 'hidden'
		popup.id = 'popup'


		let editTitle = document.createElement('h2')
		editTitle.className = 'form-title'
		editTitle.textContent = 'Update Book'

		let updateFieldTT = document.createElement('div')
		updateFieldTT.className = 'field'

		let updateFieldDes = document.createElement('div')
		updateFieldDes.className = 'field'

		let updateFieldCate = document.createElement('div')
		updateFieldCate.className = 'field'

		let updateFieldAu = document.createElement('div')
		updateFieldAu.className = 'field'

		let updateFieldImg = document.createElement('div')
		updateFieldImg.className = 'field'

		let labelUpdateTT = document.createElement('label')
		labelUpdateTT.textContent = 'Title'
		let inputUpdateTT = document.createElement('input')
		inputUpdateTT.className = 'update-title'
		inputUpdateTT.id = 'update-title'
		inputUpdateTT.value = book.title

		let labelUpdateDes = document.createElement('label')
		labelUpdateDes.textContent = 'Description'
		let inputUpdateDes = document.createElement('textarea')
		inputUpdateDes.className = 'update-des'
		inputUpdateDes.id = 'update-des'
		inputUpdateDes.value = book.description

		let labelUpdateCate = document.createElement('label')
		labelUpdateCate.textContent = 'Categories'
		let inputUpdateCate = document.createElement('select')
		inputUpdateCate.className = 'update-cate'
		let cookingOp = document.createElement('option')
		cookingOp.value = "Cooking"
		cookingOp.text = "Cooking"
		
		let comicOp = document.createElement('option')
		comicOp.value = "Comic"
		comicOp.text = "Comic"
		inputUpdateCate.add(comicOp)
		let horrorOP = document.createElement('option')
		horrorOP.value = "Horror"
		horrorOP.text = "Horror"
		inputUpdateCate.add(horrorOP)
		let bussinessOp = document.createElement('option')
		bussinessOp.value = "Bussiness"
		bussinessOp.text = "Bussiness"
		inputUpdateCate.add(bussinessOp)
		inputUpdateCate.add(cookingOp)
		inputUpdateCate.id = 'update-cate'
		inputUpdateCate.value = book.category

		let labelUpdateAu = document.createElement('label')
		labelUpdateAu.textContent = 'Author'
		let inputUpdateAu = document.createElement('input')
		inputUpdateAu.className = 'update-author'
		inputUpdateAu.id = 'update-author'
		inputUpdateAu.value = book.author

		let labelUpdateImg = document.createElement('label')
		labelUpdateImg.textContent = 'Image Link'
		let inputUpdateImg = document.createElement('input')
		inputUpdateImg.className = 'update-image'
		inputUpdateImg.id = 'update-image'
		inputUpdateImg.value = book.image

		let btnUpdate = document.createElement('button')
		btnUpdate.textContent = 'Update'
		btnUpdate.className = 'btn-update'
		btnUpdate.id = 'btn-update'

		//submit edit
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

		//close edit modal
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

	/**
     * function use id to update book
     * Add event 'click' for bookList element
     * Add event 'click' for edit button
     * @param {fuction} handler 
     */
	bindUpdateBook(handler){
		this.booklist.addEventListener('click', e=>{
			if(e.target.className === 'edit-btn'){
				//get id and all the value
				const id = e.target.parentElement.id
				const updateTitle = document.getElementById('update-title')
				const updateAuthor = document.getElementById('update-author')
				const updateDes = document.getElementById('update-des')
				const updateImg = document.getElementById('update-image')
				const updateCate = document.getElementById('update-cate')
				const edit = document.getElementById("btn-update")
				//submit edit
				edit.addEventListener('click',()=>{
					handler(id,updateTitle.value,
						updateAuthor.value,
						updateDes.value,
						updateCate.value,
						updateImg.value)
					const wrapper = document.getElementById('wrapper')
					//remove edit modal
					if(wrapper) {wrapper.remove()}
				})
			}
		})
	}

	/**
     * function use id to delete book
     * Add event 'click' for booklist element
     * Add event 'click' for delete button
     * @param {function} handler 
     */
	bindDeleteBook(handler) {
        this.booklist.addEventListener('click', e => {
        	//Use check variable to avoid duplicate event
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

    /**
     * function use information to search book
     * Add event 'click' for search button
     * Add event 'keyup' for search input
     * @param {function} handler 
     */
    bindSearchBook(handler){
    	const closeAlert = document.getElementById('close-alert')
    	//close search alert modal
    	closeAlert.addEventListener('click',()=>{
    		const alert = document.getElementById('alert')
    		alert.style.visibility = "hidden"
    		const overlay = document.getElementById('overlay')
    		overlay.style.opacity = '0'
    	})
    	this.search.addEventListener('click',() => {
    		if(this.inputSearch.value === ""){
    			const alert = document.getElementById('alert')
    			alert.style.visibility = "visible"
    			const overlay = document.getElementById('overlay')
    			overlay.style.opacity = '1'
    		}
    		if(this.inputSearch.vale !== ""){
    			handler(this.inputSearch.value)
    		}
    	})
    	this.inputSearch.addEventListener("keyup",e=>{
    		//search by enter key
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

    /**
     * function use category to filter book
     * Add event 'click' for check element
     * @param {function} handler 
     */
    bindFilterBook(handler){
    	//get all the value when checked
    	for(let check of this.checkCate){
    		check.addEventListener('click', ()=>{
    			if(check.checked){
    				handler(check.value)
    			} 
    		})
    	}
    }
}
