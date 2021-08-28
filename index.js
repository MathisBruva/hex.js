/**
 * Hex.js is a module that turns strings into an hex key, and it could also reverse the process.
 * Made by: Araysh with the help of Kylemods
 */

"use strict";

function Hex() {
  this.hex = (str) => {
    var hex

    try {
      hex = unescape(encodeURIComponent(str))
      .split('').map((v) => {
        return v.charCodeAt(0).toString(16)
      }).join('')
    } catch(e) {
      hex = str
      throw new TypeError(`Invalid text input: ${str}`)
    }
    return hex
  }

  this.unHex = (hex) => {
    var str

    try {
      str = decodeURIComponent(hex.replace(/(..)/g,'%$1'))
    } catch (e) {
      throw new TypeError(`Invalid hex input: ${str}`)
    }
    return str
  }
}

let hexClient = new Hex();


module.exports.hex = hexClient.hex;
module.exports.unHex = hexClient.unHex;
