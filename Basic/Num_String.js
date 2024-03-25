const firstName = "vikram"
const lastName = "kumar"

console.log(firstName +' '+ lastName)
console.log(`My first name is ${firstName} and last name is ${lastName}`)

const userName = new String('vikramdotcom')
console.log(userName)
console.log(userName[0])

//find length
console.log(userName.length)

console.log(userName.charAt(0))
console.log(userName.substring(0, 6))

let email = '  v@hc.com   '
console.log(email)
// console.log(email.trimStart())
// console.log(email.trimEnd())
console.log(email.trim())

console.log(email.replace('v', 'vikram'))

console.log(email.toUpperCase())
console.log(email.toLowerCase())


//Assignment
/*
1. Learn more about string and string method
 */

console.log("********************************************")

//Number

const number = 5;

const num = new Number(5.27112)
// console.log(num.toString())
console.log(num.toFixed(2))

const subscribers = 100000
console.log(subscribers.toLocaleString())

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


/**
 * () -> prentheses
 * [] -> brackets
 * {} -> curly braces
 */


console.log(Math)
console.log(Math.random())
console.log(Math.random().toFixed(2))
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))

//Assignments
/**
 * study about Math() method
 * generate 1 to 6 random number
 */

