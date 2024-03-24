// Primitive (Stack)
/*
String
Number
Boolean
Null
Undefined
Symbol
BigInt
*/

const name = "Vikram Kumar"
const age = 20
const score = 200.9
let isLoggedIn = true
const nodeVersion = null
let bankBalance = undefined
const buttonId = Symbol("id")
const aRealyLongNumber = 9804886948395n

// Reference (Non-premitive) - Objects (Heap)
/*
Arrays
Objects
Functions
*/

//Array
const numbers = [1, 2, 3, 4, 5]

const heroes = [
    "superman",
    "batman",
    "flash",
    true,
    123
]

//Object
const userObject = {
    name : "Vikram",
    age : 19,
    isLoggedIn : true
}

//Function
const sayHello = function(){
    console.log("vikram")
}

const registerAUser = function(){}
const loginUser = function(){}

