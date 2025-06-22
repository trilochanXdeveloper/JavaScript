// objects literals

const mySym = Symbol("Key")

const JsUser = {
    name : "Trilochan",
    "Full Name" : "Trilochan Pradhan",
    age : 23,
    location : "Hyderabad",
    email : "trilochanpradhan2001@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"],
    [mySym] : "myKey1"
}
//console.log(JsUser);
//console.log(JsUser.email)
// console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym)
// JsUser.age = 24 
// Object.freeze(JsUser)
// JsUser.age = 30
// console.log(JsUser.age)
JsUser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting())
//console.log(JsUser);
