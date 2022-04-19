const promise = new Promise((resolve, reject)=>{
	if(false)
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

promise
	.then(result=>result + '!')
	.then(result2=>result2+'?')
	.catch(()=>console.log("Error"))
	.then((result3)=>{
		console.log(result3+'!');
		return result3+'!';
	})
	.finally((result4)=>{
		console.log(result4 + "+")
		return result4 + "-";
		console.log(result4)
	});

const urls = [
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
	'https://jsonplaceholder.typicode.com/users'
];

Promise.all(urls.map(url=>{
	return fetch(url).then(resp=>resp.json())
})).then(results=>{
	console.log(results[0]);
	console.log(results[1]);
	console.log(results[2]);
}).catch(()=>console.log("Can't get data"));