var teacher = "Vishva Mohan"  // global scope

function fun() {   //global scope
    var teacher = "Sanket Singh"  //function fun scope
    console.log("hello", teacher)
}

function gun() {  // global scope
    var student = "Amit"  // function gun scope
    console.log("Welcome to the course", student, "and your teacher is", teacher);
}

fun()
gun()