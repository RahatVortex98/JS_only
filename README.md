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



































