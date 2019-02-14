// @flow

import type {BookCoverPage} from "../models/BookCoverPage";
import type {BookChapter} from "../models/BookChapter";
import type {DisplayPage} from "../models/DisplayPage";

export type DataState = {
  bookCoverPage: Array<BookCoverPage>
  bookChapterList: Array<BookChapter>
  displayPage: Array<DisplayPage>
};
