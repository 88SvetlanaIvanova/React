document.getElementById("button").onclick = function(){
  document.getElementById("confirm").innerHTML="Order placed. Check email for confirmation";
  document.getElementById("button").style.display = "none";
}
let d = document.getElementById("destination");

/*var username = prompt();
if(username==="Svetla"){
  console.log("Welcome!");
}else{
  console.log("You are not welcome!");
}*/
/*
let username = prompt();
let points = username === "Svetla" ? console.log("10") :console.log("0");;
console.log(points);*/


/*for (let i = 0; i < 10; i++) {
  for (let k = i; k >= 0; k--) {
    //console.log(i, k);
    d.append(k +" ");
  }
  var br = document.createElement('br');
  d.appendChild(br);
}*/

/* Iterate through an array
let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43, 43];
let found = false;
let search = 43;
let largest = grades[0];
let indexLargest;

for (let i = 0; i < grades.length; i++) {
  if(grades[i] > largest){
    //replace largest
    largest = grades[i]
    indexLargest = i;
  }
}
console.log(indexLargest);

if(found){
  //do something
}*/

//Average of array values
/*
let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43, 43];

let count = 0;
let total = 0;

for (let i = 0; i < grades.length; i++) {
  if(grades[i] !== undefined){
    //legit value
    count++;
    total += grades[i];
  }
}
console.log(total/count);*/

/*Fill an array from user input

let grades = [];

while(true){
  let input = prompt("Add a grade");
  if(input === "q" || input === null){
      break;
    }
  grades.push(Number(input));
  console.log(grades);
} */


/*var username = prompt();
if(username==="Svetla"){
  console.log("Welcome!");
}else{
  console.log("You are not welcome!");
}*/
/*
let username = prompt();
let points = username === "Svetla" ? console.log("10") :console.log("0");;
console.log(points);*/


/*for (let i = 0; i < 10; i++) {
  for (let k = i; k >= 0; k--) {
    //console.log(i, k);
    d.append(k +" ");
  }
  var br = document.createElement('br');
  d.appendChild(br);
}*/

/* Iterate through an array
let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43, 43];
let found = false;
let search = 43;
let largest = grades[0];
let indexLargest;

for (let i = 0; i < grades.length; i++) {
  if(grades[i] > largest){
    //replace largest
    largest = grades[i]
    indexLargest = i;
  }
}
console.log(indexLargest);

if(found){
  //do something
}*/


//Average of array values
/*
let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43, 43];

let count = 0;
let total = 0;

for (let i = 0; i < grades.length; i++) {
  if(grades[i] !== undefined){
    //legit value
    count++;
    total += grades[i];
  }
}
console.log(total/count);*/

/*Fill an array from user input
let grades = [];

while(true){
  let input = prompt("Add a grade");
  if(input === "q" || input === null){
      break;
    }
  grades.push(Number(input));
  console.log(grades);
}*/
// Array methods
/*
let grades = [1, 2, 3, 40, 20, 10, 40];
grades.pop();//FILO
grades.push(5);
grades.splice(2, 3, 5, 6, 6, 6, 6);
//console.log(grades);
grades.splice(2, 4, 0, 0, 0 ,0);
//console.log(grades);
grades.reverse();
//console.log(grades);
grades.sort();
console.log(grades);
grades.sort(function(a, b){return a-b});
console.log(grades);
grades.fill(-1, 0, grades.length);
console.log(grades);
grades.copyWithin();*/


//let grades = [1, 2, 3, 40, 20, 10, 40];
let gradesB = [1, 2, 3, 40, 20, 10, 40];
let tacos = grades.concat(gradesB);
console.log(tacos);
console.log(grades.includes(22));
console.log(grades.indexOf(3));
console.log(grades.join(" "));

console.log(grades.slice(3, 5));
// no check for undefined, no index needed, but can be added
grades.forEach(function(element, i){
  console.log(element, i);
});


let grades =  [
  [1, 2, 3, 40, 20, 10, 40],
  [1, 2, 3, 40, 54, 10, 40],
  [1, 2, 3, 40, 20, 10, 40]
];
//Label with Break and Continue
outerloop:for(let i = 0; i <grades.length;i++){
  for(let k = 0; k <grades[i].length;k++){
    console.log(grades[i][k]);
    if(grades[i][k] === 54){
      console.log("You found the value");
      //continue outerloop;
      break outerloop;
    }
    console.log("doing stuff");
  }
  console.log("~~~~~~~~~~~~~~~~~");//this code is ignored with continue outerloop
  //this code is not ignored with a break
}

var start = new Date(1988,9, 27);// month is zero-based
//console.log(valentine);
let myDate = new Date('1977-11-14');
let myUTCDate = new Date(Date.UTC(2012, 11, 15, 10, 10, 10));
let myDate1 = Date.parse('12 Jan 1980');
console.log(myUTCDate);
console.log(myDate1);
console.log(myDate);
let end = new Date(2023,7, 14);
//console.log(time);
let oneYear = 1000 * 60 * 60 * 24 * 365;
let total = (end - start)/oneYear;//(end-start) the result is in miliseconds
console.log("Time took: " + total);


