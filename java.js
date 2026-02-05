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

var outerWear ="T-shirt"; //Global Scope

function myOutfit(){
    
    var outerWear='Sweater'; //local var/scope

    return outerWear;
}

console.log(myOutfit());

//Return

function minusSeven(num){
    return num -7;
}
console.log(minusSeven(10));