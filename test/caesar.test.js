const caesarFunctions = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar",()=>{
    describe("error handling", ()=>{
       it("should return false when the shift amount is 0", ()=>{
           const actual = caesarFunctions.caesar("thinkful", 0);
           const expected = false;
           expect(actual).to.equal(expected);
       });
       it("should return false when the shift amount is above 25", ()=>{
        const actual = caesarFunctions.caesar("thinkful", 27);
        const expected = false;
        expect(actual).to.equal(expected);
        });
        it("should return false when the shift amount is below -25", ()=>{
            const actual = caesarFunctions.caesar("thinkful", -26);
            const expected = false;
            expect(actual).to.equal(expected);
        });
    });
    describe("encoding", ()=>{
        it("should encode a string with a positive shift",()=>{
            const actual = caesarFunctions.caesar("thinkful", 3);
            const expected = "wklqnixo";
            expect(actual).to.equal(expected);
        });
        it("should encode a string with a negative shift",()=>{
            const actual = caesarFunctions.caesar("thinkful", -3);
            const expected = "qefkhcri";
            expect(actual).to.equal(expected);
        });
        it("should handle letters at the end of the alphabet",()=>{
            const actual = caesarFunctions.caesar("zoom", 3);
            const expected = "crrp";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters",()=>{
            const actual = caesarFunctions.caesar("Thinkful", 3);
            const expected = "wklqnixo";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces",()=>{
            const actual = caesarFunctions.caesar("This is a secret message!", 8);
            const expected = "bpqa qa i amkzmb umaaiom!";
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", ()=>{
        it("should decode a string moving opposite to the shift",()=>{
            const actual = caesarFunctions.caesar("wklqnixo", 3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
        it("should decode a string opposite to a negative shift",()=>{
            const actual = caesarFunctions.caesar("qefkhcri", -3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
        it("should handle letters at the end of the alphabet",()=>{
            const actual = caesarFunctions.caesar("crrp", 3, false);
            const expected = "zoom";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters",()=>{
            const actual = caesarFunctions.caesar("Wklqnixo", 3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces",()=>{
            const actual = caesarFunctions.caesar("bpqa qa i amkzmb umaaiom!", 8, false);
            const expected = "this is a secret message!";
            expect(actual).to.equal(expected);
        });
    });

});

