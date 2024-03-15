import { test, expect, describe } from "vitest";
import stringPermutations from "./main";

// function to factorise input
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

// Check for an empty input
test("Returns an empty array for ''", () => {
  expect(stringPermutations("")).toEqual([""]);
});

// test for 2 letter string of unique characters
test("returns all permutations for a two-character string", () => {
  //use sort on input and output to avoid right answers in wrong order
  expect(stringPermutations("ab").sort()).toEqual(["ab", "ba"].sort());
});

// test all possible permutations for a 3 letter string of unique characters
test("returns all permutations for a three-character string", () => {
  const expected = ["abc", "acb", "bac", "bca", "cab", "cba"];
  expect(stringPermutations("abc").sort()).toEqual(expected.sort());
});

test('returns all unique permutations for "aab"', () => {
  const expected = ["aab", "aba", "baa"];
  expect(stringPermutations("aab").sort()).toEqual(expected.sort());
});

// Check 4 letter string of unique characters
test("returns all permutations for a four-character string", () => {
  const input = "abcd";
  const inputLength = input.length;
  const expectedLength = factorial(inputLength); // Should be 24
  const result = stringPermutations(input);
  expect(result.length).toEqual(expectedLength);
  // Further checks could include checking for uniqueness or the presence of specific permutations
});

// check for 4 letter string with one unique character
test('returns all unique permutations for "aaab"', () => {
  const expected = ["aaab", "aaba", "abaa", "baaa"];
  expect(stringPermutations("aaab").sort()).toEqual(expected.sort());
});

// check for 4 letter string with one repeated character
test('returns all unique permutations for "aabc"', () => {
  const expected = [
    "aabc",
    "aacb",
    "abac",
    "abca",
    "acab",
    "acba",
    "baac",
    "baca",
    "bcaa",
    "caab",
    "caba",
    "cbaa",
  ];
  expect(stringPermutations("aabc").sort()).toEqual(expected.sort());
});

test("ensures all permutations are unique", () => {
  const input = "aabb";
  const result = stringPermutations(input);
  const uniqueResults = new Set(result);
  expect(uniqueResults.size).toEqual(result.length);
});

//check for length of returned array
test("returns correct permutations for strings with duplicate characters", () => {
  const input = "aabb";
  const inputLength = input.length;
  // 4! / (2! * 2!) = 6 permutations for "aabb" considering duplicates
  const expectedLength = factorial(inputLength) / 4;
  const result = stringPermutations(input);
  expect(result.length).toEqual(expectedLength);
});

// check for character being the same letter up to a string of four letters
describe("Repeating character input", () => {
  const charactersToTest = "a";
  const maxLength = 4;
  for (const char of charactersToTest) {
    for (let length = 1; length <= maxLength; length++) {
      const testString = char.repeat(length); // repeats the character length
      const testName = `returns unique permutation for '${testString}'`; // test output
      test(testName, () => {
        const expectedOutput = [testString];
        expect(stringPermutations(testString)).toEqual(expectedOutput);
      });
    }
  }
});

test("verifies length of unique inputs array permutations for a longer string", () => {
  const input = "abcd";

  const expectedResultLength = factorial(input.length);
  const result = stringPermutations(input);

  // Check correct number of permutations
  expect(result.length).toEqual(expectedResultLength);

  // Check uniqueness
  const uniqueResults = new Set(result);
  expect(uniqueResults.size).toEqual(expectedResultLength);

  // Check if result contains a known permutation
  expect(result).toContain("bcda");

  // Check if each permutation is valid
  result.forEach((permutation) => {
    expect(permutation.split("").sort().join("")).toEqual(
      input.split("").sort().join("")
    );
  });
});
