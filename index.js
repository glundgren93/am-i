"use strict";

let amI = { not: {} };

const Types = {
  String: "String",
  Number: "Number",
  Boolean: "Boolean",
  Symbol: "Symbol",
  Undefined: "Undefined",
  Null: "Null",
  Function: "Function",
  AsyncFunction: "AsyncFunction",
  Object: "Object",
  Int8Array: "Int8Array",
  Uint8Array: "Uint8Array",
  Uint8ClampedArray: "Uint8ClampedArray",
  Int16Array: "Int16Array",
  Uint16Array: "Uint16Array",
  Int32Array: "Int32Array",
  Uint32Array: "Uint32Array",
  Float32Array: "Float32Array",
  Float64Array: "Float64Array"
};

const toString = Object.prototype.toString;

let addPredicate = (name, predicate) => {
  amI[name] = predicate;

  amI.not[name] = (...args) => {
    return !predicate.apply(null, Array.prototype.slice.call(args));
  };
};

// https://stackoverflow.com/a/34491287/1810241
let isEmpty = obj => {
  for (var x in obj) {
    return false;
  }
  return true;
};

let getObjectType = val => {
  //   https://stackoverflow.com/questions/3250379/what-is-the-call-function-doing-in-this-javascript-statement/3250415#3250415
  let name = toString.call(val).slice(8, -1); // remove '[object' and ']'

  if (name) {
    return Types[name];
  }

  return null;
};

let isOfType = type => val => type === getObjectType(val);

let isString = isOfType("String");
let isNumber = isOfType("Number");
let isBoolean = isOfType("Boolean");
let isSymbol = isOfType("Symbol");
let isUndefined = isOfType("Undefined");
let isNull = isOfType("Null");
let isFunction = isOfType("Function");
let isAsyncFunction = isOfType("AsyncFunction");
let isObject = isOfType("Object");
let isArray = isOfType("Array");
let isInt8Array = isOfType("Int8Array");
let isUint8Array = isOfType("Uint8Array");
let isUint8ClampedArray = isOfType("Uint8ClampedArray");
let isInt16Array = isOfType("Int16Array");
let isUint16Array = isOfType("Uint16Array");
let isInt32Array = isOfType("Int32Array");
let isUint32Array = isOfType("Uint32Array");
let isFloat32Array = isOfType("Float32Array");
let isFloat64Array = isOfType("Float64Array");

/**
 * Existence
 */
addPredicate("exists", val => val !== null);
addPredicate("truthy", val => Boolean(val));
addPredicate("falsy", val => !val);

/**
 * Primitives
 */
addPredicate("string", val => isString(val));
addPredicate(
  "number",
  val => amI.not.nan(val) && isNumber(val) // typeof NaN === "number"
);
addPredicate("boolean", val => isBoolean(val));
addPredicate("symbol", val => isSymbol(val));
addPredicate("undefined", val => isUndefined(val));
addPredicate("null", val => isNull(val));

addPredicate("primitive", val => {
  return (
    amI.string(val) ||
    amI.number(val) ||
    amI.boolean(val) ||
    amI.symbol(val) ||
    amI.undefined(val) ||
    amI.null(val)
  );
});

/**
 * Array
 */
addPredicate("array", val => {
  return Array.isArray(val) || isArray(val);
});
addPredicate("int8Array", val => isInt8Array(val));
addPredicate("uInt8Array", val => isUint8Array(val));
addPredicate("int8ClampedArray", val => isUint8ClampedArray(val));
addPredicate("int16Array", val => isInt16Array(val));
addPredicate("uInt16Array", val => isUint16Array(val));
addPredicate("int32Array", val => isInt32Array(val));
addPredicate("uInt32Array", val => isUint32Array(val));
addPredicate("float32Array", val => isFloat32Array(val));
addPredicate("float64Array", val => isFloat64Array(val));

/**
 * Function
 */
addPredicate("function", val => isFunction(val));
addPredicate("async", val => isAsyncFunction(val));

/**
 * Object
 */
addPredicate("object", val => isObject(val));
addPredicate("emptyObject", val => amI.object(val) && isEmpty(val));

/**
 * Number
 */
addPredicate("nan", val => isNaN(parseFloat(val)));
addPredicate("odd", val => amI.number(val) && val % 2 !== 0);
addPredicate("even", val => amI.number(val) && val % 2 === 0);
addPredicate("infite", val => !isFinite(val));
addPredicate("finite", val => isFinite(val));
addPredicate("positive", val => amI.number(val) && val > 0);
addPredicate("negative", val => amI.number(val) && val < 0);
addPredicate(
  "above",
  (val, max) => amI.number(val) && amI.number(max) && val > max
);
addPredicate(
  "under",
  (val, max) => amI.number(val) && amI.number(max) && val < max
);
addPredicate("integer", val => amI.number(val) && Number.isInteger(val));
addPredicate(
  "safeInteger",
  val => amI.number(val) && Number.isSafeInteger(val)
);

/**
 * String
 */
addPredicate("emptyString", val => val === "" && val.length === 0);
addPredicate("prefixOf", (prefix, val) => val.startsWith(prefix));
addPredicate("suffixOf", (suffix, val) => val.endsWith(suffix));
addPredicate("substringOf", (substring, val) => val.includes(substring));

module.exports = amI;
