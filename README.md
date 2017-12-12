# am-i [![Build Status](https://travis-ci.org/glundgren93/am-i.svg?branch=master)](https://travis-ci.org/glundgren93/am-i) 


## Install

```
$ npm install am-i
```


### Predicate library with no dependencies based on is.js(https://github.com/pwnn/is.js)

- [x] null
- [x] undefined
- [x] exists
- [x] truthy
- [x] falsy
- [ ] nil
- [x] number
- [ ] numeral
- [x] nan
- [x] odd number
- [x] even number
- [x] finite number
- [x] infinite number
- [x] positive number
- [x] negative number
- [x] above number
- [x] under number
- [x] integer
- [x] safe integer
- [x] string
- [x] empty string
- [x] substring
- [x] prefix
- [x] suffix
- [x] boolean
- [x] object
- [x] empty object
- [ ] object property defined
- [x] array
- [x] Int8Array
- [x] Uint8Array
- [x] Uint8ClampedArray
- [x] Int16Array
- [x] Uint16Array
- [x] Int32Array
- [x] Uint32Array
- [x] Float32Array
- [x] Float64Array
- [ ] array like object
- [ ] in array
- [x] symbol
- [ ] palindrome
- [x] function
- [x] async function
- [ ] ie
- [ ] chrome
- [ ] firefox
- [ ] opera
- [ ] safari
- [ ] online
- [ ] offline

## Usage

```js
const amI = require("am-i");

const obj = {
	foo: "bar"
};

amI.object(obj) // true
amI.string(obj) // false

```

