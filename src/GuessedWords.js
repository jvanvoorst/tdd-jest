import React from "react";
import PropTypes from "prop-types";

export default function GuessedWords({ guessedWords }) {
  let contents;
  if (!guessedWords.length) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word</span>
    );
  } else {
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((word, index) => (
              <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{contents}</div>;
}
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }).isRequired
  ),
};