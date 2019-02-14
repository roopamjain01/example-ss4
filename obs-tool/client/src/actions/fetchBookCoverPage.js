import {ACTION_FETCH_BOOK_DETAILS}  from "./actionTypes";
import DataService from "../services/DataService";
import {Dispatch} from "redux";
import {showError} from "./error";

/**
 * Action creator: fetch rubrics
 * It is async via redux-thunk
 *
 * @returns {Function}
 */
export function fetchBookCoverPage(id: string): (dispatch: Dispatch) => void {
  return (dispatch: Dispatch) => {    
    DataService.fetchCoverPageDetail(id).then(data => {
      dispatch({
        type: ACTION_FETCH_BOOK_DETAILS,
        data,
      });
    }).catch(error => {
      dispatch(showError(error));
    });
  };
}
