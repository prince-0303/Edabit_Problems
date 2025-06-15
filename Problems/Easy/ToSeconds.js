// Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes),
// converts them to seconds, and adds them.

//  1hr = 60 min, 1 min = 60 sec
// <<----------------------------------------------------------->>

function convert(hours, minutes) {
	return (hours * 3600) + (minutes*60)
}

console.log(convert(1, 3))
console.log(convert(2, 0))
console.log(convert(0, 0))