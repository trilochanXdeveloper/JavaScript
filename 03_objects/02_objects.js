//const linkedinUser = new Object()
const linkedinUser = {}
linkedinUser.id = "1M21"
linkedinUser.name = "Trilochan"
linkedinUser.mail = "trilochanp2001@gmail.com"

const regularUser = {
    email : "trilochanp2001@gmail.com",
    username:{
        fullname:{
            firstname : "Trilochan",
            lastname : "Pradhan"
        }  
    }
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {...obj1,...obj2}

//console.log(obj4)

const arr = [
    {
        id : "H2KM",
        Name : "Trilochan"
    },
    {
        id : "H2KI",
        Name : "Subham"
    }
]

//console.log(arr[1])

Object.assign({},obj1,obj2)
//console.log(linkedinUser);

//console.log(regularUser.username.fullname)

//console.log(obj1)

//Printing linkedinUser Object all keys
  //console.log(Object.keys(linkedinUser))
//Printing linkedinUser Object all Values
  //console.log(Object.values(linkedinUser))
//Is property available
  //console.log(linkedinUser.hasOwnProperty('name'))
 //console.log(Object.entries(linkedinUser))

 const course = {
    coursename: "JavaScript",
    price:"999",
    duration:"1Month"
 }
//console.log(course.coursename);
//Object De-structureing

const {coursename} = course;
console.log(coursename);
console.log("-----------------------");

const {coursename:cname} = course;
console.log(cname);


