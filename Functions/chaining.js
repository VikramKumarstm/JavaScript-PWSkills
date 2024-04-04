// const obj = {
//     func1 : function f(x) {
//         return x*x;
//     }
// }

// console.log(obj.func1(10))

const obj = {
    func1 : function f(x) {
        console.log("F called")
        return {
            func2 : function g(x) {
                console.log("G called")
            }
        };
    }
}

obj.func1().func2();