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

  this.upper = txt =>{
    if(this.isObj(txt) || this.isArr(txt)) {
      return this.map(txt,this.upper);
    } else {
      return (this.isStr(txt) && txt.length) ? txt.toUpperCase() : txt;
    }
  }
  this.isUpper = (txt) => this.control(txt,this.upper);
  
  this.lower = txt =>{
    if(this.isObj(txt) || this.isArr(txt)) {
      return this.map(txt,this.lower);
    } else {
      return (this.isStr(txt) && txt.length) ? txt.toLowerCase() : txt;
    }
  } 
  this.isLower = (txt) => this.control(txt,this.lower);











    // this.camel = function(txt) { return this.isStr(txt) ? txt.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase()) : txt }
    // this.isCamel = function(txt) { return typeof txt === "string" && txt === this.camel(txt)}
    
    // capital   : function(txt, noPreservedCase) {
    //   if(typeof txt !== "string") {
    //     return txt; 
    //   } else {
    //     if(noPreservedCase !== true) {
    //       txt = txt.toLowerCase();
    //     }
    //     return txt.replace(/([\.\?!]+)(\s*)/g, r => r[0] )
    //     .split(/([\.\?!]+)/g)
    //     .map(x=>x.length > 1 ? x[0].toUpperCase() + x.slice(1) : x + " ")
    //     .join("").trim();
    //   }
    // },
    // // capital   : (txt, noPreservedCase) => (noPreservedCase === true ? txt : txt.toLowerCase() ).replace(/([\.\?!]+)(\s*)/g, r => r[0] ).split(/([\.\?!]+)/g).map(x=>x.length > 1 ? x[0].toUpperCase() + x.slice(1) : x + " ").join("").trim(),
    // title     : (txt, noPreservedCase) => (noPreservedCase === true ? txt : txt.toLowerCase() ).replace(/(?:^|\s)\S/g, x => x.toUpperCase()),

    // isCapital : function(txt) {return txt === this.capital(txt)},
    // isTitle   : function(txt) {return txt === this.title(txt)},
    // reverse   : txt => txt.split('').reverse().join(''),
    // random    : txt => txt.split('').map(letter => parseInt(Math.random()*100)%2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join(''),
    // switch    : txt => txt.split('').map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join(''),
    // wordCount : txt => txt.replace(/\s+/g, ' ').split(' ').length,
    // start     : (txt,str) => txt.slice(0,str.length) === str,
    // end       : (txt,str) => txt.substr(-str.length) === str,
    // slug    : function(txt) {
    //     let arr = { 'ş': 's', 'Ş': 'S', 'ı': 'i', 'İ': 'I', 'ç': 'c', 'Ç': 'C', 'ü': 'u', 'Ü': 'U', 'ö': 'o', 'Ö': 'O', 'ğ': 'g', 'Ğ': 'G'};
    //     txt = txt.toLowerCase();        
    //     for (var c in arr) {
    //         var regex = new RegExp(c, "g");
    //         txt = txt.replace(regex, arr[c]);
    //     }
    //     txt = txt.replace(/[^-\w\s]/g, '');
    //     txt = txt.replace(/^\s+|\s+$/g, '');
    //     txt = txt.replace(/[-\s]+/g, '-');
    //     txt = txt.replace(/-+$/g, '');
    //     return txt;
    // },
    // elit    : function(txt) {
    //     // you can add/change/remove item(s)
    //     let arr = {
    //         "a":"α",
    //         "A":"Δ",
    //         "b":"ь",
    //         "B":"β",
    //         "r":"г",
    //         "R":"Я",
    //         "e":"έ",
    //         "E":"Ξ",
    //         "y":"Ч",
    //         "Y":"Ч",
    //         "o":"ф",
    //         "O":"Ф"
    //     };
    //     txt = txt.toLowerCase();        
    //     for (var c in arr) {
    //         var regex = new RegExp(c, "g");
    //         txt = txt.replace(regex, arr[c]);
    //     }
    //     // txt = txt.replace(/[^-\w\s]/g, ''); // remove unneeded chars
    //     txt = txt.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
    //     txt = txt.replace(/[-\s]+/g, '-'); // convert spaces to hyphens
    //     txt = txt.replace(/-+$/g, ''); // trim any trailing hyphens
    //     return txt;
    // },
    // readingtime : function (txt, format, wpm) {
    //     var text = format || '{time}',
    //         words = this.wordCount(txt),
    //         duration = Math.round(words / (wpm || 180)),
    //         placeholder = /\{time\}/,
    //         string = '',
    //         result = function () {
    //           return text.replace(placeholder, string)
    //         }
      
    //     if (0 <= duration && 2 > duration) {
    //       string = 'about a minute'
    //     } else if (25 <= duration && 35 >= duration) {
    //       string = 'about half an hour'
    //     } else if (55 <= duration && 65 >= duration) {
    //       string = 'about an hour'
    //     } else if (55 > duration) {
    //       string = 'about ' + duration + ' minutes'
    //     } else {
    //       string = 'quite some time'
    //     }
    //     return result()
    //   },

    //   focus: function(txt, str, chars	) {
    //     var len   = txt.length,
    //     strlen    = str ? str.length : 0,
    //     chars     = chars || 20,
    //     start	    = 0,
    //     stop	    = 0,
    //     index     = 0;
        
    //     if(!str) return txt.slice(0,chars);
        
    //     index = txt.indexOf(str);
    //     if(index === -1) return false;

    //     start = index - chars >= 0 ? index - chars: 0;
    //     stop = index + strlen + chars < len ? index + strlen + chars : len;
    //     txt = txt.substring(start, stop);
    //     if(start > 0) txt = "..." + txt;
    //     if(stop < len) txt = txt + "...";
    //     return txt;
    //   },

    //   truncate: function(txt, count, dots) {
    //     let append  = typeof dots === "string" ? dots : !!dots ? '...' : '';
    //     count       = parseInt(count) || 0;
    //     if(Math.abs(count) >= txt.length ) return txt;

    //     let result  = txt;
    //     txt         = txt.trim();

    //     if(count > 0) { result = txt.slice(0, count) + append }
    //     else if(count < 0) { result = append + txt.slice(txt.length - count * -1) }
    //     return result;
    //   },

    //   wrapper: function(txt, keyword, tagName, className) {
    //     keyword       = keyword ? keyword.trim() : "";
    //     if(!keyword) return txt;
        
    //     txt       = txt.trim();
    //     tagName   = tagName ? tagName.trim() : "span";
    //     className = className ? className.trim() : className || "mark";

    //     let tagOpen   = `<${tagName}`,
    //         tagClose  = `</${tagName}>`;
    //     tagOpen   += (className.length > 0) ? ` class='${className}'>` : '>' ;
        
    //     let regEx = new RegExp(keyword, "g");
    //     return txt.replace(regEx, tagOpen + keyword + tagClose);
    //   },

    //   wordWrap: function(txt, len) {
    //     if(!txt) return false;
    //     txt = txt.trim();
    //     if(isNaN(parseInt(len))) return false;
    //     len = Math.abs(parseInt(len));
    //     if(txt.indexOf(" ") < 0) return false;

    //     let arr = txt.split(" "),
    //         arrLen = arr.length,
    //         result = '', tmp = '', i = 0;
        
    //     do {
    //       tmp += arr[i] + " ";
    //       if(tmp.length >= len) {
    //         result += tmp + "<br />";
    //         tmp = '';
    //       }
    //       i++;
    //     } while (i < arrLen);
    //     return result;
    //   },

    //   htmlEsc: function(txt) {
    //     return !txt ? false : txt.trim().replace(/(<|>|&|"|')/g, match => {
    //       switch (match) {
    //         case '<':
    //           return match = '&lt;';
    //         case '>':
    //           return match = '&gt;';
    //         case '&':
    //           return match = '&amp;';
    //         case '"': 
    //           return match = '&quot;';
    //         case "'":
    //           return match = '&apos;';
    //       }
    //     });
    //   },


}
