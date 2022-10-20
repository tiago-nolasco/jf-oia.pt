import { IContent } from "./IContent";

export interface IDocument extends IContent {
  name: string,
  idSubCat: string;
  subCatName: string;
}
