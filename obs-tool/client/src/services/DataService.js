// @flow
import AxiosService from "./AxiosService";
import fetchBookDetails from "../graphql/fetchBookDetails.graphql";
import fetchChapters from "../graphql/fetchChapters.graphql";
import type {BookCoverPage} from "../models/BookCoverPage";
import type {BookChapter} from "../models/BookChapter";

export default class DataService {

  static fetchCoverPageDetail(id: string): Promise<Array<BookCoverPage>> {
    const variables = {
      "id": id,
    };
    return AxiosService
      .getInstance(fetchBookDetails, variables)
      .request()
      .then(response => response.data)
      .then(data => {
        return data.data["readBookDetails"];
      });
  }

  static fetchChaterList(bookID: string): Promise<Array<BookChapter>> {
    const variables = {
      "bookID": bookID,
    };
    return AxiosService
      .getInstance(fetchChapters, variables)
      .request()
      .then(response => response.data)
      .then(data => {
        return data.data["readChapters"];
      });
  }
}
