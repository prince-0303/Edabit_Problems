// The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
// The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
//  <<<----------------------------------------------------------------------------------------->>>


function animals(chickens, cows, pigs) {
    let result = (chickens*2)+(cows*4)+(pigs*4)
    return result;
}
console.log(animals(2,3,5))
console.log(animals(1,2,3))
console.log(animals(5,2,8))