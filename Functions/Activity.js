const arr = [1,2,3,4,5];

arr.forEach(function printer(value) {
    console.log("value is ", value);
});

/**
 * which one of the above function is a HOF? => forEach
 * which one of the above function is a callback? => printer
 */