'use strict';
module.exports = function () {
  this.len = x => {
    if(this.isFalsy(x))
      return 0;
    else if(this.isObj(x))
      return Object.keys(x).length;
    else if(this.isArr(x))
      return x.length;
    else 
      return x.toString().length;
  }
  this.isEmpty = x => this.len(x) <= 0;
  this.isStr = x => typeof x === "string";
  this.isNum = x => typeof x === "number" && x === x;
  this.isNan = x => typeof x === "number" && x !== x;
  this.isInt = x => this.isNum(x) && x === Math.floor(x);
  this.isFloat = x => this.isNum(x) && x !== Math.floor(x);
  this.isBool = x => !!x === x;
  this.isFalsy = x => !!x === false;
  this.isNull = x => x === null;
  this.isUndef = x => x === undefined;
  this.isNund = x => this.isNull(x) || this.isUndef(x);
  this.isArr = function(x) {
    try {
      return x.constructor.toString().split(' ')[1].replace(/\W+/g,'').toLowerCase() === "array"
    } catch (err) {
      return false;
    }
  }
  this.isObj = function(x) {
    try {
      return x.constructor.toString().split(' ')[1].replace(/\W+/g,'').toLowerCase() === "object"
    } catch (err) {
      return false;
    }
  }

  this.map = (x,fn) => {
    if(this.isObj(x)) {
      for(let key in x) {
        x[key] = fn(x[key]);
      }
      return x;
    } else if(this.isArr(x)) {
      return x.map(x=>fn(x));
    } else {
      return fn(x);
    }
  }
  
  this.control = (txt,fn) => {
    if(this.isObj(txt)) {
      return JSON.stringify(txt) === JSON.stringify(fn(txt));
    } else if(this.isArr(txt)) {
      return txt.toString() === fn(txt).toString();
    } else {
      return txt === fn(txt);
    }
  }

  this.upper = txt => {
    if(this.isObj(txt) || this.isArr(txt)) {
      return this.map(txt,this.upper);
    } else {
      return (this.isStr(txt) && txt.length) ? txt.toUpperCase() : txt;
    }
  }
  this.isUpper = (txt) => this.control(txt,this.upper);
  
  this.lower = txt => {
    if(this.isObj(txt) || this.isArr(txt)) {
      return this.map(txt,this.lower);
    } else {
      return (this.isStr(txt) && txt.length) ? txt.toLowerCase() : txt;
    }
  } 
  this.isLower = (txt) => this.control(txt,this.lower);
  this.reverse = txt => (this.isStr(txt) || this.isNum(txt)) ? txt.toString().split('').reverse().join('') : false;
  this.randomCase = txt => this.isStr(txt) ? txt.split('').map(letter => parseInt(Math.random()*100)%2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('') : txt;
  this.changeCase = txt => this.isStr(txt) ? txt.split('').map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join('') : txt ;
  this.wordCount = txt => this.isStr(txt) ? txt.replace(/\s+/g, ' ').split(' ').length : false;
  this.start     = (txt,str) => txt.slice(0,str.length) === str;
  this.end       = (txt,str) => txt.substr(-str.length) === str;
    

}
