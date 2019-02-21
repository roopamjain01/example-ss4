import type {DataState} from "../types/DataState";
import {
  ACTION_FETCH_BOOK_DETAILS,
  ACTION_FETCH_BOOK_CHAPTER_LIST,
  ACTION_CHANGE_DISPLAY_PAGE,
  ACTION_CHANGE_CHECKBOX_STATUS,
  ACTION_FETCH_TOPIC_DETAILS,
  ACTION_SET_CURRENT_TOPIC,
  ACTION_SET_CURRENT_CHAPTER
} from "../actions/actionTypes";

const defaultState: DataState = {
  bookCoverPage: [],
  bookChapterList: [],
  topicDetails: [],
  checkboxStatus: [],
  displayPage: {Name: 'bookCoverPage'},
  currentTopic: null
};

export function dataState(state: DataState = defaultState, action: *) {
  switch (action.type) {
    case ACTION_FETCH_BOOK_DETAILS:
      return Object.assign({}, state, {
        bookCoverPage: action.data,
      });
    case ACTION_FETCH_BOOK_CHAPTER_LIST:
      return Object.assign({}, state, {
        bookChapterList: action.data,
      });
    case ACTION_CHANGE_DISPLAY_PAGE:
      return Object.assign({}, state, {
        displayPage: action.data,
      });
    case ACTION_CHANGE_CHECKBOX_STATUS:
      return Object.assign({}, state, {
        checkboxStatus: action.data,
      });
    case ACTION_FETCH_TOPIC_DETAILS:
      return Object.assign({}, state, {
        topicDetails: action.data,
      });
    case ACTION_SET_CURRENT_TOPIC:
      return Object.assign({}, state, {
        currentTopic: action.data,
      });
    case ACTION_SET_CURRENT_CHAPTER:
      return Object.assign({}, state, {
        currentChapter: action.data,
      });
    default:
      return state;
  }
}
