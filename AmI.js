"use strict";

let amI = { not: {} };

/**
 * https://stackoverflow.com/questions/3250379/what-is-the-call-function-doing-in-this-javascript-statement/3250415#3250415
 */
const toString = Object.prototype.toString;

// https://stackoverflow.com/a/34491287/1810241
let isEmpty = obj => {
  for (var x in obj) {
    return false;
  }
  return true;
};

let addPredicate = (name, predicate) => {
  amI[name] = predicate;

  amI.not[name] = (...args) => {
    return !predicate.apply(null, Array.prototype.slice.call(args));
  };
};

addPredicate("real", val => val !== null);

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

/**
 * Array
 */
addPredicate("array", val => {
  return Array.isArray(val) || toString.call(val) === "[object Array]";
});

addPredicate(
  "function",
  val => typeof val === "function" || toString.call(val) === "[object Function]"
);

/**
 * Object
 */
addPredicate("object", val => toString.call(val) === "[object Object]");
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
