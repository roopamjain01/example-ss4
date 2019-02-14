// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RootState} from "../types/RootState";
import {fetchBookCoverPage} from "../actions/fetchBookCoverPage";
import {fetchBookChapterList} from "../actions/fetchBookChapterList";
import {changeDispalyPageName} from "../actions/changeDispalyPageName";
import type {BookCoverPage} from "../models/BookCoverPage";
import type {DisplayPage} from "../models/DisplayPage";

const mapStateToProps = (state: RootState) => {
  return {
    bookCoverPage: state.dataState.bookCoverPage,
    displayPage: state.dataState.displayPage
  };
};

const mapDispatchToProps = (dispatch: *, props: Props) => {
  return {
    dispatchFetchCoverPageAction: () => {
      dispatch(fetchBookCoverPage('1'));
    },
    dispatchFetchChapterListAction: (id: string) => {
      dispatch(fetchBookChapterList(id));
    },
    dispatchChangeDisplayPageName: (dispalyPage: object) => {
      dispatch(changeDispalyPageName(dispalyPage));
    }
  };
};

type Props = {
  bookCoverPage?: Array<BookCoverPage>,
  displayPage?: Object<DisplayPage>,
  dispatchFetchCoverPageAction?: (id: string) => void,
  dispatchFetchChapterListAction?: (id: string) => void,
};

class BookCoverPageComponent extends Component<Props> {

  componentDidMount() {
    // fetch book cover page details
    this.props.dispatchFetchCoverPageAction('1');
  }

  render() {

    if (this.props.displayPage.Name !== "bookCoverPage") {
      return null;
    }

    return (
      <div>
        <h2>{this.props.bookCoverPage.Title}</h2>
        <h3>{this.props.bookCoverPage.Tagline}</h3>
        <p>{this.props.bookCoverPage.Intro}</p>
        <button
          onClick={() => {
            this.props.dispatchFetchChapterListAction(this.props.bookCoverPage.ID);
            this.props.dispatchChangeDisplayPageName({Name: 'chapterList'});
          }}
        >
        Get Started
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookCoverPageComponent);
