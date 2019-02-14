// @flow

import axios from "axios";
import compress from "graphql-query-compress";

export default class AxiosService {
  static getInstance(query: *, variables: *) {
    let headers = {};

    /* TODO: add custom headers for auth and/or statics
    const user = StorageService.readUser();
    if (user && user.Token) {
      headers["Authorization"] = "Bearer " + user.Token;
    }
    */

    let compressedQuery = compress(query);

    let data: { query?: string, variables?: * } = {
      query: compressedQuery,
      variables: Object.assign({}, {
        "versionInput": {
          "Mode": "LIVE",
          "Status": ["PUBLISHED"],
        },
      }, variables),
    };

    return axios.create({
      url: "/graphql",
      method: "post",
      data: data,
      headers: headers,
    });
  }
}
