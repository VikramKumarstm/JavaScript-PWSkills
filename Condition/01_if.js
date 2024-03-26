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


/**
 * Build a rating system for pizzahut
 * 
 * 1 star - poor
 * 2 star - emm, ok
 * 3 star - average
 * 4 star - cool
 * 5 star - great
 * 6 star - awesome
 * 7 star - nailed it
 */

let getStarFromUser = "12";
let star = parseInt(getStarFromUser)
if(star == 1) {
    console.log("Poor");
}
else if(star == 2) {
    console.log("emm, ok");
}
else if(star == 3) {
    console.log("average");
}
else if(star == 4) {
    console.log("cool");
}
else if(star == 5) {
    console.log("great");
}
else if(star == 6) {
    console.log("awesome");
}
else if(star == 7) {
    console.log("nailed it");
}
else {
    console.log("I don't know that rating")
}