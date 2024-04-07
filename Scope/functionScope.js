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

/**
 * Although y has a block scope & here this 'if' is
 * a block, we still cannot access y, before the line
 * of its declaration as before that line it is a TDZ
 * for y.
 * 
 * TDZ -> Temporal Dead Zone
 */

