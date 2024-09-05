// const tinderuser = new Object(); this is single ton

const tinderuser = {};

tinderuser.id = 101 
tinderuser.name = "Garv" 
tinderuser.isLoggedin = false 




// console.log(tinderuser);


const regularuser = {

    email: "ome@gmail.com",
    name: {
        fullname : {
            firstname: "garv",

            secondname: "sharma"
        }

    }
}

// console.log(regularuser.name.fullname);

const obj1 = {1:"A" , 2: "B"}
const obj2 = {3:"A" , 4: "B"}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1,...obj2}  // we will use this the most to merge two objects 
console.log(obj3);

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedin'))


