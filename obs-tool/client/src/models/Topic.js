// @flow
export type Topic = {
  ID: string,
  Title: string,
  Summary: string,
  Description: string,
  Chapter{
    ID: string,
    Title: string
  }
};
