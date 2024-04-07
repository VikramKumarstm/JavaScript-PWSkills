console.log(Math.random());
// by default it returns a random real number between 0 - 1

// Read doc of math function

// You will be given two values, x and y, and you need to generate
// a random number between x and y inclusive of x and y

/**
 * 
 * @param {x} Lower_Limit
 * @param {y} Upper_Limit
 * @return random number in the range [x, y]
 */
function randomInRange(x, y) {
    return Math.random()*(y - x + 1) + x;  //[10, 36]
}

console.log(Math.floor(randomInRange(10, 36)));


