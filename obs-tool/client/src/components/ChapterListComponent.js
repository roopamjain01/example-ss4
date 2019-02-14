// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RootState} from "../types/RootState";
import Card from "react-bootstrap/Card";
import type {BookChapter} from "../models/BookChapter";
import type {DisplayPage} from "../models/DisplayPage";
import {changeDispalyPageName} from "../actions/changeDispalyPageName";

const mapStateToProps = (state: RootState) => {
  return {
    bookChapterList: state.dataState.bookChapterList,
    displayPage: state.dataState.displayPage
  };
};

const mapDispatchToProps = (dispatch: *, props: Props) => {
  return {
    dispatchChangeDisplayPageName: (dispalyPage: object) => {
      dispatch(changeDispalyPageName(dispalyPage));
    }
  };
};

type Props = {
  bookChapterList?: Array<BookChapter>,
  displayPage?: Object<DisplayPage>
};

class ChapterListComponent extends Component<Props> {

  componentDidMount() {
  }

  render() {
    if (!this.props.bookChapterList.length || this.props.displayPage.Name !== "chapterList") {
      return null;
    }

    const chapterList = this.props.bookChapterList.map((chapter, index) =>
      <div key= {'checkboxContainer_' + chapter.ID}>
        <input type="checkbox"
          key={chapter.ID}
          index={index+1}
          onChange= {()=> {this.props.handleChange}}
        />
        <label
          key= {'checkboxLabel_' + chapter.ID}
          style={{
            verticalAlign: "bottom"
          }}
        >
          {chapter.Title}
        </label>
        <br/>
      </div>
    );

    return (
      <div style={{clear: 'both'}}>
        {chapterList}

        <button
          onClick={() => {
            this.props.dispatchChangeDisplayPageName({Name: 'bookCoverPage'});
          }}
        >
          Back
        </button>

        <button
          style={{
            marginLeft: '25px'
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChapterListComponent);
