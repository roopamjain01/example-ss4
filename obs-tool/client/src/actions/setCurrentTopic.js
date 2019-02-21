import {ACTION_SET_CURRENT_TOPIC, ACTION_SET_CURRENT_CHAPTER}  from "./actionTypes";
import {Dispatch} from "redux";
import type {DisplayPage} from "../models/Topic";

export function setCurrentTopic(data: Topic): { type: string, data: Topic } {
  return {
    type: ACTION_SET_CURRENT_TOPIC,
    data,
  };
}

export function setCurrentChapter(data: string): { type: string, data: string } {
  return {
    type: ACTION_SET_CURRENT_CHAPTER,
    data,
  };
}
