let score = "33abc"

console.log(typeof score);

console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber); 
// "33" => gives 33
//  "33abc" => NaN 
//  null => 0
//  True => 1 , False=> 0


let isLoggedIn = "garv"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 = true , 0 = false
// "" = false
// "garv" = true

// string conversion 

let x = 33
let stringNum = String(x);

console.log(typeof stringNum);

