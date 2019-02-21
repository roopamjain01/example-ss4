// @flow
import AxiosService from "./AxiosService";
import fetchBookDetails from "../graphql/fetchBookDetails.graphql";
import fetchChapters from "../graphql/fetchChapters.graphql";
import fetchTopics from "../graphql/fetchTopicsDetails.graphql";
import type {BookCoverPage} from "../models/BookCoverPage";
import type {BookChapter} from "../models/BookChapter";
import type {TopicDetails} from "../models/Topic";

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

  static fetchTopicsDetails(chapterIDs: string): Promise<Array<TopicDetails>> {
    const variables = {
      "chapterIDs": chapterIDs,
    };

    return AxiosService
      .getInstance(fetchTopics, variables)
      .request()
      .then(response => response.data)
      .then(data => {
        return data.data["readTopics"];
      });
  }
}
