const animal = {}
const animal = new Object()
const animal = Object.create()

function animal(sound){
	this.sound = sound
}

const dog = new animal("woof")
console.log(dog.sound)

//pass by value
let age = 36
let myAge = age
myAge = 37
age //36


//pass by reference
const dog = {
	sound:"woof"
}

const cat = dog;
cat.sound = "meo"
console.log(dog.sound)


//object method
const car = {
	brand: 'Ford',
	model: 'Fiesta',
	start: function() {
		console.log(`Started ${this.brand} ${this.model}`)
	}
}
car.start()

//class
class Person {
	hello() {
		return 'Hello, I am Flavio'
	}
}

const people = new Person()
people.hello()

//constructure class
class Person {
	constructor(name) {
		this.name = name
	}
	hello() {
		return 'Hello, I am ' + this.name + '.'
	}
}
const people = new Person('Minh')
people.hello()

//stactic class
class Person {
	static genericHello() {
		return 'Hello'
	}
}
Person.genericHello()

//Class iheritance
class Person {
	constructor(name){
		this.name = name
	}
	hello() {
		return 'Hello, I am a Person'
	}
}

class Programmer extends Person {
	constructor(age,name){
		super(name)
		this.age = age
	}
	hello2(){
		return `Hello, I am a ${this.name} I am ${this.age}`
	}
}

const people = new Programmer(22,'Minh')
people.hello2()
