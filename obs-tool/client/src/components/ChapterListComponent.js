// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RootState} from "../types/RootState";
import Card from "react-bootstrap/Card";
import type {BookChapter} from "../models/BookChapter";
import type {DisplayPage} from "../models/DisplayPage";
import type {CheckboxStatus} from "../models/CheckboxStatus";
import type {Topic} from "../models/Topic";
import {fetchTopicsDetails} from "../actions/fetchTopicDetails";
import {changeDisplayPageName} from "../actions/changeDisplayPageName";
import {changeCheckboxStatus} from "../actions/changeCheckboxStatus";
import {setCurrentChapter} from "../actions/setCurrentTopic";

const mapStateToProps = (state: RootState) => {
  console.log(state.dataState);
  return {
    bookChapterList: state.dataState.bookChapterList,
    displayPage: state.dataState.displayPage,
    checkboxStatus: state.dataState.checkboxStatus
  };
};

const mapDispatchToProps = (dispatch: *, props: Props) => {
  return {
    dispatchChangeDisplayPageName: (displayPage: DisplayPage) => {
      dispatch(changeDisplayPageName(displayPage));
    },
    dispatchCheckboxStatus: (checkboxStatus: CheckboxStatus) => {
      dispatch(changeCheckboxStatus(checkboxStatus))
    },
    dispatchFetchTopicsDetails: (chapterIDs: string) => {
      dispatch(fetchTopicsDetails(chapterIDs));
    },
    dispatchSetCurrentChapter: (currentChapter: String) => {
      dispatch(setCurrentChapter(currentChapter));
    }
  };
};

type Props = {
  bookChapterList?: Array<BookChapter>,
  displayPage?: DisplayPage,
  checkboxStatus?: Array<CheckboxStatus>,
  dispatchChangeDisplayPageName?: (displayPage: displayPage) => void,
  dispatchFetchTopicsDetails?: (chapterIds: string) => void,
  dispatchSetCurrentChapter?: (chapterId: string) => void
};

class ChapterListComponent extends Component<Props> {

  componentDidMount() {
  }

  render() {
    const getCheckedStatus = (id) => {
      const checkboxStatusArr = this.props.checkboxStatus;
      for (let checkboxStatus of checkboxStatusArr) {
        if(checkboxStatus == id) {
          return true;
        }
      }

      return false;
    }

    if (!this.props.bookChapterList.length || this.props.displayPage.Name !== "chapterList") {
      return null;
    }

    const chapterList = this.props.bookChapterList.map((chapter, index) => {
      const chapterID = chapter.ID;
      return <div key= {'checkboxContainer_' + chapter.ID}>
        <input type="checkbox"
          key= {'checkbox_' + chapterID}
          index= {index+1}
          checked= {getCheckedStatus(chapterID)}
          onChange= {(e) => {this.setCheckboxStatus(e, chapterID)}}
        />
        <label
          key= {'checkboxLabel_' + chapter.ID}
          style={{
            verticalAlign: "bottom"
          }}
        >
          {chapter.Title}
        </label>
      </div>
    });

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
          onClick={() => {
            if (this.props.checkboxStatus.length) {
              this.props.dispatchSetCurrentChapter(this.props.checkboxStatus[0]);
              this.props.dispatchFetchTopicsDetails(this.props.checkboxStatus.toString());
            }

            this.props.dispatchChangeDisplayPageName({Name: 'topicHolder'});
          }
        }
        >
          Next
        </button>
      </div>

    );
  }

  setCheckboxStatus (e, id) {
    const checkboxStatusArr = [...this.props.checkboxStatus];

    const index = checkboxStatusArr.findIndex(checkboxID => checkboxID === id);

    if (index < 0 && e.target.checked) {
      checkboxStatusArr.push(id);
    }

    if (index >= 0 && !e.target.checked) {
      checkboxStatusArr.splice(index, 1);
    }

    this.props.dispatchCheckboxStatus(checkboxStatusArr);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChapterListComponent);
