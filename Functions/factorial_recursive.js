function factorial(num) {
    if(num == 0) {
        return 1;
    }

    const result = num * factorial(num-1);
    return result;
}

console.log(factorial(5));