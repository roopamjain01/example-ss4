// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RootState} from "../types/RootState";
import type {DisplayPage} from "../models/DisplayPage";
import type {Topic} from "../models/Topic";
import {changeDisplayPageName} from "../actions/changeDisplayPageName";

const mapStateToProps = (state: RootState) => {
  return {
    displayPage: state.dataState.displayPage,
    topicDetails: state.dataState.topicDetails,
    currentTopic: state.dataState.currentTopic
  };
};

const mapDispatchToProps = (dispatch: *, props: Props) => {
  return {
    dispatchChangeDisplayPageName: (displayPage: DisplayPage) => {
      dispatch(changeDisplayPageName(displayPage));
    }
  };
};

type Props = {
  displayPage?: DisplayPage,
  topicDetails?: Array<Topic>,
  dispatchChangeDisplayPageName?: (displayPage: displayPage) => void,
  currentTopic?: Topic | null
};

class TopicDetailComponent extends Component<Props> {
  render() {
    if (this.props.displayPage.Name !== "topicDetail") {
      return null;
    }

    return (
      <div style={{clear: 'both'}}>
        <h2>{this.props.currentTopic.Title}</h2>
        <div dangerouslySetInnerHTML={{"__html": this.props.currentTopic.Description}}></div>
        <div style={{clear: 'both'}}>
          <button
            style={{marginTop: '25px'}}
            onClick={() => {
              this.props.dispatchChangeDisplayPageName({Name: 'topicHolder'});
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
)(TopicDetailComponent);
