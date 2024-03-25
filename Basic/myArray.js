const myArray = [1, 2, 3, 4, 5]

const newArray = new Array(1, 2, 3, 4, 5)
console.log(newArray[1])

const dcHeroes = ['batman', 'superman', 'flash']
console.log(dcHeroes)
console.log(dcHeroes.length)

// dcHeroes[dcHeroes.length] = 'Wonder woman'
dcHeroes.push("Wonder woman")
console.log(dcHeroes)

const lastHero = dcHeroes.pop()
console.log(lastHero)
console.log(dcHeroes)

const addFirst = dcHeroes.unshift("acquaman")

console.log(dcHeroes)
console.log(dcHeroes.toString())
console.log(dcHeroes.join("-"))

console.log(dcHeroes.slice(1,3))
console.log(dcHeroes)

console.log(dcHeroes.splice(1,3))
console.log(dcHeroes)