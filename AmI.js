"use strict";

let amI = { not: {} };

const Types = {
  string: "string",
  number: "number",
  boolean: "boolean",
  symbol: "symbol",
  undefined: "undefined",
  null: "null",
  function: "function",
  asyncfunction: "asyncfunction",
  object: "object"
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
  let name = toString
    .call(val)
    .slice(8, -1)
    .toLowerCase(); // remove '[object' and ']'

  if (name) {
    return Types[name];
  }

  return null;
};

let isOfType = type => val => type === getObjectType(val);

let isString = isOfType("string");
let isNumber = isOfType("number");
let isBoolean = isOfType("boolean");
let isSymbol = isOfType("symbol");
let isUndefined = isOfType("undefined");
let isNull = isOfType("null");
let isFunction = isOfType("function");
let isAsyncFunction = isOfType("asyncfunction");
let isObject = isOfType("object");
let isArray = isOfType("array");

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

module.exports = amI;
