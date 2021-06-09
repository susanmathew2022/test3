var counter=5;
let myname="Susan";
function sayname(){
  
    console.log(myname);
}

console.log(myname);
sayname();

const list=[1,2,3,4,5,6]
for (let i=1; i<=list.length; i++){
    console.log(i);
}



console.log(`my name is ${myname}`)

/* function getbook(title,author,pages){
    return {
        title:title,
        author:author,
        pages:pages
    }
}

var bookdetails= getbook("Eloquent JavaScript, Second Edition","Marijn Haverbeke",472)

console.log(bookdetails);
console.log(bookdetails.title);
console.log(bookdetails.author);
console.log(bookdetails.pages); */
const books = 
    {
      "isbn": "9781593275846",
      "title": "Eloquent JavaScript, Second Edition",
      "subtitle": "A Modern Introduction to Programming",
      "author": "Marijn Haverbeke",
      "published": "2014-12-14T00:00:00.000Z",
      "publisher": "No Starch Press",
      "pages": 472,
      "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
      "website": "http://eloquentjavascript.net/"
    }
/* 
function getbook(isbn,title,subtitle,author,published,publisher,pages,description,website,){
    return {
        isbn,
        title,
        subtitle,
        author,
        published,
        publisher,
        pages,
       description,
       website,
    }
}

const bookdetails= getbook(...books) */

/* console.log(books);
console.log(books.title);
console.log(books.author);
console.log(books.pages);  */

const {
    isbn,
    title,
    subtitle,
    author,
    published,
    publisher,
    pages,
   description,
   website} = books;

   console.log(title);

const mylocation = (location)=>{
    console.log(`my location is ${location}`)
}

mylocation("paris");

//Old Code
/* const user = {
    name:"Susan",
    age:"37",
    sayName: function(){
        console.log(`my name is ${this.name}`);
       var that = this;
        const mydetails = function(){
            console.log(`my name is ${that.name} and my age is ${that.age}`)
        }
        mydetails();
    }
}
user.sayName(); */

// New way of coding
const newuser = {
    name:"tznia",
    age:"32",
    sayName: function(){
        console.log(`my name is ${this.name}`);
        const moredetails =()=>{
            console.log(`my name is ${this.name} and my age is ${this.age}`)
        }
        moredetails();
    }
}
newuser.sayName();

//old js code for defaul parameter
/*  function Multiply(a,b){
    var c=a||1;
    var d=b||1;
    const cal =`Multiply ${c*d}`;
    return cal;
  console.log(`Multiply ${c*d}`);
}  */


//ES6
function Multiply(a=1,b=1){
    const cal =`Multiply ${a*b}`;
 return cal; 
   console.log(`Multiply ${a*d}`);
} 
//Multiply(20,20);


// array accessing with foreach
//old js
 
const cars = ["Saab", "Volvo", "BMW"];

/* cars.forEach(function(product){
    console.log(product)
}) */

//Es6

//cars.forEach((product)=>{ console.log(product)})


    cardisplay = "<ul>";
    cars.forEach((product, index)=>{
         console.log(product);
         cardisplay += "<li>" + product + "</li>";
         //document.getElementById("demo").innerHTML = product;
    });
    cardisplay += "</ul>";









//Display Function to display in the page
function display(){
 document.getElementById("demo").innerHTML = Multiply(20,20);
 document.getElementById("demo").innerHTML +=  cardisplay; 
} 
