// for (let index = 0; index < 10; index++) {
//     const element = array[index]; 
// }

// for([initialExpression]; [condition]; [changer]) {
//     //body
// }

let userScore = 10;
const minValue = 0;

//if score hits 5, don't print anything after that
//remove previos demand, if score hits 5, skip printing 5 but rest
//rest value should be printed
for(userScore; userScore >= minValue; userScore = userScore - 1) {
    // if(userScore == 5) {
    //     break;
    // }
    
    if(userScore == 5) {
        continue;
    }
    console.log(`userscore is ${userScore}`)
    
}