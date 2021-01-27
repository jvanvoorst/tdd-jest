import { getLetterMatchCount } from "./index";

describe("getLetterMatchCount", () => {
  const secretWord = "party";

  test("returns correct count when there are no matching letters", () => {
    const actual = getLetterMatchCount("bones", secretWord);
    expect(actual).toBe(0);
  });

  test("returns the correct count when there are 3 matching letters", () => {
    const actual = getLetterMatchCount("train", secretWord);
    expect(actual).toBe(3);
  });

  test("returns correct count when there are duplicate letter in guess", () => {
    const actual = getLetterMatchCount("parka", secretWord);
    expect(actual).toBe(3);
  });
});
