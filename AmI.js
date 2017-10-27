"use strict";

let amI = { not: {} };

function string(val) {
  return typeof val === "string";
}

let addPredicate = (name, predicate) => {
  amI[name] = predicate;

  amI.not[name] = val => {
    return !predicate.call(null, val);
  };
};

addPredicate("string", val => typeof val === "string");

module.exports = amI;
