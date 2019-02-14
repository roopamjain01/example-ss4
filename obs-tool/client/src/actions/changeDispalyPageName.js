import {ACTION_CHANGE_DISPLAY_PAGE}  from "./actionTypes";
import DataService from "../services/DataService";
import {Dispatch} from "redux";
import {showError} from "./error";
import type {DisplayPage} from "../models/DisplayPage";


export function changeDispalyPageName(data: DisplayPage): { type: string, data: DisplayPage } {
  return {
    type: ACTION_CHANGE_DISPLAY_PAGE,
    data,
  };
}
