const polybiusFunctions = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", ()=>{
    describe("encoding", ()=>{
        it("should encode letters to numbers", ()=>{
            const actual= polybiusFunctions.polybius("thinkful", true);
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
        it("should convert 'i' and 'j' to 42" ,()=>{
            const actual= polybiusFunctions.polybius("jimmy", true);
            const expected = "4242232345";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters",()=>{
            const actual= polybiusFunctions.polybius("Hello World", true);
            const expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces when encoding",()=>{
            const actual= polybiusFunctions.polybius("hello world", true);
            const expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", ()=>{
        it("should decoded numbers to letters",()=>{
            const actual= polybiusFunctions.polybius("3251131343 2543241341", false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });
        it("should convert 42 to 'i/j'" ,()=>{
            const actual= polybiusFunctions.polybius("4242232345", false);
            const expected = "(i/j)(i/j)mmy";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces when decoding",()=>{
            const actual= polybiusFunctions.polybius("3251131343 2543241341", false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        }); 
        it("should return false for words with an odd amount of numbers", ()=>{
            const actual = polybiusFunctions.polybius("4234 879", false);
            const expected= false;
            expect(actual).to.equal(expected);
        });
    });
});
