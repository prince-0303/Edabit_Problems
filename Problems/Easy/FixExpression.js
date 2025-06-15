// Fix the Expression

// function isSeven(x) {
// 	return x="7"?false:true:false;
// }
// <<-----------to👇-------------->>


function isSeven(x) {
	return x = 7 ? true : false ;
}
console.log(isSeven(3))
console.log(isSeven(7))
console.log(isSeven(8))