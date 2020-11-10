//dadadadadadadada DATATYPES!

/*
*Datatypes allow  us to operate on variables.
*
*
*/

//Number:
//Numbers can be with or without decimals!

var x = 7
var y = 1.8




//String:
//A string is a series of characters writting in quotes or double qoutes!

var favCar = 'Miata'
var favBike = "Harley Davidson"



//Boolean:
//Booleans have the values of true or false!
var a = 1;
var b = 1;
var c = 2;

(a === b) //returns true
(a === c) //returns false



//Array:
//Arryas are written in sqaure brackets [] and are seperated by commas.

var favCars = ['Miata', 'Rx7', 'Ariel Atom', 'TVR'];




//Object:
//Objects are written in curly braces {}
//they are written as name:value pairs and are seperated by commas.

var myCar = {make: 'Mazda', model: 'Miata', year: 1995, color: 'Black'};



//Function
//Functions are blocks of code desinged to perferom a particilar task.

Function(prm1,prm2){
    return prm1 + prm2
};



//Undefined:
//A variable without a value is undefined!

var car; //undefined



//Null:
//Not means 'nothing'. In JavaScript, the date type of null is an object.

var myCar = {make: 'Mazda', model: 'Miata', year: 1995, color: 'Black'};
myCar = null // this value is null, type is still an object



//NaN:
//Stands for Not a Number


//Infinity:
//Infinity is a numeric value representing infinity.



//What is the difference between primitive/simple and complex data types?

//Primitive data types are single simple data values with no properties and methods.
//typeof operater can return one of threse primitive types


typeof "Chris"  // returns "string"
typeof true     // returns Boolean
typeof 31       // returns number
typeof x        // returns undefiend


//Complex data types:
//type of operater can return one of two comple types:

typeof null                 // returns "object"
typeof function myFunc(){}  // returns "function"



//Primite values are passed to a function BY COPY



//Complex values are BY REFERENCE



//What this means and how they are different!