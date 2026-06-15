//let constant 
let name ="deepikasri"
const pi=3.14
console.log(name);
console.log(pi);

//template literals
let age=18
console.log(`my name is ${name} my age is${age}`);

//object 
const student = {
    name:"deepz",
    clg:"VETias"
};
console.log(student);

//arrow function
let add =(a,b) => a+b;
console.log(add(21,7));

//array 
let fruit = ["fig","kiwi","apple",]
console.log(fruit);

//spreed operator
const updatedfruit=[
    ...fruit    
];
console.log("updatedstudent");

//rest operator
function maximumMarks(...marks){
    let max =Math.max(...marks);
    return max;
}
console.log("maximum marks:", maximumMarks(80,70,60));












