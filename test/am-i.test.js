const chai = require("chai");
const amI = require("../AmI");

const expect = chai.expect;

describe("Primitives", () => {
  it("am i string", () => {
    expect(amI.string("gjepaiga")).to.equal(true);
  });

  it("am i not string", () => {
    expect(amI.not.string("faefae")).to.equal(false);
  });
});
