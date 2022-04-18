const promise = new Promise((resolve, reject)=>{
	if(true)
		resolve("everything fine");
	else reject('somthing wrong');
})

const promise2 = new Promise((resolve, reject)=>{
	setTimeout(resolve,5000, 'HIIIII');
});

const promise3 = new Promise((resolve, reject)=>{
	setTimeout(resolve,10000, 'POCKYYY');
});

const promise4 = new Promise((resolve, reject)=>{
	setTimeout(resolve,5000, 'LOCKKKKKK');
});

Promise.all([promise,promise2,promise3,promise4])
.then(value=>{
	console.log(value);
});