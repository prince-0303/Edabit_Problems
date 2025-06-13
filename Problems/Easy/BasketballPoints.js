// Basketball Points

// You are counting points for a basketball game, 
// given the amount of 2-pointers scored and 3-pointers scored,
//  find the final points for the team and return that value.

// <<------------------------------------------------------>>

function points (twoPointers, threePointers) {
    let result = (twoPointers*2) + (threePointers*3)
    return result
}
console.log(points(1,1));
console.log(points(3,5));
console.log(points(5,7));
console.log(points(38,8));
