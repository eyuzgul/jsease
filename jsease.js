'use strict';
module.exports = {
    upper     : txt => txt.toUpperCase(),
    lower     : txt => txt.toLowerCase(),
    capital   : txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
    camel     : txt => txt.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase()),
    title     : txt => txt.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    isUpper   : txt => txt === txt.toUpperCase(),
    isLower   : txt => txt === txt.toLowerCase(),
    isCapital : function(txt) {return txt === this.capital(txt)},
    isCamel   : function(txt) {return txt === this.camel(txt)},
    isTitle   : function(txt) {return txt === this.title(txt)},
    reverse   : txt => txt.split('').reverse().join(''),
    random    : txt => txt.split('').map(letter => parseInt(Math.random()*100)%2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join(''),
    switch    : txt => txt.split('').map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join(''),
    wordCount : txt => txt.replace(/\s+/g, ' ').split(' ').length,
    start     : (txt,str) => txt.slice(0,str.length) === str,
    end       : (txt,str) => txt.substr(-str.length) === str,
    trslug    : function(txt) {
        let turkish = { 'ş': 's', 'Ş': 'S', 'ı': 'i', 'İ': 'I', 'ç': 'c', 'Ç': 'C', 'ü': 'u', 'Ü': 'U', 'ö': 'o', 'Ö': 'O', 'ğ': 'g', 'Ğ': 'G'};
        txt = txt.toLowerCase();        
        for (var c in turkish) {
            var regex = new RegExp(c, "g");
            txt = txt.replace(regex, turkish[c]);
        }
        txt = txt.replace(/[^-\w\s]/g, ''); // remove unneeded chars
        txt = txt.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
        txt = txt.replace(/[-\s]+/g, '-'); // convert spaces to hyphens
        txt = txt.replace(/-+$/g, ''); // trim any trailing hyphens
        return txt;
    },
    elit    : function(txt) {
        let arr = {
            "a":"α",
            "A":"Δ",
            "b":"ь",
            "B":"β",
            "r":"г",
            "R":"Я",
            "e":"έ",
            "E":"Ξ",
            "y":"Ч",
            "Y":"Ч",
            "o":"ф",
            "O":"Ф",
        };
        txt = txt.toLowerCase();        
        for (var c in arr) {
            var regex = new RegExp(c, "g");
            txt = txt.replace(regex, arr[c]);
        }
        // txt = txt.replace(/[^-\w\s]/g, ''); // remove unneeded chars
        txt = txt.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
        txt = txt.replace(/[-\s]+/g, '-'); // convert spaces to hyphens
        txt = txt.replace(/-+$/g, ''); // trim any trailing hyphens
        return txt;
    },
    readingtime : function (txt, format, wpm) {
        var text = format || '{time}',
            words = this.wordCount(txt),
            duration = Math.round(words / (wpm || 180)),
            placeholder = /\{time\}/,
            string = '',
            result = function () {
              return text.replace(placeholder, string)
            }
      
        if (0 <= duration && 2 > duration) {
          string = 'about a minute'
        } else if (25 <= duration && 35 >= duration) {
          string = 'about half an hour'
        } else if (55 <= duration && 65 >= duration) {
          string = 'about an hour'
        } else if (55 > duration) {
          string = 'about ' + duration + ' minutes'
        } else {
          string = 'quite some time'
        }
        return result()
      },

      focus: function(txt, str, chars	) {
        var len   = txt.length,
        strlen    = str ? str.length : 0,
        chars     = chars || 20,
        start	    = 0,
        stop	    = 0,
        index     = 0;
        
        if(!str) return txt.slice(0,chars);
        
        index = txt.indexOf(str);
        if(index === -1) return false;

        start = index - chars >= 0 ? index - chars: 0;
        stop = index + strlen + chars < len ? index + strlen + chars : len;
        txt = txt.substring(start, stop);
        if(start > 0) txt = "..." + txt;
        if(stop < len) txt = txt + "...";
        return txt;
      },

      truncate: function(txt, count, dots) {
        let append  = typeof dots === "string" ? dots : !!dots ? '...' : '';
        count       = parseInt(count) || 0;
        if(Math.abs(count) >= txt.length ) return txt;

        let result  = txt;
        txt         = txt.trim();

        if(count > 0) { result = txt.slice(0, count) + append }
        else if(count < 0) { result = append + txt.slice(txt.length - count * -1) }
        return result;
      },

      wrapper: function(txt, keyword, tagName, className) {
        keyword       = keyword ? keyword.trim() : "";
        if(!keyword) return txt;
        
        txt       = txt.trim();
        tagName   = tagName ? tagName.trim() : "span";
        className = className ? className.trim() : className || "mark";

        let tagOpen   = `<${tagName}`,
            tagClose  = `</${tagName}>`;
        tagOpen   += (className.length > 0) ? ` class='${className}'>` : '>' ;
        
        let regEx = new RegExp(keyword, "g");
        return txt.replace(regEx, tagOpen + keyword + tagClose);
      },

      wordWrap: function(txt, len) {
        if(!txt) return false;
        txt = txt.trim();
        if(isNaN(parseInt(len))) return false;
        len = Math.abs(parseInt(len));
        if(txt.indexOf(" ") < 0) return false;

        let arr = txt.split(" "),
            arrLen = arr.length,
            result = '', tmp = '', i = 0;
        
        do {
          tmp += arr[i] + " ";
          if(tmp.length >= len) {
            result += tmp + "<br />";
            tmp = '';
          }
          i++;
        } while (i < arrLen);
        return result;
      },

      htmlEsc: function(txt) {
        return !txt ? false : txt.trim().replace(/(<|>|&|"|')/g, match => {
          switch (match) {
            case '<':
              return match = '&lt;';
            case '>':
              return match = '&gt;';
            case '&':
              return match = '&amp;';
            case '"': 
              return match = '&quot;';
            case "'":
              return match = '&apos;';
          }
        });
      }

}