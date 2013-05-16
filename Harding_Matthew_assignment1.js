//alert("JavaScript works!");

// Matthew Harding
// SDI 1305
// Deliverable 1
// My first Javascript Project

// My variables
var myDaughtersName = "Arianna";
var babyShampoo = "\"Baby Magic\" Shampoo";
var numOfFoodMarks = 5;
var hasFoodMarks = true;


// My first outputs
console.log("My daughter's name is " + myDaughtersName);
console.log("It is " + hasFoodMarks + " that she has food marks on her.");
console.log("Looking over her I've found " + numOfFoodMarks + " on her");
console.log("She's going to have bath time and get " + babyShampoo + " to clean her off tonight!");

if (hasFoodMarks === true) {
    // This is the code block for when hasFoodMarks is true
    if (numOfFoodMarks >= 7) {
        // this runs if hasFoodMarks is true AND if numOfFoodMarks is less than or equal to 7
        numOfFoodMarks = numOfFoodMarks + 1;
        console.log("If she has " + numOfFoodMarks + " She's getting in the tub");
    } else{
        // this runs if numOfFoodMarks is greater than 7
        console.log("She's clean.");
    }
} else {
    // this is the code block that runs when hasFoodMarks is false
    if (myDaughtersName === "Arianna") {
    
    }
}