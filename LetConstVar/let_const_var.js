// The major difference between let and var exist around the scoping mechanism

// let and const support block scope, if block scope not present then global scope
// var support function scope, and if function scope not present then global scope

// let and const support TDZ (Temporal Dead Zone)
// var donsn't support TDZ (Temporal Dead Zone)

/**
 * Difference between let and const 
 * 1. Reassignment
 */

// variables declared with let are reassignalbe
// const on the other hand is not

function letReassignment() {
    let x = 10;
    console.log(x);
    x = "Sanket";
    console.log(x);
}

letReassignment();

// function constReassignment() {
//     const x = 10;
//     console.log(x); // print x
//     x = "Sanket";  // because x is const, reassignment is not possible / throw an error
//     console.log(x);
// }

// constReassignment();

function constReassignmentWithObject() {
    const obj = {
        x : 10,
        y : 20
    }

    console.log(obj);

    obj = {
        x : 4  // reassignment to a brand new object / throw an error
    }

}

constReassignmentWithObject();