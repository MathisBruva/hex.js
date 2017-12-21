// Hex.js, Hex yor strings easily. Makes hard things easy.
// Authored: 2017/12/21
// Licene: MIT

"use strict";


module.exports.hex = function(str, hex) {
	try{
    hex = unescape(encodeURIComponent(str))
    .split('').map(function(v){
      return v.charCodeAt(0).toString(16)
    }).join('')
  }
  catch(e){
    hex = str
    throw new TypeError('invalid text input: ' + str)
  }
  return hex
}

module.exports.unHex = function(hex, str) {
try{
    str = decodeURIComponent(hex.replace(/(..)/g,'%$1'))
  }
  catch(e){
    str = hex
    throw new TypeError('invalid text input: ' + hex)
  }
  return str
}