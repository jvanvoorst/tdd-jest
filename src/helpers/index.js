export function getLetterMatchCount(guessedWord, secretWord) {
  const secretSet = new Set(secretWord.split(""));
  const guessedSet = new Set(guessedWord.split(""));

  return [...secretSet].filter((letter) => guessedSet.has(letter)).length;
}
