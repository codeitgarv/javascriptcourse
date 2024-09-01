const accountId = 454512
let accountEmail = "sam@gmail.com"
var accountpassword = "12345"
accountCity = "jaipur"

// accountId = 2  (not allowed as its a constant)
accountEmail = "bg@gmail.com"
accountpassword= "665421"
accountCity= "ajmer"

/* 
prefer not to use var because of the issue with
block scope and functional  scope
*/
console.table([accountId, accountEmail, accountpassword, accountCity])
