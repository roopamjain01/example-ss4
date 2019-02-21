import {ACTION_CHANGE_CHECKBOX_STATUS}  from "./actionTypes";
import DataService from "../services/DataService";
import {Dispatch} from "redux";
import type {CheckboxStatus} from "../models/CheckboxStatus";


export function changeCheckboxStatus(data: CheckboxStatus): { type: string, data: CheckboxStatus } {
  return {
    type: ACTION_CHANGE_CHECKBOX_STATUS,
    data,
  };
}
