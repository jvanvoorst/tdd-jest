import React from "react";
import PropTypes from "prop-types";

export default function Congrats({ success }) {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations You guessed the word"
        </span>
      </div>
    );
  }

  return <div data-test="component-congrats" />;
}
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
