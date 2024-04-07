function fun() {  // global scope
    if(true) {
        var x = 10;  // fun x=10
        let y = 12;  // if block y = 12
    }

    console.log(x);  // 10
    console.log(y);  // error
}

fun();