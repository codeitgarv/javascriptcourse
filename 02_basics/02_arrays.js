// const marvel = ["spiderman", "ironman", "thor"]
// const dc = ["superman", "batman", "flash"]

// const merge = marvel.concat(dc);

// console.log(merge);
// w can use concat to merge two arrays but most peole prefer te method given below

// const all = [...marvel,...dc];
// console.log(all);

//  this is widely used 

// const bgg = [5,6,[7,8],9,[10,[11]],10];

// const gbb = bgg.flat(Infinity);
// console.log(gbb);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"})); //==== interesting point for interview purpose

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






