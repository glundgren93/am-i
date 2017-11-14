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

  // Function
  it("am i a function", () => {
    expect(amI.function(fn)).to.equal(true);
  });

  it("am i not a function", () => {
    expect(amI.not.function(fn)).to.equal(false);
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
  });

  it("am i not a integer", () => {
    expect(amI.not.integer(42)).to.equal(false);
  });

  // Safe Integer
  it("am i an safeInteger", () => {
    expect(amI.safeInteger(Number.MAX_SAFE_INTEGER)).to.equal(true);
  });

  it("am i not a safeInteger", () => {
    expect(amI.not.safeInteger(Number.MAX_SAFE_INTEGER)).to.equal(false);
  });
});
