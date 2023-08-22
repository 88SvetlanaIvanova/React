
let d = document.getElementById("destination");
let myButton = document.getElementById("button");
myButton.style.backgroundColor = "Red";
let userInput = document.getElementById("input");

    myButton.onclick = function(){
        let node = document.createElement('li');
        console.log(node);
       // node.appendChild
       // (document.createTextNode("new"));

        node.appendChild(document.createTextNode(userInput.value));

        let list = document.getElementById
        ("items");

        list.appendChild(node);
    }; 
/*
document.getElementById("button").onclick = function () {
  document.getElementById("confirm").innerHTML = "Order placed. Check email for confirmation";

}
myButton.onclick = function () {
  myButton.style.backgroundColor = "green";
}
document.getElementById("lemons")
  .onclick = () => { console.log("Clicked!") };

document.getElementById("input").value = "!!!!";

console.log(document.getElementById("input").hasAttribute("tacos"));
console.log(document.getElementById("input").attributes);

console.log(document.getElementById("input").getAttribute("tacos"));


 
console.log(document.childNodes);

let list = document.getElementsByTagName("ol");
console.log(list);
let ourList= list[0];
console.log(ourList);

ourList.onmouseover = function(){
  console.log("mouse over");
  document.getElementById("home").innerHTML = "house";
}
myButton.onmouseenter = function(){
  //reveal
  myButton.innerHTML = "revealed";
}
myButton.onmouseleave = function(){
  myButton.innerHTML = "Hover over me!";
  ourList.remove();
}*/


{



  /*
  let paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs);

  console.log(paragraphs[2].childNodes[0].childNodes[0].nodeValue = "llamas");

  /*

  let list = document.getElementsByTagName("li");

  console.log(list[0].childNodes[0]);
  console.log(list[0].childNodes[0].nodeName);

  if(list[0].nodeType === 1){
    console.log("element");
  } else if(list[0].nodeType === 3){
    console.log("text");
  }
  
 /*let list = 
  document.getElementsByTagName("li");
  console.log(list);
  let listBord = 
  document.getElementsByClassName("border");
  console.log(listBord);*/
}

{/*
    let list=document.childNodes[1]
    .childNodes[2].childNodes[1];
    console.log(list);
    console.log(list.parentElement);
    console.log(list.nextSibling.nextSibling);*/
}
{
  //  Setting Prototypes with Constructors 
  /*

 function User() {
   this.active = false;
 }

 User.prototype.sayHello = function () {
   return this.name +" says hi!";
 }

 function Student(name, major){
   this.name = name;
   this.major=major;
 }
 Student.prototype = new User();

 function Teacher(name, teaching){
   this.name = name;
   this.teaching = teaching;
 }

 Teacher.prototype = new User();
 Teacher.prototype.sayHello = function(){
   return "Teacher says hi!";
 }

 let student = new Student("Peasant student", "English");
 let teacher = new Teacher( "Calen Curry", ["math", "science"]);

 console.log(student, teacher);
 console.log(teacher instanceof Teacher);
 console.log(teacher instanceof User);

 if(teacher instanceof Student){
   console.log("yep");
 }else {
   console.log("nope");
 }

 function doSomething(user){
   if(user instanceof User){
     return 5;
   }
   return -1;
 }
 console.log(doSomething(teacher));

 */
}

{
  function doSomething() {
    return 1 + 1;
  }
  let test = new doSomething();

  if (doSomething.prototype === Object.getPrototypeOf(test)) {
    // console.log("match");
  }

  function Taco() {
    this.toppings = ["cheese"];
  };

  Taco.prototype.make = function () {
    console.log("Making a taco...");
  };

  let myTaco = new Taco();

}







