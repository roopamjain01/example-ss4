import {ACTION_FETCH_BOOK_CHAPTER_LIST}  from "./actionTypes";
import DataService from "../services/DataService";
import {Dispatch} from "redux";
import {showError} from "./error";

/**
 * Action creator: fetch rubrics
 * It is async via redux-thunk
 *
 * @returns {Function}
 */
export function fetchBookChapterList(id: string): (dispatch: Dispatch) => void {
  return (dispatch: Dispatch) => {
    DataService.fetchChaterList(id).then(data => {
      dispatch({
        type: ACTION_FETCH_BOOK_CHAPTER_LIST,
        data: data,
      });
    }).catch(error => {
      dispatch(showError(error));
    });
  };
}
