//  There are two types of  Memory :

// stack (primitive ) and heap(non-primitive)

// let ytName = "perrypie";
// let yt2 = ytName ; 

// yt2 = "cherrypie";

// console.log(yt2);
// console.log(ytName);

// Stack - main variable remain same and changes occurs in copy 

let user1 = {
    name : "garv",
    age : 22
};

let user2 = user1 ;

user2.name = "Sahil";

console.log(user2);
console.log(user1);

// Heap = the changes occur in real variable not copies 




