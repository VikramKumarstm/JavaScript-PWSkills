function fun() {
    console.log(x);   //TDZ for x;
    let x = 10;
    console.log(x);
}
fun();

if(true) {
    console.log(y);   //TDZ for y;
    const y = 12;
    console.log(y);
}

