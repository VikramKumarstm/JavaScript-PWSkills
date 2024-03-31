/**
 * array -> list of numbers that we will get
 * fn -> is a function passed as an argument to the precessArray function
 */

function processArray(array, fn) {

    for(let i=0; i< array.length; i++) {
        console.log("index", i, "value", array[i], "return value of fn", fn(array[i]));
    }
}

processArray([2,3,4,1,5], function cube(x) {return x*x*x; })  // passing function as an argument