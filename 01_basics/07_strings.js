// const name = "garv";
// const repo = 50 ; 

// console.log(`hello my name is : ${name} 
//       my repo is : ${repo}`);

    //   new method of concatination of variables 

    //  defining string with new method

    const gamename = new String("Farzi");
    //  console.log(gamename[0]); 
    //  by this we can access key value pair
// console.log(gamename.toUpperCase());


// console.log(gamename.charAt(0));
// this is used to find which chracter on 2,3 or so on....
    
// console.log(gamename.indexOf());
// to find which number on the characters

const newStr = gamename.substring(0,4);
console.log(newStr);

const anotherstr = gamename.slice(-2,4);
console.log(anotherstr);

const perry = "    bgmi    ";
console.log(perry);
console.log(perry.trim()); 
//  trim = used to remove any other extra spaces used by user 

const url = "https//garvsharma.com/garv%20sharma";
console.log(url.replace('%','-'));

console.log(url.split(' '));





    


