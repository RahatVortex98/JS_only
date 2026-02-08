// data types and variable:
//data types:Undefined,null,boolean,string,symbol,number and object


//  var myName1 = 'BOB'
//  console.log(myName1)
//  let myName2 = 'Bob2'

//  console.log(myName2)
//  const myName3 = 'Bob3'
//  console.log(myName3)

// var myName = 'BOB'

// {
//   let myName = 'Bob2'
//   console.log(myName) // Bob2
// }

// console.log(myName) // BOB

// const myName='Bob'
// myName ='Tofu'

// console.log(myName)

// var a;
// var b=2;

// a=7;

// b=a;

// console.log(b);

// var sum = 10+2;

// console.log(sum);

// var sum = 10-2;

// console.log(sum);

// var sum = 10*2;

// console.log(sum);
// var sum = 10/2;

// console.log(sum);


// var myVar =87;

// // myVar =myVar+1;
// myVar++;

// console.log(myVar)

// var myVar =87;

// // myVar =myVar-1;
// myVar--;

// console.log(myVar)

// var product =2.0 * 2.5;

// console.log(product);

// var product =2.0 / 2.5;

// console.log(product);


// var reminder = 11%3;
// console.log(reminder);

// var a=10;
// var b=10;
// var c =10;
// a+=10;
// b+=6;
// c-=c;
// console.log(a);
// console.log(b);
// console.log(c);


// String

// var myStr = 'i come first.'+'I come second';

// console.log(myStr);

// var ourStr ='this is 1st sentence';
// ourStr +='this is 2nd sentence';

// console.log(ourStr);

// var myName ='Bob';
// var myStr ='My name is '+myName+' and i am well';
// console.log(myStr);


//String length

// var firstName='BOB SONGE'

// firstNameLength=firstName.length;

// console.log(firstNameLength);

//Bracket Notation

// var firstLetterOfLastName ='';
// var lastName = 'LoveLace';

// firstLetterOfLastName=lastName[0];

// console.log(firstLetterOfLastName);


// var lastName = 'LoveLace';

// var lastLetterOfLastName = lastName[lastName.length-1]
// console.log(lastLetterOfLastName);

//WORD BlANKS

// function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){

//     var result = '';
//     result = `The  ${myAdjective} ${myNoun} ${myVerb}  to the store ${myAdverb} `;
//     return result;
// }
// console.log(wordBlanks('dog','big','ran','quickly'));

//Array (mutable)

// var myArray=[50,60,70];
// var mydata = myArray[2];

// console.log(mydata);

//Array Modify

// var ourArray=[19,64,99]
// ourArray[1]=45;
// console.log(ourArray);

//Multi dimensional Array

// var theArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]


// var theData1 = theArray[1][1];
// var theData2 = theArray[2][0];
// var theData3 = theArray[0][2];
// var theData4 = theArray[3][2];
// console.log(theData1);
// console.log(theData2);
// console.log(theData3);
// console.log(theData4);

// var pushArray=['stimpson','j','cat'];
// pushArray.push('happy','joy')

// console.log(pushArray);

//POP array

// var ourArray = [['jhon',23],['cat',2]];

// var removeArray =ourArray.unshift(['frank',20]);

// console.log(ourArray);

// function ourReuseableFunction(){
//     console.log('Hello,World');
// }

// ourReuseableFunction();


// function functionWithArgs(a,b){
//     console.log(a-b);
// }

// functionWithArgs(10,5);

// //Global Scope

// let myName = 'Bob'   // global variable

// function sayHello() {
//     console.log(myName) // ✅ accessible here
// }

// sayHello()
// console.log(myName)     // ✅ accessible here too

// function test() {
//     let age = 20
//     console.log(age) // ✅
// }

// console.log(age) 


//Global vs Local

// var outerWear ="T-shirt"; //Global Scope

// function myOutfit(){
    
//     var outerWear='Sweater'; //local var/scope

//     return outerWear;
// }

// console.log(myOutfit());

// //Return

// function minusSeven(num){
//     return num -7;
// }
// console.log(minusSeven(10));

// function timesFive(num){
//     return num *5
// }
// console.log(timesFive(5));



// var changed=0;

// function change(num){
//     return (num+5)/3;
// }
// changed=change(10);

//Stand In Line


// function nextInLine(array,item){

//     array.push(item);
//     return array.shift();
// }

// var testarr=[1,2,3,4,5];

// console.log(nextInLine(testarr,6));
// console.log(testarr);


//If Statements

// function ourTrueOrFalse(isItTrue){
//     if(isItTrue){
//         return 'Yes this is ture';
//     }
//     return "no it's false";
// }   

// console.log(ourTrueOrFalse(true));


