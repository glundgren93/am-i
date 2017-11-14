"use strict";

let amI = { not: {} };

/**
 * https://stackoverflow.com/questions/3250379/what-is-the-call-function-doing-in-this-javascript-statement/3250415#3250415
 */
const toString = Object.prototype.toString;

let addPredicate = (name, predicate) => {
  amI[name] = predicate;

  amI.not[name] = val => {
    return !predicate.call(null, val);
  };
};

/**
 * Primitives
 */
addPredicate("string", val => {
  return typeof val === "string" || toString.call(val) === "[object String]";
});

addPredicate("number", val => {
  return (
    amI.not.nan(val) && // typeof NaN === "number"
    (typeof val === "number" || toString.call(val) === "[object Number]")
  );
});

addPredicate("boolean", val => {
  return typeof val === "boolean" || toString.call(val) === "[object Boolean]";
});

addPredicate("symbol", val => {
  return typeof val === "symbol" || toString.call(val) === "[object Symbol]";
});

addPredicate("undefined", val => {
  return val === undefined || toString.call(val) === "[object Undefined]";
});

addPredicate("null", val => {
  return val === null || toString.call(val) === "[object Null]";
});

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

addPredicate("nan", val => isNaN(parseFloat(val)));

addPredicate(
  "function",
  val => typeof val === "function" || toString.call(val) === "[object Function]"
);

/**
 * Array
 */
addPredicate("array", val => {
  return Array.isArray(val) || toString.call(val) === "[object Array]";
});

/**
 * Number
 */
addPredicate("integer", val => Number.isInteger(val));
addPredicate("safeInteger", val => Number.isSafeInteger(val));

module.exports = amI;
