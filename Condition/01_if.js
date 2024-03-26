let temperature = 28;

if(temperature < 20) {
    console.log("It's realy cold");
} else {
console.log("it's realy Hot");
}

console.log("PW SKILLS")

/**
 * above 99, you get a life up
 * below that you don't get it
 * 
 * a welcome message to game
*/

let score = 210;
let life = 3;
let bullets = 1000;
console.log("Welcome to the Game")

if(score > 99) {
    console.log("you gained a life")
    score -= 100;
    life++;
    let bullets = 2000;
    console.log(`your bullets are ${bullets}`);
} else {
    console.log("you don't get a life")
}

console.log(`your score is ${score} and your life is ${life}
and your bullets are ${bullets}`)