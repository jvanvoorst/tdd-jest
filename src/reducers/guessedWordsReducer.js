import { actionTypes } from "../actions/index";

export default function guessedWordReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}
