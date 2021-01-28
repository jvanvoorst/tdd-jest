import React, { Component } from "react";
import { connect } from "react-redux";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

import "./App.css";
// import Input from "./Input";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        {/* <Input /> */}
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 2 }]}
        />
      </div>
    );
  }
}

export default App;
