# JS_only

Data Types:

```
Undefined, null, boolean, string, symbol, number, and object
```

3 ways to declare a variable:

1. var myName = 'BOB'      ->Can be redeclared                          -> can be change
2. let myName = 'Bob2'     ->❌ Cannot be redeclared in the same scope  → can be changed
3. const myName = 'Bob3'   ->❌ Cannot be redeclared in the same scope  → ❌ cannot be reassigned

```JS
const by default
let only when reassignment is needed
```

Storing values with the assignment operator:

```JS
var a;
var b=2;
console.log(a);=>null
a=7;
b=a;

console.log(b); =>7
console.log(a); =>7
```

- Initializing variables w/ Assignment Operator (means their values are defined):

```JS
var a=7;
```
- Uninitializing variables (means their values are undefined)

```JS
var a;
```

- Basic Maths

```JS
var sum = 10+2;
console.log(sum);

var sum = 10-2;
console.log(sum);

var sum = 10*2;
console.log(sum);

var sum = 10/2;
console.log(sum);
```

-Increment and decrement:

```JS
//increment

var myVar =87;
// myVar =myVar+1;
myVar++;

console.log(myVar)=>88

//Decrement

var myVar =87;
// myVar =myVar-1;
myVar--;

console.log(myVar)
```

- Decimal Numbers:

```JS
var myDecimal = 0.9999

var product =2.0 * 2.5;
console.log(product);=>5

var product =2.0 / 2.5;
console.log(product);=>.8
```
- Reminder

```JS
var reminder = 11%3;
console.log(reminder);=>2
```
- Augmented math operations

```JS
var a=10;
var b=10;
var c =10;
a+=10;
b+=6;
c-=c;
console.log(a);=>20
console.log(b);=>16
console.log(c);=>0
```

- String( immutable )

```JS
//String length

var firstName='BOB SONGE'
firstNameLength=firstName.length;

console.log(firstNameLength); =>9


//Bracket Notation indexing

var firstLetterOfLastName ='';
var lastName = 'LoveLace';

firstLetterOfLastName=lastName[0];

console.log(firstLetterOfLastName);

var lastName = 'LoveLace';

var lastLetterOfLastName = lastName[lastName.length-1]
console.log(lastLetterOfLastName);
```
Easy memory trick 🧠

```Plaintext
Parameters → P = Placeholders

Arguments → A = Actual values

```
Word Blanks

```JS
function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){

    var result = '';
    result = `The  ${myAdjective} ${myNoun} ${myVerb}  to the store ${myAdverb} `;
    return result;
}
console.log(wordBlanks('dog','big','ran','quickly'));

```

- Array (mutable)


```JS
var myArray=[50,60,70];
var mydata = myArray[2];

console.log(mydata); =>70


//Array Modify

var ourArray=[19,64,99]
ourArray[1]=45;
console.log(ourArray);=>[ 19, 45, 99 ]
```

- Multi dimensional Array

```JS
var theArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]


var theData1 = theArray[1][1];
var theData2 = theArray[2][0];
var theData3 = theArray[0][2];

console.log(theData1);=>5
console.log(theData2);=>7
console.log(theData3);=>3
console.log(theData4);=>14
```

Push Array( put the element in the last ):

```JS
var pushArray=['stimpson','j','cat'];
pushArray.push('happy','joy')

console.log(pushArray);=>[ 'stimpson', 'j', 'cat', 'happy', 'joy' ]
```

Pop Array(remove the last element):

```JS
var ourArray = [['jhon',23],['cat',2]];
var removeArray =ourArray.pop();

console.log(ourArray);=>[ [ 'jhon', 23 ] ]
```

