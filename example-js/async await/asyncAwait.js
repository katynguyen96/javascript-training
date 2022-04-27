async function fetchUser(){
	const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
	const data = await resp.json();
	console.log(data);
}

const urls = [
	'https://jsonplaceholder.typicode.com/comments',
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function(){
	try{
		const [comments, users, albums]= await Promise.all(urls.map(async function (url){
			const repsone = await fetch(url);
			return repsone.json();
		}));
		console.log(comments);
		console.log(users);
		console.log(albums);
	}
	catch(error){
		console.log('oppp',error);
	}
}