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


const ourDog={
    "name":"camper",
    'legs':4,
    "tails":1,
    "firends":['mika','frank','lee'],
};
console.log(ourDog);

//Dot notation
console.log(ourDog.name);
//bracket notation
console.log(ourDog["name"]);

//Updating object
ourDog.name="Goldy";
console.log(ourDog);

//Adding new property

ourDog.bark = 'meow-meow';
ourDog.color = ['black'];

console.log(ourDog);

delete ourDog.color;
console.log(ourDog);