Shift Array(Opposite of POP array, it's remove 1st element)

```JS
var ourArray = [['jhon',23],['cat',2]];
var removeArray =ourArray.shift();

console.log(ourArray); =>[ [ 'cat', 2 ] ]
```

Unshift Array(Opposite of PUSH array, put the element in 1st):

```JS
var ourArray = [['jhon',23],['cat',2]];
var removeArray =ourArray.unshift(['frank',20]);

console.log(ourArray);=>[ [ 'frank', 20 ], [ 'jhon', 23 ], [ 'cat', 2 ] ]
```

- Function(reuseable)

```JS
function ourReuseableFunction(){
    console.log('Hello,World');
}

ourReuseableFunction();=>Hello,World
```

- Using arguments in a function

```JS
function functionWithArgs(a,b){
    console.log(a-b);
}

functionWithArgs(10,5);=>5


```
- Global Scope->Variables or functions that are declared outside of any function or block and can be accessed from anywhere in the program.

```JS
let myName = 'Bob'   // global variable

function sayHello() {
    console.log(myName) 
}

sayHello()
console.log(myName)    
```
➡️ myName is in the global scope.

- Local Scope->only inside the function.

```JS

function test() {
    let age = 20
    console.log(age) 
}

console.log(age) 
```
➡️ age exists only inside the function.

Global vs. Local: when this happens, local scope takes precedence over global!


```JS
var outerWear ="T-shirt"; //Global Scope

function myOutfit(){
    
    var outerWear='Sweater'; //local var/scope

    return outerWear;
}

console.log(myOutfit()); =>Sweater

```
- Return

```JS
//Defined value

function minusSeven(num){
    return num -7;
}
console.log(minusSeven(10));=>3

function timesFive(num){
    return num *5
}
console.log(timesFive(5));=>25

```
- Stand In Line =>It means FIFO: First In, First Out

```Plaintext
combination of push and shift: put last, remove 1st element!
```

```JS

function nextInLine(array,item){

    array.push(item); //2nd work here add new element
    return array.shift(); //1st work here remove 1st element
}

var testarr=[1,2,3,4,5];

console.log(nextInLine(testarr,6));
console.log(testarr);

```

- Boolean 


- If statement:

```JS
function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return 'Yes this is ture';
    }
    return "no it's false";
}   

console.log(ourTrueOrFalse(true));=>Yes this is ture
```

- Operators

```JS
== -> equal to
=  -> assign value

function testStrict(val){
    if (val==10){
        return 'equal';
    }
    return "not equal";
}
console.log(testStrict(12));

// === ->strict equality

function testStrict(val){
    if (val===10){
        return 'equal';
    }
    return "not equal";
}
console.log(testStrict(12)); =>not equal

5 === "5"   // false ✅
true === 1  // false ✅
```

- AND/OR operator

```JS

function testLogicalAnd(val){
    if(val<=50 && val>=25){
        return 'yes';
    }
    return 'No';
}
console.log(testLogicalAnd(26));

function testLogicalAnd(val){
    if(val<=50 || val>=25){
        return 'yes';
    }
    return 'No';
}
console.log(testLogicalAnd(100));


```

- Else statement

```JS
function testElse(val){
    // var result ="";

    if(val>5){
        result ="bigger than 5";
    }
    else{
        result = "result smaller than 5"
    }

    return result;
}

console.log(testElse(4));


function statementChaning(size){
    if(size <5 ){
        return "Tiny";
    }
    else if(size<10){
        return "small";
    }
    else if(size<15){
        return "medium";
    }
    else if(size<20){
        return "large";
    }
    else if(seize>=20){
        return "huge";
    }
    else{
        return "nothing"
    }
}

console.log(statementChaning(10));


```

- Golf Math(ex-1)
  
```JS
var names =["Hole-in-one","Eagle","Birdie","Par","Bogey","Double Bogey"]

function golfScore(par,strokes){

    if(strokes == 1){
        return names[0];
    }
    else if(strokes<= - 2){
        return names[1];
    }
    else if(strokes == par -1){
        return names[2];

    }
    else if(strokes == par){
        return names[3];
    }
    else if(strokes == par+1){
        return names[4];
    }
    else if(strokes == par+2){
        return names[5];
    }
    else{
        return "go home";
    }
}
console.log(golfScore(5,4))

```

- Objects =>An object is a collection of key–value pairs.

```Plaintext
Key = property name
Value = data (string, number, array, function, even another object)

```

```JS
const ourDog={
    "name":"camper",
    'legs':4,
    "tails":1,
    "firends":['mika','frank','lee'],
};
```

- Dot notation =>Accessing object data
  
```JS  
console.log(ourDog.name);=>
```
- Bracket notation =>Accessing object data

```JS
console.log(ourDog["name"]);=>camper
```

- Updating/Adding object

```JS
ourDog.name="Goldy";
console.log(ourDog); =>  {
                          name: 'Goldy',
                          legs: 4,
                          tails: 1,
                          firends: [ 'mika', 'frank', 'lee' ]
                        }
```
- Adding new property

```JS
ourDog.bark = 'meow-meow';
ourDog.color = ['black'];

console.log(ourDog);  =>{
                          name: 'Goldy',
                          legs: 4,
                          tails: 1,
                          firends: [ 'mika', 'frank', 'lee' ],
                          bark: 'meow-meow',
                          color: [ 'black' ]
                        }

```
- Delete property

```JS  
delete ourDog.color;
console.log(ourDog); ={
                          name: 'Goldy',
                          legs: 4,
                          tails: 1,
                          firends: [ 'mika', 'frank', 'lee' ],
                          bark: 'meow-meow'
                        }
```

- Complex Object=> similar to JSON myMusic Array has 2 object !

```JS
const myMusic = [
    {
        "artist":"Billie",
        "title":"Piano Man",
        "release_year":1973,
        "formats":[
            'cD',
            "LP",
            "8T",
        ],
        "gold":true
    },
    {
        "artist":"nelly",
        "title":"Hope it's a dream",
        "release_year":2019,
        "formats":[
            "Youtube",
            "DVD",
        ],
        "gold":false
    },
];
```
- Accessing nested Object 

```JS
const myStorage ={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs",
        },
        "outside":{
            "trunk":"jack"
        }
}
};
const myAccess =myStorage.car.inside["glove box"];
console.log(myAccess);
```

- Nested array accessing:

```JS
  const myPlants = [
    {
        type: "flower",
        List: ["rose", "tulip", "daisy"],
        area: ["south", "north"]
    },
    {
        type: "trees",
        List: ["fir", "pine"],
        area: ["east", "west"]
    }
];
const plantAcess=myPlants[0].List[1];
const plantArea =myPlants[0].area[1];
console.log(plantAcess);
console.log(plantArea);
```

- Record Collection =>A record collection is a nested object structure used to store multiple records, where a unique key identifies each record and contains related data

```
object → object → array
```

```JS
const recordCollection={

    2448:{
        albumTitle:"Slippery when wet",
        artist : "bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    2785:{
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"]
    },
    2505:{
        artist: "Robert Palmer",
        tracks: []
    }


};
//Accessing
const songCollection =recordCollection[2505].artist;
console.log(songCollection); =>Robert Palmer

```

- While Loops

```JS
const myArray = [];

let i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);


```

- For Loop

```JS
 let ourArray =[];
for(let i=0;i<6;i++){
    ourArray.push(i);
 }
 console.log(ourArray);

```
- odd number



```JS
let myArr=[];
 for(let i=1;i<10;i+=2){
     myArr.push(i); 
     }
 console.log(myArr);

```

- count backward
  
```JS
let myArr=[];

for(let i=10;i>0;i-=1){
    myArr.push(i);
}
console.log(myArr);

```

- Iterate

```JS
const ourArr=[9,10,11,12];
let ourTotal=0;

for(let i=0;i<ourArr.length;i++){
  ourTotal = ourTotal + ourArr[i];
}
console.log(ourTotal);

```
- Ternary Operator=>condition ? statement-if-true : statement-if-false;

```JS
function checkEqual(a,b){
    return a===b ? true :false;
}
console.log(checkEqual(1,2));
```

//const => read-only mode can't change.

```JS
const s =[5,7,2];
function editPlace(){
    s=[2,5,7];
}

editPlace();

```
//Update this way const

```JS
const m =[5,7,2];
function editPlace(){
    m[0]=2;
    m[1]=5;
    m[2]=7;
}

editPlace();
console.log(m);=>[ 2, 5, 7 ]
```
- Arrow Function

```JS
let magic = function(){
    return Date();
}
        ⬇️
let magic = () =>new Date();
```
Parameter with arrow function:

```JS
const myConcat = function(arr1,arr2){
    return arr1.concat(arr2);
};
         ⬇️

const myConcat = (arr1,arr2)=>arr1.concat(arr2);

```

         ⬇️

```JS
const myConcat = (arr1,arr2) =>arr1.concat(arr2);

console.log(myConcat([1,2],[3,5]));=>[ 1, 2, 3, 5 ]

```
- Rest Operators =>The rest operator is written as ... and it’s used to collect multiple values into a single array.

Rule:
Rest parameter must be last

```JS
const sum =(function(){
    return function sum(x,y,z){
        const args =[x,y,z];
        return args.reduce((a,b)=>a+b,0);
    };

})();
console.log(sum(1,2,3));

            ⬇️

const sum =(function(){
    return function sum(...args){
        
        return args.reduce((a,b)=>a+b,0);
    };

})();
console.log(sum(1,2,3))

```

| Operator           | Does what                     |
| ------------------ | ----------------------------- |
| **Rest (`...`)**   | Collects values into an array |
| **Spread (`...`)** | Expands values out            |



- Destructuring Assignment =>

Without destructuring ❌

```JS

const user = {
    name: "Bob",
    age: 22,
    city: "Dhaka"
};

const name = user.name;
const age = user.age;

```

With destructuring ✅

```JS
const { name, age } = user;
```

- Template Literals:

```JS
const name = "Alex";
const age = 21;

console.log(`My name is ${name} and I am ${age} years old`);

👉 ${} allows you to insert any JS expression.

```


<h3 align="center> FOR REACT </h3>

1️⃣ export default vs named export (VERY IMPORTANT FOR REACT)
✅ Default export

```JS
export default function doSomething() {

}
```
1. Only one default export per file
2. You can import it with any name

```JS
import doSomething from "./file";
```
✅ Named export

```JS
export const doSomething = () => {

};
```
1. You can have multiple named exports
2. Import name must match exactly

```JS
import { doSomething } from "./file";
```

📌 React rule of thumb:
1. Components → usually export default
2. Helpers / utils → named exports

2️⃣ Arrow function in onClick (React event handling)

```JS
<button onClick={() => {
    console.log("hello world");
}}>
</button>
```
What’s happening:

1. onClick expects a function
2. Arrow function prevents immediate execution

3️⃣ Ternary Operator (React CONDITIONAL RENDERING 🔥)

let age = 16;
let name = age > 10 ? "Pedro" : "Jack";

Structure:

```JS
condition ? valueIfTrue : valueIfFalse
```
React JSX version:

```JS
const Component = () => {
    return age > 10 ? <div>Pedro</div> : <div>Jack</div>;
};
```
React cannot use if directly inside JSX, so:

1. ternary
2. &&
3. functions
This is 🔑 for dynamic UI.

4️⃣ Objects (state, props, API responses)

```JS
const person = {
    name: "Pedro",
    age: 30,
    isMarried: false,
};
```
React uses objects everywhere:

1. props
2. state
3. API data
5️⃣ Destructuring assignment (React favorite ❤️)

```JS
const { name, age, isMarried } = person;
```
In React props (REAL USE)

```JS

function User({ name, age }) {
    return <h1>{name} - {age}</h1>;
}
```

6️⃣ Spread Operator (...)=> The spread operator copies all properties from an object (or array) into a new one.

```JS
const person1={
    name:"maria",
    age:46,
    isMarried: true,
}


const person2={...person1,name:'Ramos',isMarried:false}
console.log(person2); =>{ name: 'Ramos', age: 46, isMarried: false }

```
7️⃣ map() ⭐ (MOST IMPORTANT FOR REACT)=>map() is how React renders lists.

👉 map() does NOT change the original array
👉 map() returns a NEW array

map() = take one array → create a NEW array → same length → each item transformed

map() formula (memorize this)

```Plaintext
const newArray = oldArray.map(item => NEW_VALUE);
```

```JS

let names=["pedro",'jess','leon'];

const newNames=names.map((name)=>{
    return name+"1";
});
console.log(newNames);

```
8️⃣ filter() (remove, search, hide items)=>filter() goes through an array and keeps only the items that return true

1. returns a NEW array
2. original array stays unchanged
3. length can be smaller

```JS
let names = ["pedro", "jess", "leon", "pedro"];

const filteredName = names.filter((name) => {
    return name !== "pedro";
});
```
Golden rule 🧠

map() changes items
filter() removes items


