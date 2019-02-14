// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RootState} from "../types/RootState";
import "../scss/App.scss";
import BookCoverPage from "./BookCoverPageComponent";
import Card from "./ChapterListComponent";

class App extends Component<Props> {

  render() {
    return (
      <div>
        <BookCoverPage/>
        <Card/>
      </div>
    );
  }
}

export default App;
