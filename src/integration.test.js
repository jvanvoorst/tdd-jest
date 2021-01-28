import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";

const secretWord = "party";
const unsuccessfulGuess = "train";

describe("guessWord action dispatcher", () => {
  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));

      const actual = store.getState();
      const expected = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      expect(actual).toEqual(expected);
    });

    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));

      const actual = store.getState();
      const expected = {
        secretWord,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };

      expect(actual).toEqual(expected);
    });
  });
});

describe("some guessed words", () => {
  const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
  const initialState = { guessedWords, secretWord };
  let store;
  beforeEach(() => {
    store = storeFactory(initialState);
  });

  test("updates state correctly for unsuccessful guess", () => {
    store.dispatch(guessWord(unsuccessfulGuess));

    const actual = store.getState();
    const expected = {
      secretWord,
      success: false,
      guessedWords: [
        ...guessedWords,
        {
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3,
        },
      ],
    };

    expect(actual).toEqual(expected);
  });
  test("updates state correctly for successful guess", () => {
    store.dispatch(guessWord(secretWord));

    const actual = store.getState();
    const expected = {
      secretWord,
      success: true,
      guessedWords: [
        ...guessedWords,
        {
          guessedWord: secretWord,
          letterMatchCount: 5,
        },
      ],
    };

    expect(actual).toEqual(expected);
  });
});
