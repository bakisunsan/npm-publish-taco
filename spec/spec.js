const { expect } = require("chai");
const {_tacoParse} = require("../index")

describe("taco test", () => {
    it("should return 3 taco", () =>{
        const num = 3;
        const expected =  "🌮🌮🌮";

        expect(_tacoParse(num)).to.equal(expected);;
    });
    it("should empty taco", () =>{
        const num = 0;
        const expected =  "";

        expect(_tacoParse(num)).to.equal(expected);;
    });
});