// Football Points

// wins get 3 points
// draws get 1 point
// losses get 0 points
// <<------------------------------------------------------->>

function footballPoints(wins, draws, losses) {
	let result = (wins*3) + (draws*1) + (losses*0);
    return result
}

console.log(footballPoints(3, 4, 2))
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(0, 0, 1))