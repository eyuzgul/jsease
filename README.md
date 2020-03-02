# jsease

jsease is __super simple__ and __easy__ functions for JavaScript coders. 

Note: _I'm also new in JavaScript and trying to improve myself_

## New Features!

  - `capital` function is updated
  - `title` function is updated


### Installation

```sh
$ npm i jsease
```

#### Adding to your App

```js
const fn = require("jsease");
```

## Available Functions

Currently available functions listed below

```js
// define some variables
const txt = 'Lorem ipsum dolor!';
const long = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis! nulla quisquam? at!!!';
```

### upper(txt)
```js
console.log(fn.upper(txt)); 
// LOREM IPSUM. DOLOR!
console.log(fn.upper(long)); 
// LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. FACILIS! NULLA QUISQUAM? AT!!!

```
### lower(txt)
```js
console.log(fn.lower(txt)); 
// lorem ipsum. dolor!
console.log(fn.lower(long)); 
// lorem ipsum dolor sit amet, consectetur adipisicing elit. facilis! nulla quisquam? at!!!

```
### camel(txt)
```js
console.log(fn.camel(txt)); 
// LoremIpSUmDolor!
console.log(fn.camel(long)); 
// LoremIpSUmDolorSITAmetConsecteturAdipisicingElitFacilisNullaQuisquamAt!

```
### capital(txt [,noPreservedCase])
```js
console.log(fn.capital(txt)); 
// Lorem ipsum. Dolor!
console.log(fn.capital(txt, true)); 
// Lorem ipSUm. Dolor!
console.log(fn.capital(long)); 
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis! Nulla quisquam? At!
console.log(fn.capital(long, true)); 
// Lorem ipSUm dolor SIT amet, consectetur adipisicing elit. Facilis! Nulla quisquam? At!
```
### title(txt [,noPreservedCase])
```js
console.log(fn.title(txt)); 
// Lorem Ipsum. Dolor!
console.log(fn.title(txt, true)); 
// Lorem IpSUm. Dolor!
console.log(fn.title(long)); 
// Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Facilis! Nulla Quisquam? At!!!
console.log(fn.title(long, true)); 
// Lorem IpSUm Dolor SIT Amet, Consectetur Adipisicing Elit. Facilis! Nulla Quisquam? At!!!
```
### isUpper(txt)
```js
console.log(fn.isUpper(txt)); 
// false
```

### isLower(txt)
```js
console.log(fn.isLower(txt)); 
// false
```

### isCamel(txt)
```js
console.log(fn.isCamel(txt)); 
// false
```

### isCapital(txt)
```js
console.log(fn.isCapital(txt)); 
// false
```

### isTitle(txt)
```js
console.log(fn.isTitle(txt)); 
// false
```

### reverse(txt)
```js
console.log(fn.reverse(txt)); 
// !rolod .mUSpi meroL
console.log(fn.reverse(long)); 
// !!!ta ?mauqsiuq allun !silicaF .tile gnicisipida rutetcesnoc ,tema TIS rolod mUSpi meroL
// false
```

### switch(txt)
```js
console.log(fn.switch(txt)); 
// lOREM IPsuM. DOLOR!
console.log(fn.switch(long)); 
// lOREM IPsuM DOLOR sit AMET, CONSECTETUR ADIPISICING ELIT. fACILIS! NULLA QUISQUAM? AT!!!
```

### random(txt)
```js
/** 
 * Generating random UPPER or lower letters when it run
 * */
console.log(fn.random(txt)); 
// lOREM IpsUm. DOLOr! letters
console.log(fn.random(long)); 
// lOrEm IPSUM dolor sIt aMET, CONsEcTeTUR AdIPisICing elit. FaCILiS! nulLa QUIsquaM? At!!!
```

### wordCount(txt)
```js
console.log(fn.wordCount(txt)); 
// 3
console.log(fn.wordCount(long)); 
// 12
```

### start(txt,str)
```js
console.log(fn.start(txt,"Lorem")); 
// true
console.log(fn.start(long,"ipsum")); 
// false
```

### end(txt,str)
```js
console.log(fn.end(txt,"dolor!")); 
// true
console.log(fn.end(long,"amet")); 
// false
```

### slug(txt)
```js
console.log(fn.slug(txt)); 
// lorem-ipsum-dolor
console.log(fn.slug(long)); 
// lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-facilis-nulla-quisquam-at
```

### elit(txt)
```js
console.log(fn.elit(txt)); 
// lфгέm-ipsum.-dфlфг!
console.log(fn.elit(long)); 
// lфгέm-ipsum-dфlфг-sit-αmέt,-cфnsέctέtuг-αdipisicing-έlit.-fαcilis!-nullα-quisquαm?-αt!!!
```

### readingTime(txt[, format='{time}'][, wpm=180])
```js
console.log(fn.readingtime(txt)); 
// about a minute
console.log(fn.readingtime(long, '', 5)); 
// about 2 minute
```

### focus(txt, str [, chars=20])
```js
console.log(fn.focus(txt,"dolor",5)); 
// ...SUm. dolor!
console.log(fn.focus(long,"amet",10)); 
// ...dolor SIT amet, consecte...
```

### truncate(txt, chars [, dots])
```js
console.log(fn.truncate(txt,10)); 
// Lorem ipSU
console.log(fn.truncate(long,20," >>")); 
// Lorem ipSUm dolor SI >>
```

### wordWrap(txt, length)
```js
console.log(fn.wordWrap(txt,5)); 
// Lorem <br />ipSUm. <br />dolor! <br />
console.log(fn.wordWrap(long,10)); 
// Lorem ipSUm <br />dolor SIT <br />amet, consectetur <br />adipisicing <br />elit. Facilis! <br />nulla quisquam? <br />
```

### wrapper(txt, str [, tagName='span'][, className='mark'])
```js
console.log(fn.wrapper(txt,'dolor')); 
// Lorem ipSUm. <span class='mark'>dolor</span>!
console.log(fn.wrapper(long,'amet','span','highlight')); 
// Lorem ipSUm dolor SIT <span class='highlight'>amet</span>, consectetur adipisicing elit. Facilis! nulla quisquam? at!!!
```

### htmlEsc(txt)
```js
const htmlText = 'This is <span>span</span> tag. This is <strong>strong</strong>';

console.log(fn.htmlEsc(htmlText)); 
// This is &lt;span&gt;span&lt;/span&gt; tag. This is &lt;strong&gt;strong&lt;/strong&gt;
```

### Todos

 - Write MORE New Functions
 - HTML tags remove
 - Comment lines remove
 - Array Functions
 - Hash Functions
 - ...


