// Less Than 100?
// Given two numbers, 
// return true if the sum of both numbers is less than 100. Otherwise return false.
// <<<---------------------------------------------------------------------------->>>

function lessthan100 (a,b) {
    if(a+b<100){
        return true
    }else{
        return false
    }
}
console.log(lessthan100(23,49))
console.log(lessthan100(51,50))
console.log(lessthan100(43,52))
console.log(lessthan100(43,39))
console.log(lessthan100(85,39))