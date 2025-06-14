// Swap two given numbers!
//  from 👇

// function swap(a, b) {
// 	b = a
// 	a = b
// 	return [a, b]
// }
//  to 👇

function swap(a, b) {
	let temp = a
    a = b
    b = temp 
	return [a, b]
}
console.log(swap(100,200));
console.log(swap(44,33));
console.log(swap(21,12));
