const chai = require("chai");
const amI = require("../AmI");

const expect = chai.expect;

describe("Primitives", () => {
  let primitive = "primitive";

  // String
  it("am i a string", () => {
    expect(amI.string("gjepaiga")).to.equal(true);
  });

  it("am i not a string", () => {
    expect(amI.not.string("faefae")).to.equal(false);
  });

  // Number
  it("am i a number", () => {
    expect(amI.number(9)).to.equal(true);
  });

  it("am i not a number", () => {
    expect(amI.not.number("number")).to.equal(true);
  });

  // Boolean
  it("am i a boolean", () => {
    expect(amI.boolean(false)).to.equal(true);
  });

  it("am i not a boolean", () => {
    expect(amI.not.boolean(false)).to.equal(false);
  });

  // Symbol
  it("am i a symbol", () => {
    expect(amI.symbol(Symbol("symbol"))).to.equal(true);
  });

  it("am i not a symbol", () => {
    expect(amI.not.symbol(Symbol("symbol"))).to.equal(false);
  });

  // Undefined
  it("am i undefined", () => {
    let x;
    expect(amI.undefined(x)).to.equal(true);
  });

  it("am i not undefined", () => {
    let x;
    expect(amI.not.undefined(x)).to.equal(false);
  });

  // Null
  it("am i null", () => {
    let x = null;
    expect(amI.null(x)).to.equal(true);
  });

  it("am i not null", () => {
    expect(amI.not.null(null)).to.equal(false);
  });

  // Primitive
  it("am i a primitive", () => {
    expect(amI.primitive(primitive)).to.equal(true);
  });

  it("am i not a primitive", () => {
    expect(amI.not.primitive(primitive)).to.equal(false);
  });
});

describe("Array", () => {
  let arr = [1, 2, 3];
  it("am i an array", () => {
    expect(amI.array(arr)).to.equal(true);
  });

  it("am i not an array", () => {
    expect(amI.not.array(arr)).to.equal(false);
  });
});

describe("Objects", () => {
  let fn = () => {};
  let obj = {};

  // Function
  it("am i a function", () => {
    expect(amI.function(fn)).to.equal(true);
  });

  it("am i not a function", () => {
    expect(amI.not.function(fn)).to.equal(false);
  });

  // Object
  it("am i an object", () => {
    expect(amI.object(obj)).to.equal(true);
    expect(amI.object(fn)).to.equal(false);
  });

  it("am i not an object", () => {
    expect(amI.not.object(fn)).to.equal(true);
    expect(amI.not.object(obj)).to.equal(false);
  });
});

describe("Number", () => {
  // NaN
  it("am i a nan", () => {
    expect(amI.nan("")).to.equal(true);
  });

  it("am i not a nan", () => {
    expect(amI.not.nan(42)).to.equal(true);
  });

  // Integer
  it("am i an integer", () => {
    expect(amI.integer(42)).to.equal(true);
    expect(amI.integer("42")).to.equal(false);
  });

  it("am i not a integer", () => {
    expect(amI.not.integer(42)).to.equal(false);
    expect(amI.not.integer("42")).to.equal(true);
  });

  // Even
  it("am i an even number", () => {
    expect(amI.even(42)).to.equal(true);
    expect(amI.even(41)).to.equal(false);
    expect(amI.even("42")).to.equal(false);
  });

  it("am i not an even number", () => {
    expect(amI.not.even(41)).to.equal(true);
    expect(amI.not.even(42)).to.equal(false);
    expect(amI.not.even("41")).to.equal(true);
  });

  // Odd
  it("am i an odd number", () => {
    expect(amI.odd(41)).to.equal(true);
    expect(amI.odd(42)).to.equal(false);
    expect(amI.odd("41")).to.equal(false);
  });

  it("am i not an odd number", () => {
    expect(amI.not.odd(42)).to.equal(true);
    expect(amI.not.odd(41)).to.equal(false);
    expect(amI.not.odd("42")).to.equal(true);
  });

  // Infinite
  it("am i an infinite number", () => {
    expect(amI.infite(Infinity)).to.equal(true);
  });

  it("am i not an infinite number", () => {
    expect(amI.not.infite(Infinity)).to.equal(false);
  });

  // Finite
  it("am i a finite number", () => {
    expect(amI.finite(910)).to.equal(true);
  });

  it("am i not a finite number", () => {
    expect(amI.not.finite(910)).to.equal(false);
  });

  // Positive Number
  it("am i a positive number", () => {
    expect(amI.positive(91)).to.equal(true);
    expect(amI.positive(-1)).to.equal(false);
    expect(amI.positive("1")).to.equal(false);
  });

  it("am i not a positive number", () => {
    expect(amI.not.positive(-91)).to.equal(true);
    expect(amI.not.positive(91)).to.equal(false);
    expect(amI.not.positive("91")).to.equal(true);
  });

  // Negative Number
  it("am i a negative number", () => {
    expect(amI.negative(-91)).to.equal(true);
    expect(amI.negative(1)).to.equal(false);
    expect(amI.negative("-1")).to.equal(false);
  });

  it("am i not a negative number", () => {
    expect(amI.not.negative(91)).to.equal(true);
    expect(amI.not.negative(-91)).to.equal(false);
    expect(amI.not.negative("-91")).to.equal(true);
  });

  // Above Number
  it("am i above", () => {
    expect(amI.above(91, 90)).to.equal(true);
    expect(amI.above(91, "90")).to.equal(false);
    expect(amI.above("91", "90")).to.equal(false);
    expect(amI.above("91", 90)).to.equal(false);
  });

  it("am i not above", () => {
    expect(amI.not.above(91, 90)).to.equal(false);
    expect(amI.not.above("91", 90)).to.equal(true);
    expect(amI.not.above(91, "90")).to.equal(true);
    expect(amI.not.above("91", "90")).to.equal(true);
  });

  // Under Number
  it("am i under", () => {
    expect(amI.under(90, 91)).to.equal(true);
    expect(amI.under(90, "91")).to.equal(false);
    expect(amI.under("90", "91")).to.equal(false);
    expect(amI.under("90", 91)).to.equal(false);
  });

  it("am i not under", () => {
    expect(amI.not.under(90, 91)).to.equal(false);
    expect(amI.not.under("90", 91)).to.equal(true);
    expect(amI.not.under(90, "91")).to.equal(true);
    expect(amI.not.under("90", "90")).to.equal(true);
  });

  // Safe Integer
  it("am i an safeInteger", () => {
    expect(amI.safeInteger(Number.MAX_SAFE_INTEGER)).to.equal(true);
  });

  it("am i not a safeInteger", () => {
    expect(amI.not.safeInteger(Number.MAX_SAFE_INTEGER)).to.equal(false);
  });
});
