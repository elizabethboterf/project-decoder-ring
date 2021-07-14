const substitutionFunctions = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", ()=>{
    describe("error handling", ()=>{
        it("should return false if there is no alphabet given",()=>{
            const actual = substitutionFunctions.substitution(true);
            const expected = false;
            expect(actual).to.equal(expected);
        });
        it("should return false if the given alphabet is not exactly 26 characters",()=>{
            const actual = substitutionFunctions.substitution("hello", "short", true);
            const expected = false;
            expect(actual).to.equal(expected);
        });
        it("should return false if the given alphabet is not unique", ()=>{
            const actual = substitutionFunctions.substitution("hello", "abcabcabcabcabcabcabcabcyz", true);
            const expected =false;
            expect(actual).to.equal(expected);
        });
    });
    describe("encoding", ()=>{
        it("should enocde the message based on the given alphabet", ()=>{
            const actual= substitutionFunctions.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.equal(expected);
        });
        it("should work with unique characters", ()=>{
            const actual = substitutionFunctions.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl", true);
            const expected = "y&ii$r&";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces",()=>{
            const actual= substitutionFunctions.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", ()=>{
            const actual = substitutionFunctions.substitution("Message", "$wae&zrdxtfcygvuhbijnokmpl", true);
            const expected = "y&ii$r&";
            expect(actual).to.equal(expected);
        })
    });
    describe("decoding", ()=>{
        it("should decoded the message based on the given alphabet",()=>{
            const actual= substitutionFunctions.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });
        it("should work with unique characters",()=>{
            const actual= substitutionFunctions.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces",()=>{
            const actual= substitutionFunctions.substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "you are an excellent spy";
            expect(actual).to.equal(expected);
        });
    });
        
        
    });
