# Hex.js

This module turns any string to hex.

### Installing

```
npm i hex.js
```

Example 

```js
const hex = require('hex.js').hex;
const unHex = require('hex.js').unHex;

console.log(hex('Hello world!')); // -> 48656c6c6f20776f726c6421

console.log(unHex('48656c6c6f20776f726c6421')); // -> Hello world!
```

## Authors

* **KyleMods** - *Initial work* - [KyleMods](https://github.com/MathisBruva)
* **Araysh** - *Modification* - [Araysh](https://github.com/Araysh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