//Functions as First Class Citizens (Objects)
// Memoization and Algorithms Optimization
pow.calculated={};

function pow(x, y){
  let stringVersion = x + "^" + y;
  console.log("string version: " + stringVersion);

if(stringVersion in pow.calculated){
  console.log("found!");
  return pow.calculated[stringVersion];
}

  console.log("CALCULATING!");
  let total = 1;
  for (let i = 0; i < y; i++) {
    total *= x;
  }
  //pow.calculated.push(total);
  pow.calculated[stringVersion] = total;
  console.log(pow.calculated);
  return total;
}
pow(3,3);
pow(3,3);
pow(3,4);
//console.log(pow(3,3));
//console.log(z);

var z = 10;
let coolFunctions = [pow];
//console.log(coolFunctions[0](3,3));

let mathFunctions = {
  power: pow
};

//console.log(mathFunctions.power(3,3));
pow.description = "Will raise numbers to a power";
console.log(pow.description);
function callbackExample (callback){
  return callback(3, 5);
}

//console.log(callbackExample(pow));

function returnAFunction(){
  return pow;
}


//console.log(returnAFunction()(3,5));
//Default Parameters, Rest Parameters, Implicit Parameters

function largest(x, ...extra){
  let largest = x;
  for(let i = 0; i < extra.length; i++){
    if(extra[i] > largest){
      largest = extra[i];
    }
  }
  return largest;
}

console.log(largest(30, 7, 99, 7, 3,2, 1, 45));



//this
let me = {
  name:"Svetla",
  outputMe:outputMe
}
 function outputMe(){
  console.log(this);
}
function outputMeStrict(){
  'use strict';
  console.log(this);
}

function Person(){
  console.log(this);
  this.name = "Svetla";
  console.log(this);
}

me.outputMe();// method

outputMe();// function
outputMeStrict();// function strict

let person = new Person();// constructor

//call and apply

function doStuff(input, input2){
  console.log(input, input2);
  console.log(this);
}
let args = [5, 10];
//doStuff.call("hello",5, 10);
//doStuff.apply("hello!", args);


//bind

let newFunction = doStuff.bind("hello", 5, 10);

newFunction();


// Arrow Function
function cube(x){
  return x * x * x;
}
let cubeArrow = (x) => x * x * x;

console.log(cube(5));
console.log(cubeArrow(5));

// this with Arrow Functions
//let arrow = () => this;
function normal(){
  return this;
}
console.log(arrow());
console.log(normal());

let functions = {
  arrow: arrow,
  normal: normal, 
  arrowTest:() => this
};

console.log(functions.arrow());
console.log(functions.normal());

// this with Arrow Methods and Object Literals

console.log(functions.arrowTest());

//bind

function normal(){
  return this;
}
let arrow = () => this;
let newFunc = arrow.bind("hello");
console.log(newFunc());
console.log(normal.bind("this")());

//exceptions


function doSomething() {
  throw{
    error: "Tis broke",
    code: -1
  }
}
try{
  doSomething();
}catch(e){
  console.log(e);
  console.log("Error!");
}finally{
  console.log("Wrapping things up..");
}

throw new Error();


// objects

function User(name, interests){
  this.name = name;
  this.interests = interests;
}

let meToo = new User("Svetla",["cooking", "reading"]);

let you = new User("Caleb",["hotWeels"]);
//console.log(meToo);
//console.log(you);

// factory function
function newUser(name, interests){
  let person = {
    name:name,
    interests: interests
  };
  return person;
}
let meToo1 = newUser("Svetla",["cooking", "reading"]);

let you1 = newUser("Caleb",["hotWeels"]);
console.log(meToo1);
console.log(you1);
{
  let teacher = {
    name: "Caleb Curry",
    teaching: ["math", "science"],
    sayHello: function () {
      let message = this.name + " teaches ";
      this.teaching.forEach(function (e) {
        message += e + " ";
      })
      return message;
    }
  };
  let student = {
    name: "Peasant student",
    major: "English"
  };
  Object.setPrototypeOf(teacher, user);
  Object.setPrototypeOf(student, user);

  student.active = true;
  //console.log("teacher", teacher.sayHello());
  //console.log("student", student.sayHello());

  //Polimorphism

  let newMembers = [teacher, student];

  newMembers.forEach(function (e) {
    console.log(e.sayHello());
  });
  console.log("Name in teacher? ", "name" in teacher);
  console.log("Name in teacher? ", "taco" in teacher);
  console.log("Name in teacher? ", teacher.name !== undefined);
  console.log(teacher);

  //hasOwnProperty method
  console.log();
  console.log("in teacher? ", teacher.hasOwnProperty("active"));
  console.log("in teacher? ", "active" in teacher);
  console.log("in teacher? ", teacher.active !== undefined);
}