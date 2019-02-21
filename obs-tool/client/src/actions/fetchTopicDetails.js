import {ACTION_FETCH_TOPIC_DETAILS}  from "./actionTypes";
import DataService from "../services/DataService";
import {Dispatch} from "redux";
import {showError} from "./error";

/**
 * Action creator: fetch topic details;
 * It is async via redux-thunk
 *
 * @returns {Function}
 */
export function fetchTopicsDetails(chapterIds: string): (dispatch: Dispatch) => void {
  return (dispatch: Dispatch) => {
    DataService.fetchTopicsDetails(chapterIds).then(data => {
      dispatch({
        type: ACTION_FETCH_TOPIC_DETAILS,
        data,
      });
    }).catch(error => {
      dispatch(showError(error));
    });
  };
}
