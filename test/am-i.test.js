const chai = require("chai");
const amI = require("../AmI");

const expect = chai.expect;

describe("Primitives", () => {
  it("am i a string", () => {
    expect(amI.string("gjepaiga")).to.equal(true);
  });

  it("am i not a string", () => {
    expect(amI.not.string("faefae")).to.equal(false);
  });

  it("am i a number", () => {
    expect(amI.number(9)).to.equal(true);
  });
  it("am i not a number", () => {
    expect(amI.number("number")).to.equal(false);
  });

  it("am i a boolean", () => {
    expect(amI.boolean(false)).to.equal(true);
  });
  it("am i not a boolean", () => {
    expect(amI.boolean("false")).to.equal(false);
  });

  it("am i a symbol", () => {
    expect(amI.symbol(Symbol("symbol"))).to.equal(true);
  });

  it("am i not a symbol", () => {
    expect(amI.symbol("Symbol")).to.equal(false);
  });

  it("am i undefined", () => {
    let x;
    expect(amI.undefined(x)).to.equal(true);
  });

  it("am i not undefined", () => {
    let x = 1;
    expect(amI.undefined(x)).to.equal(false);
  });

  it("am i null", () => {
    let x = null;
    expect(amI.null(x)).to.equal(true);
  });

  it("am i not null", () => {
    let x;
    expect(amI.null(x)).to.equal(false);
  });

  it("am i a primitive", () => {
    expect(amI.primitive("primitive")).to.equal(true);
  });

  it("am i not a primitive", () => {
    expect(amI.primitive({})).to.equal(false);
  });
});

describe("Objects", () => {
  it("am i a function", () => {
    let fn = () => {};

    expect(amI.function(fn)).to.equal(true);
  });

  it("am i not a function", () => {
    expect(amI.function("fn")).to.equal(false);
  });

  
});