// function tureOrFalse(wasThatTrue){
//     if(wasThatTrue){
//         return 'True';
//     }
//     return 'False'
// }
// console.log(tureOrFalse(false));


// //Operators

// function testStrict(val){
//     if (val==10){
//         return 'equal';
//     }
//     return "not equal";
// }

// console.log(testStrict(12));



// function testStrict(val){
//     if (val===10){
//         return 'equal';
//     }
//     return "not equal";
// }
// console.log(testStrict(12));



// function testLogicalAnd(val){
//     if(val<=50 && val>=25){
//         return 'yes';
//     }
//     return 'No';
// }
// console.log(testLogicalAnd(26));

// function testLogicalAnd(val){
//     if(val<=50 || val>=25){
//         return 'yes';
//     }
//     return 'No';
// }
// console.log(testLogicalAnd(100));


//else Statement


// function testElse(val){
//     // var result ="";

//     if(val>5){
//         result ="bigger than 5";
//     }
//     else{
//         result = "result smaller than 5"
//     }

//     return result;
// }

// console.log(testElse(4));


// function statementChaning(size){
//     if(size <5 ){
//         return "Tiny";
//     }
//     else if(size<10){
//         return "small";
//     }
//     else if(size<15){
//         return "medium";
//     }
//     else if(size<20){
//         return "large";
//     }
//     else if(seize>=20){
//         return "huge";
//     }
//     else{
//         return "nothing"
//     }
// }

// console.log(statementChaning(10));


//GOLF code

// var names =["Hole-in-one","Eagle","Birdie","Par","Bogey","Double Bogey"]

// function golfScore(par,strokes){

//     if(strokes == 1){
//         return names[0];
//     }
//     else if(strokes<= - 2){
//         return names[1];
//     }
//     else if(strokes == par -1){
//         return names[2];

//     }
//     else if(strokes == par){
//         return names[3];
//     }
//     else if(strokes == par+1){
//         return names[4];
//     }
//     else if(strokes == par+2){
//         return names[5];
//     }
//     else{
//         return "go home";
//     }
// }
// console.log(golfScore(5,4))



//Objects


// const ourDog={
//     "name":"camper",
//     'legs':4,
//     "tails":1,
//     "firends":['mika','frank','lee'],
// };
// console.log(ourDog);

// //Dot notation
// console.log(ourDog.name);
// //bracket notation
// console.log(ourDog["name"]);

// //Updating object
// ourDog.name="Goldy";
// console.log(ourDog);

// //Adding new property

// ourDog.bark = 'meow-meow';
// ourDog.color = ['black'];

// console.log(ourDog);

// //delete property
// delete ourDog.color;
// console.log(ourDog);


// //complex Object


// const myMusic = [
//     {
//         "artist":"Billie",
//         "title":"Piano Man",
//         "release_year":1973,
//         "formats":[
//             'cD',
//             "LP",
//             "8T",
//         ],
//         "gold":true
//     },
//     {
//         "artist":"nelly",
//         "title":"Hope it's a dream",
//         "release_year":2019,
//         "formats":[
//             "Youtube",
//             "DVD",
//         ],
//         "gold":false
//     },
// ];

// //Accessing nested Object 

// const myStorage ={
//     "car":{
//         "inside":{
//             "glove box":"maps",
//             "passenger seat":"crumbs",
//         },
//         "outside":{
//             "trunk":"jack"
//         }
// }
// };
// const myAccess =myStorage.car.inside["glove box"];
// console.log(myAccess);


// //Nested Array

// const myPlants = [
//     {
//         type: "flower",
//         List: ["rose", "tulip", "dasy"],
//         area: ["south", "north"]
//     },
//     {
//         type: "trees",
//         List: ["fir", "pine"],
//         area: ["east", "west"]
//     }
// ];
// const plantAcess=myPlants[0].List[1];
// const plantArea =myPlants[0].area[1];
// console.log(plantAcess);
// console.log(plantArea);


// //Record Collection


// const recordCollection={

//     2448:{
//         albumTitle:"Slippery when wet",
//         artist : "bon Jovi",
//         tracks: ["Let It Rock", "You Give Love a Bad Name"]
//     },
//     2785:{
//         albumTitle: "1999",
//         artist: "Prince",
//         tracks: ["1999", "Little Red Corvette"]
//     },
//     2505:{
//         artist: "Robert Palmer",
//         tracks: []
//     }


// };

// //Updating

// function updateRecord(id,prop,value){

//     if(value === ""){
//         delete recordCollection[id][prop];
//     }
//     else if(prop === "tracks"){
//         recordCollection[id][prop]=recordCollection[id][prop] || [];
//         recordCollection[id][prop].push(value);
//     }
//     else{
//         recordCollection[id][prop]=value;
//     }
//     return recordCollection;

// }
//   console.log(updateRecord(2505,"artist",'Ganja'));



