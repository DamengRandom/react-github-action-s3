export interface IContents {
  title: string;
  code: string;
  headingCss: string;
  contentCss: string;
}

export interface IContentsList {
  contents: Array<IContents>;
}
