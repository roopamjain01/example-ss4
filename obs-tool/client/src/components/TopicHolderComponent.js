// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RootState} from "../types/RootState";
import Card from "react-bootstrap/Card";
import type {DisplayPage} from "../models/DisplayPage";
import type {CheckboxStatus} from "../models/CheckboxStatus";
import type {Topic} from "../models/Topic";
import {changeDisplayPageName} from "../actions/changeDisplayPageName";
import {setCurrentTopic, setCurrentChapter} from "../actions/setCurrentTopic";

const mapStateToProps = (state: RootState) => {
  return {
    displayPage: state.dataState.displayPage,
    checkboxStatus: state.dataState.checkboxStatus,
    topicDetails: state.dataState.topicDetails,
    bookChapterList: state.dataState.bookChapterList,
    currentChapter: state.dataState.currentChapter
  };
};

const mapDispatchToProps = (dispatch: *, props: Props) => {
  return {
    dispatchChangeDisplayPageName: (displayPage: DisplayPage) => {
      dispatch(changeDisplayPageName(displayPage));
    },
    dispatchSetCurrentTopic: (currentTopic: Topic) => {
      dispatch(setCurrentTopic(currentTopic));
    },
    dispatchSetCurrentChapter: (currentChapter: String) => {
      dispatch(setCurrentChapter(currentChapter));
    }
  };
};

type Props = {
  displayPage?: DisplayPage,
  checkboxStatus?: Array<CheckboxStatus>,
  topicDetails: Array<Topic>,
  bookChapterList?: Array<BookChapter>,
  dispatchChangeDisplayPageName?: (displayPage: displayPage) => void,
  dispatchSetCurrentTopic?: (currentTopic: Topic) => void,
  dispatchSetCurrentChapter?: (chapterId: string) => void
};

class TopicHolderComponent extends Component<Props> {

  componentDidMount() {
  }

  render() {
    if (this.props.displayPage.Name !== "topicHolder") {
      return null;
    }

    let tabs = null;
    let data = null;

    tabs = this.props.bookChapterList.map((chapter, index) =>{
      if(this.props.checkboxStatus.indexOf(chapter.ID) >= 0) {
        return (
          <button tabIndex="0"
                  key={chapter.ID}
                  role="tab"
                  style={{
                    marginRight: '25px'
                  }}
                  onClick={() => {
                    this.props.dispatchSetCurrentChapter(chapter.ID);
                  }}>
            {chapter.Title}
          </button>
        );
      }
    });

    if (!this.props.checkboxStatus.length) {
      data = 'Please select topic from previous page.';
    }else if (!this.props.topicDetails.length) {
      data = 'No data for selected topic, please select topic from previous page.';
    } else{
      data = this.props.topicDetails.map((topic, index) => {
        if(topic.Chapter.ID !== this.props.currentChapter) {
          return null;
        }
        return (
          <div
            key= {'topic_' + topic.ID}
            style={{
              clear: 'both',
              marginBottom: '25px'
            }}
          >
            <h2>{topic.Title}</h2>
            <p>{topic.Summary}</p>

            <button>Add to list</button>

            <button
              style={{marginLeft: '25px'}}
              onClick={() => {
                this.props.dispatchChangeDisplayPageName({Name: 'topicDetail'});
                this.props.dispatchSetCurrentTopic(topic);
              }}
            >
              Read more
            </button>
          </div>
        )
      });
    }

    return (
      <div style={{clear: 'both'}}>
        <div>{tabs}</div>
        <div>{data}</div>
        <div style={{clear: 'both',}}>
          <button
            style={{marginTop: '25px'}}
            onClick={() => {
              this.props.dispatchChangeDisplayPageName({Name: 'chapterList'});
            }}
          >
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopicHolderComponent);