//while loop
// const myArray = [];

// let i = 0;
// while (i < 5) {
//     myArray.push(i);
//     i++;
// }

// console.log(myArray);

// //For loops

// let ourArray =[];

// for(let i=0;i<6;i++){
//     ourArray.push(i);
// }

// console.log(ourArray);

//odd number

// let myArr=[];

// for(let i=1;i<10;i+=2){
//     myArr.push(i);
// }
// console.log(myArr);

//count backward
// let myArr=[];

// for(let i=10;i>0;i-=1){
//     myArr.push(i);
// }
// console.log(myArr);


// const ourArr=[9,10,11,12];
// let ourTotal=0;

// for(let i=0;i<ourArr.length;i++){
//   ourTotal = ourTotal + ourArr[i];
// }
// console.log(ourTotal);


// const myArr=[2,3,4,5,6];
// let ourAdd=0;
// for(i=0;i<myArr.length;i++){
//     ourAdd = ourAdd+myArr[i];
// }
// console.log(ourAdd);

//Nested Loops

//RandomFraction and Whole number


//Ternary Operator

// condition ? statement-if-true : statement-if-false;
function checkEqual(a,b){
    return a===b ? true :false;
}
console.log(checkEqual(1,2));

//Multiple ternary operator

function checkSign(num){
    return num > 0 ? "positive":num<0 ?"negative":"zero"
}
console.log(checkSign(10));

//const =>read only mode

// const s =[5,7,2];
// function editPlace(){
//     s=[2,5,7];
// }

// editPlace();

// const m =[5,7,2];
// function editPlace(){
//     m[0]=2;
//     m[1]=5;
//     m[2]=7;
// }

// editPlace();
// console.log(m);


//Arrow Function

// let magic = function(){
//     return Date();
// }

// let magic = () =>new Date();

// const myConcat = function(arr1,arr2){
//     return arr1.concat(arr2);
// };


// const myConcat = (arr1,arr2) =>arr1.concat(arr2);

// console.log(myConcat([1,2],[3,5]))


// //HIgher function 

// const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];

// const squareList =(arr)=>{
//     const squareIntegers =arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x);
//     return squareIntegers;
// }
// const squareIntegers = squareList(realNumberArray);
// console.log(squareIntegers);



//Rest operators

// const sum =(function(){
//     return function sum(x,y,z){
//         const args =[x,y,z];
//         return args.reduce((a,b)=>a+b,0);
//     };

// })();
// console.log(sum(1,2,3));

// const sum =(function(){
//     return function sum(...args){
        
//         return args.reduce((a,b)=>a+b,0);
//     };

// })();
// console.log(sum(1,2,3))


// //Spread Operator

// const arr1 =['JAN','FEB','MAR','APR','MAY'];
// let arr2;
// (function(){
//     arr2 = [...arr1];
//     arr1[0]='potato'
// })();
// console.log(arr2);
// console.log(arr1);


// const arr = [1, 2, 3];
// console.log(...arr); // 1 2 3


// //Template literals

// const person ={
//     name:'Zodiac',
//     age:56
// };

// const greeting = `Hello my name is ${person.name} I am ${person.age} years old`;

// console.log(greeting);


// function greet(name){
//     return `HEllo ${name}`;
// }
// console.log(greet('bob'))


// const createPerson =(name,age,gender)=>{
//     return{
//         name:name,
//         age:age,
//         gender:gender
//     };

// };
// console.log(createPerson("zodiac","56","male"));




// const updatePerson =(name,age,gender)=>({name,age,gender});
// console.log(updatePerson("zodiac","56","male"));


// //FOR REACT


// export default function doSomething(){

// };

// export const doSomething =()=>{

// };


// <button onClick={ ()=>{
//     console.log("hello world");
// }}>

// </button>


// //Ternary Operator

// let age= 16;
// let name = age>10?"Pedro":"Jack";


// const component =()=>{
//     return age>10?<div>Pedro</div>: <div>Jack</div>
// };


// //Objects

// // regular objects


// const person = {
//     name:"Pedro",
//     age:30,
//     isMarried:false,
// };

// const name = person.name
// const age =person.age
// const isMarried = person.isMarried


// //using destructing


// const {name,age,isMarried}=person;


//spread operator

// const person1={
//     name:"maria",
//     age:46,
//     isMarried: true,
// }


// const person2={...person1,name:'Ramos',isMarried:false}
// console.log(person2);


//.map()

let names=["pedro",'jess','leon'];

const newNames=names.map((name)=>{
    return name+"1";
});
console.log(newNames);


//.filter()

let names=["pedro",'jess','leon',"pedro"];

const filteredName = names.filter((name)=>{
    return name!=="pedro";
});

console.log(filteredName);