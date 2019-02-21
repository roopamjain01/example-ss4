// @flow

import type {BookCoverPage} from "../models/BookCoverPage";
import type {BookChapter} from "../models/BookChapter";
import type {Topic} from "../models/Topic"
import type {DisplayPage} from "../models/DisplayPage";
import type {CheckboxStatus} from "../models/CheckboxStatus";

export type DataState = {
  bookCoverPage: Array<BookCoverPage>
  bookChapterList: Array<BookChapter>
  topicDetails: Array<Topic>,
  checkboxStatus: Array<checkboxStatus>,
  displayPage: DisplayPage | 'bookCoverPage',
  currentTopic: Topic | null
};
