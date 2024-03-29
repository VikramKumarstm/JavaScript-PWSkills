function addNumbers() {
    // no parameters passed in the function
    let n = arguments.length;
    let sum=0;
    for(let i=0; i<n; i++) {
        // i denotes index of an array 0-based
        sum += arguments[i];
    }
    return sum;
}

// variable arguments
console.log(addNumbers(2, 5, 8));
console.log(addNumbers(6, 19, 5, 10));