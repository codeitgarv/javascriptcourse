// single ton = object.create - constructive method
const mysym =Symbol("key1");
const jsUser = {
    name : "garv" ,
    
    [mysym] : "key1",

    age  : 18 , 

    email : "garv@google.com" ,

    location : "jaipur" ,

    isLoggedIn : false , 

    "full name" : "garvit sharma"

}

// two  methods to acess objecrts 

// console.log(jsUser["full name"]); // this one is more efficient 
// console.log(jsUser.location); // not recommended 

// console.log(jsUser[mysym]);

jsUser.email = "garv@cat.com"

// Object.freeze(jsUser) // whole objec can be freeze not a sigl element of it like jsUser.email

jsUser.email = "Garv@gnmail.com"

// console.log(jsUser);

jsUser.greetings = function () {

    console.log("hello jsUser");
    
    
}
jsUser.greetings2 = function () {

    console.log(`hello jsUser , ${this.name}`);
    
    
}

console.log(jsUser.greetings());
console.log(jsUser.greetings2());





