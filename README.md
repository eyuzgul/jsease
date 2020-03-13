# jsease

jsease is __super simple__ and __easy__ functions for JavaScript coders. 


### Installation

```sh
$ npm i jsease
```

### How to use?

```js
const jsease = require("jsease");
const fn = new jsease();
```

## Available Functions

Currently available functions listed below

>#### is* Functions
`isStr()`, `isEmpty()`, `isNum()`, `isNan()`, `isInt()`, `isFloat()`, `isBool()`, `isFalsy()`, `isNull()`, `isUndef()`, `isNund()`, `isArr()`, `isObj()`

```js
// Define some variables
const str1 = "lorem ipsum. dolor!";
const str2 = "4.1";
const num = 3;
const float = 3.14;
const empty = "";
const varNull = null;
const varUndef = undefined;
const valNaN = NaN;
const valTrue = true;
const valFalse = false;
const arr1 = [];
const arr2 = ["One","Two",["Aaa"]];
const obj1 = {};
const obj2 = {a:"OnE",b:"fifty ONE",c:{aa:"aAa",bb:"bBb"}}; 
```
Results

| Function | str1 | str2 | num | float | empty | varNull | varUndef | valNaN | valTrue | valFalse | arr1 | arr2 | obj1 | obj2 | 
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| isStr() |**true**|**true**|_false_|_false_|**true**|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|
| isEmpty() |_false_|_false_|_false_|_false_|**true**|**true**|**true**|**true**|_false_|**true**|**true**|_false_|**true**|_false_|
| isNum() |_false_|_false_|**true**|**true**|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|
| isNan() |_false_|_false_|_false_|_false_|_false_|_false_|_false_|**true**|_false_|_false_|_false_|_false_|_false_|_false_|
| isInt() |_false_|_false_|**true**|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|
| isFloat() |_false_|_false_|_false_|**true**|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|
| isBool() |_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|**true**|**true**|_false_|_false_|_false_|_false_|
| isFalsy() |_false_|_false_|_false_|_false_|**true**|**true**|**true**|**true**|_false_|**true**|_false_|_false_|_false_|_false_|
| isNull() |_false_|_false_|_false_|_false_|_false_|**true**|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|
| isUndef() |_false_|_false_|_false_|_false_|_false_|_false_|**true**|_false_|_false_|_false_|_false_|_false_|_false_|_false_|
| isNund() |_false_|_false_|_false_|_false_|_false_|**true**|**true**|_false_|_false_|_false_|_false_|_false_|_false_|_false_|
| isArr() |_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|**true**|**true**|_false_|_false_|
| isObj() |_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|_false_|**true**|**true**|


>#### len(txt)
Return lenght of string, number... OR array/object items counts
```js
const txt = 'Lorem ipsum dolor!';
console.log(fn.len(txt));  // 18

const arr = [ 'One', 'Two', 'Aaa' ];
console.log(fn.len(arr));  // 3

const obj = { a: 'OnE', b: 'fifty ONE'};
console.log(fn.len(obj));  // 2
```

>#### upper(txt)
Return all UpperCase string.. (include recursive Array and Objects)
```js

const txt = 'Lorem ipsum dolor!';
console.log(fn.upper(txt));  // LOREM IPSUM DOLOR!

const arr = [ 'One', 'Two', 'Aaa' ];
console.log(fn.upper(arr));  // [ 'ONE', 'TWO', 'AAA' ]

const obj = { a: 'OnE', b: 'fifty ONE'};
console.log(fn.upper(obj));  // { a: 'ONE', b: 'FIFTY ONE' }

```


>#### lower(txt)
Return all lowerCase string.. (include recursive Array and Objects)
```js

const txt = 'Lorem ipsum dolor!';
console.log(fn.lower(txt)); // lorem ipsum dolor!

const arr = [ 'One', 'Two', 'Aaa' ];
console.log(fn.lower(arr)); // [ 'one', 'two', 'aaa' ]

const obj = { a: 'OnE', b: 'fifty ONE'};
console.log(fn.lower(obj)); // { a: 'one', b: 'fifty one' }

```

#### ... Documentation is NOT Completed...

