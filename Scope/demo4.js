var teacher = "Vishva Mohan"  // global scope

function fun() {   //global scope
    var teacher = "Sanket Singh"  //function fun scope
    content = "js"   //auto global
    console.log("hello", teacher)
}

function gun() {  // global scope
    var student = "Amit"  // function gun scope
    console.log("Welcome to the course", student, "and your teacher is", teacher);
}

console.log(content)  // undeclared state -> not defined -> No auto global promotion here
fun()
gun()

console.log(teacher, content)