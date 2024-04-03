function fun() {
    console.log("Called the function fun");

    return function cleanUp() {
        console.log("Cleaning up the resources");
    }
}

const result = fun();
console.log(result);
result(); // you can call cleanUp like this

/**
 * what is stored inside result? -> It stores the function returned by fun, i.e, cleanUp
 */