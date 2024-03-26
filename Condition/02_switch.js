/*
switch(expression) {
    case value1:
        statement1;
        statement2;
        break;

    case value2:
        statement3;
        statement4;
        break;
    ..................
    ..................
    ..................
}
*/

/**
 * Build a rating system for pizzahut
 * 
 * 1 star - poor
 * 2 star - emm, ok
 * 3 star - average
 * 4 star - cool
 * 5 star - great
 * 6 star - awesome
 * 7 star - nailed it
 */

let starFromUser = "8";
star = parseInt(starFromUser);

switch(star) {
    case 1:
        console.log("poor");
        break;

    case 2:
        console.log("emm, ok");
        break;

    case 3:
        console.log("average");
        break;

    case 4:
        console.log("cool");
        break;

    case 5:
        console.log("great");
        break;

    case 6:
        console.log("awesome");
        break;

    case 7:
        console.log("nailed it");
        break;
        
    default:
        console.log("I don't know that rating.")
}
