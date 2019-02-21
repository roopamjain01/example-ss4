// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RootState} from "../types/RootState";
import "../scss/App.scss";
import BookCoverPage from "./BookCoverPageComponent";
import ChapterList from "./ChapterListComponent";
import TopicHolder from "./TopicHolderComponent";
import TopicDetail from "./TopicDetailComponent";

class App extends Component<Props> {
  render() {
    return (
      <div>
        <BookCoverPage/>
        <ChapterList/>
        <TopicHolder/>
        <TopicDetail/>
      </div>
    );
  }
}

export default App;
