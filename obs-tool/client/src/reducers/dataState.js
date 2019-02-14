import type {DataState} from "../types/DataState";
import {
  ACTION_FETCH_BOOK_DETAILS,
  ACTION_FETCH_BOOK_CHAPTER_LIST,
  ACTION_CHANGE_DISPLAY_PAGE
} from "../actions/actionTypes";

const defaultState: DataState = {
  bookCoverPage: [],
  bookChapterList: [],
  displayPage: {Name: 'bookCoverPage'}
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
    default:
      return state;
  }
}
