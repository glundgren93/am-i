"use strict";

let amI = { not: {} };

const string = val => {
  return typeof val === "string";
};
const number = val => {
  return typeof val === "number";
};
const boolean = val => {
  return typeof val === "boolean";
};
const symbol = val => {
  return typeof val === "symbol";
};

let addPredicate = (name, predicate) => {
  amI[name] = predicate;

  amI.not[name] = val => {
    return !predicate.call(null, val);
  };
};

/**
 * Primitives
 */
addPredicate("string", val => string(val));
addPredicate("number", val => number(val));
addPredicate("boolean", val => boolean(val));
addPredicate("symbol", val => symbol(val));
addPredicate("undefined", val => val === undefined);
addPredicate("null", val => val === null);
addPredicate("primitive", val => {
  return (
    string(val) ||
    number(val) ||
    boolean(val) ||
    symbol(val) ||
    val === undefined ||
    val === null
  );
});

addPredicate("NaN", val => isNaN(val));
addPredicate("function", val => typeof val === "function");
addPredicate("function", val => typeof val === "function");
addPredicate("function", val => typeof val === "function");
addPredicate("function", val => typeof val === "function");

module.exports = amI;
